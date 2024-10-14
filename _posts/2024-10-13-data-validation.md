---
layout: post
title: "Data Validation Simplified with Pandera"
date: 2024-10-13
description: Example code highlighting the use of pandera's models for data validation
tags: [software]
---

As a software engineer working at a life sciences company, building robust data pipelines is a huge part of my job. While data hygiene itself is not the most exciting task, it is essential to all data-driven learning and decision-making. Statistical tests, machine learning models, and even gut-level inferences are only as good as the data that goes into them. As the old adage goes: garbage in, garbage out!

Data validation is any task that aims to ensure data conforms to the necessary assumptions required for any scientific analysis. It can mean everything from making sure metadata is formatted correctly, to checking that measurements are within three standard deviations of the mean.

Catching data problems early saves time and money. Training costly models on bad data can lead to drawing erroneous conclusions as well as be a waste of compute resources. And building re-usable data validation methods is especially important, as models trained and tested on a small local dataset might work great but might flop when deployed to a production environment.

<br><br/>

## `pandera` makes data validation easy

As a data scientist, I often did one-off custom data validation in jupyter notebooks. While better than nothing, the problem with jupyter notebooks is that they’re messy and don’t lend themselves to re-usable code. A few years ago, however, I discovered `pandera`, and have been hooked ever since.

`pandera` is a python package that essentially applies the concept of a [pydantic](https://docs.pydantic.dev/latest/) `BaseModel` to a `pandas` dataframe. You can outline the desired validation framework for any dataframe you have in one convenient python class called the [dataframe model](https://pandera.readthedocs.io/en/stable/dataframe_models.html) and use it to check your data.

Below are a few examples of how this simple but powerful class works.

<br><br/>

## **Example 1: Basic typing checking**

Let's say you have a dataframe that contains high-level information about a set of animals. Below is some example code for creating this dataframe:

```python
import pandas as pd

def create_animal_df():
    columns = ["common_name", "genus", "species", "animal_group"]
    rows = [
        dict(zip(columns, ["mouse", "Mus", "musculus", "mammal"])),
        dict(zip(columns, ["zebrafish", "Danio", "rerio","fish"])),
        dict(
            zip(
                columns,
                ["fruit fly", "Drosophila", "melanogaster", "invertebrate"],
            )
        ),
        dict(
            zip(
                columns,
                ["sars_cov2", "betacoronavirus", "pandemicum", None],
            )
        ),
    ]
    df = pd.DataFrame(rows, columns=columns)
    return df

animals = create_animal_df()

# note: printing a markdown version requires the tabulate package
print(animals.to_markdown(index=False))
```

Results in:

```markdown
| common_name | genus           | species      | animal_group |
| :---------- | :-------------- | :----------- | :----------- |
| mouse       | Mus             | musculus     | mammal       |
| zebrafish   | Danio           | rerio        | fish         |
| fruit fly   | Drosophila      | melanogaster | ivertebrate  |
| sars_cov2   | betacoronavirus | pandemicum   |              |
```

Now let’s say you want to check the following:

- Type check each of the column values (ie, make sure `common_name`, `genus`, `species`, etc are strings)
- Check that `common_name` defines the primary key of this table (meaning this column uniquely identifies a row)
- Check that `animal_group` is only one of seven values: mammal, fish, invertebrate, bird, reptile, amphibian, or null

While you could write a function to test that each of these conditions is met, with `pandera` all you have to do is define a dataframe model like so:

```python
import pandas as pd
import pandera as pa
from pandera.typing import Index, DataFrame, Series

class Animals(pa.DataFrameModel):
    common_name: str = pa.Field(unique=True)
    genus: str
    species: str
    animal_group: str = pa.Field(
        nullable=True,
        isin=["mammal", "fish", "invertebrate", "bird", "reptile", "amphibian"],
    )
```

By marking `unique=True` for the `common_name` field, you're setting it as a the primary key and also implicitly making sure that there are no duplicate rows in this table. Validation is as easy as feeding your input data to the `.validate` method:

```python
# validate
Animals.validate(animals, lazy=True)

# or
Animals(animals, lazy=True)
```

The `lazy=True` parameter is handy as it will check the entire dataframe and report on all `SchemaErrors`, as opposed to failing on the first instance of an error when set to `False`:

```python
from pandera.errors import SchemaErrors

def create_invalid_animal_df():
    columns = ["common_name", "genus", "species", "animal_group"]
    rows = [
        dict(zip(columns, ["mouse", "Mus", "musculus", "mammal"])),
        dict(zip(columns, ["zebrafish", "Danio", "rerio","fish"])),
        dict(
            zip(
                columns,
                ["fruit fly", "Drosophila", "melanogaster", "invertebrate"],
            )
        ),
        dict(
            zip(
                columns,
                ["sars_cov2", "betacoronavirus", "pandemicum", None],
            )
        ),
         dict(zip(columns, ["mouse", "Peromyscus", "maniculatus", "mammal"])),
    ]
    df = pd.DataFrame(rows, columns=columns)
    return df

invalid_df = create_invalid_animal_df()

try:
    Animals.validate(invalid_df, lazy=True)
except SchemaErrors as e:
    print(e)
```

yields:

```python
{
    "DATA": {
        "SERIES_CONTAINS_DUPLICATES": [
            {
                "schema": "Animals",
                "column": "common_name",
                "check": "field_uniqueness",
                "error": "series 'common_name' contains duplicate values:0    mouse4    mouseName: common_name, dtype: object"
            }
        ]
    }
}
```

Having been in many situations where you know there's a problem but don't know _where_ in the dataframe the offending value is, this report is amazing! It tells you exactly what check has failed and which column has the offending value. If you set `lazy=False` and check for a `SchemaError` instead, it will even tell you which index/row of the dataframe is breaking the check.

<br><br/>

## **Example 2: Inheritance and Dataframe-level checks**

It’s easy enough to explicitly define whether the values in a column should be strings, floats, or boolean. But sometimes you want to perform context-specific, dataframe-wide checks. Some examples include checking a 1:many mapping between two columns, or making sure the values of a column conform to a normal distribution.

`pandera` accommodates these use cases via dataframe-wide validation methods that are marked with the `@pa.dataframe_check` decorator. This syntax dramatically improves readability and condenses many lines of checking code into one python object.

To extend the previous example, let's say that you perform field research by measuring the weight in grams of real life "samples" of each animal (let's ignore the virus example for now, though I was intrigued to learn that there have been efforts [to quantify the weight of total SARS-CoV-2 viruses](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7685332/) in people with COVID-19). You do this by taking three measurements for each animal. After weeks of data collection, you want to check that your measurements are in triplicate.

Not only can you leverage your previously-outlined `Animals` datamodel for this new dataframe via inheritance, but you can add a new dataframe-wide level check to make sure there are exactly three measurements for each animal:

```python
import pandas as pd
import pandera as pa
from pandera.typing import Index, DataFrame, Series

def create_animal_data():
    """Abbreviatd dataframe showing three samples of mouse weight measurements."""
    columns = [
        "common_name",
        "genus",
        "species",
        "animal_group",
        "sample_id",
        "weight_g",
    ]
    rows = [
        dict(zip(columns, ["mouse", "Mus", "musculus", "mammal", "A", "103.2"])),
        dict(zip(columns, ["mouse", "Mus", "musculus", "mammal", "B", "101.9"])),
        dict(zip(columns, ["mouse", "Mus", "musculus", "mammal", "C", "110.7"])),
    ]
    df = pd.DataFrame(rows, columns=columns)
    return df


class AnimalSamples(Animals):
    common_name: (
        str  # redefine this without the unique=True as it is no longer the primary key
    )
    sample_id: str = pa.Field(unique=True)  # this is the new primary key
    weight_g: float = pa.Field(coerce=True)

    @pa.dataframe_check
    def check_triplicate(cls, df: pd.DataFrame) -> bool:
        """Check that there are exactly three sample_ids for each animal."""
        return (
            df[["common_name", "sample_id"]].groupby("common_name").count().eq(3).all()
        )


# create dataframe
animal_data = create_animal_data()

# validate
AnimalSamples(animal_data, lazy=True)
```

Notice too that the `weight_g` were passed in as strings, but the `coerce=True` argument converted the values to floats.

<br><br/>

## **Example 3: Data pre-processing with custom parsers**

Another fun feature of dataframe models is being able to define custom [data processing methods](https://pandera.readthedocs.io/en/stable/parsers.html) using the `@pa.dataframe_parser` decorator (column-level parsing methods can also be defined). The example below shows how z-score calculation can be done for all the measurements grouped by `common_name`.

```python
from typing import Dict
from pandera.typing import Series

class AnimalSamples(Animals):
    common_name: str  # redefine this without the unique=True
    sample_id: str = pa.Field(unique=True)  # this is the new primary key
    weight_g: float = pa.Field(coerce=True)

    @pa.dataframe_parser
    def z_score(cls, df: pd.DataFrame) -> float:
        mean = (
            df[["common_name", "weight_g"]]
            .groupby("common_name")
            .mean()
            .rename(columns={"weight_g": "mean"})
            .to_dict(orient="index")
        )
        std = (
            df[["common_name", "weight_g"]]
            .groupby("common_name")
            .agg("std")
            .rename(columns={"weight_g": "std"})
            .to_dict(orient="index")
        )
        df["z_score"] = [
            (row.weight_g - mean[row.common_name]["mean"]) / std[row.common_name]["std"]
            for row in df.itertuples()
        ]
        return df

processed_data = AnimalSamples(animal_data)

print(processed_data.to_markdown(index=False))
```

yields:

```
| common_name   | genus   | species   | animal_group   | sample_id   |   weight_g |   z_score |
|:--------------|:--------|:----------|:---------------|:------------|-----------:|----------:|
| mouse         | Mus     | musculus  | mammal         | A           |      103.2 | -0.43508  |
| mouse         | Mus     | musculus  | mammal         | B           |      101.9 | -0.708759 |
| mouse         | Mus     | musculus  | mammal         | C           |      110.7 |  1.14384  |
```

<br><br/>

These three examples cover the vast majority of data validation use cases that I've encountered, but in case you're curious to learn more, definitely check out the `pandera` [docs](https://pandera.readthedocs.io/en/stable/index.html#). The package offers support for other tabular data formats as well (such as `pyspark` and `dask` dataframes), though `pandas` has the most support by far.
