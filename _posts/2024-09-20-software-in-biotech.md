---
layout: post
title: Eight Features of Software Development at a Biotech Start-up
date: 2024-09-18
description: Observations from the last eight years of working at the intersection of biology, data science, and software
tags: software
---

When I finished graduate school in 2016 as a molecular biologist, I knew I wanted to work at the intersection of biology, data science, and software. The field of genomics was exploding then, which brought with it the capability to capture thousands to millions of measurements per cell. All that data promised a more complete picture of biology, but it also necessitated new methods to generate, transform, and interpret said data. You can’t exactly read genome sequences in Excel (though folks have tried), and the sheer quantity of measurements renders experiments practically uninterpretable without statistics and modeling.

Eight years later, we are at the beginning of another exciting era—one fueled by machine learning and large language models. This renewed spotlight on tech and bio will likely attract software developers from outside the field of biology who may be curious about what working at an early to mid-stage biotech company is like. It is with this audience in mind that I decided to write this post.

Let’s start with a basic question:

<h3>What is the goal of software at a biotech start-up?</h3>

This question might sound too elementary—kind of like asking what water is to a fish. But let’s attempt an answer, because I believe it will highlight both the requirements as well as the challenges of building software products for science.

The goal of all software is to automate tedious, repetitive tasks and to perform them at scale and without error. That’s it. One can certainly add some color to this definition: the goal of software is to _cleanly and elegantly_ automate tasks, or to _function seamlessly_ whether there are 10 or 10,000 people using it. But these qualifiers are just decorators of the essential truth that we use software to do things faster and with fewer mistakes than we ourselves can.

Early-stage biotech companies, like all biotech companies, are in the business of creating and selling a biologically-derived product, whether that's a therapeutic drug, sustainably sourced squalane (a component of skin moisturizers), or a genetically engineered crop that is robust to climate change. Biotechs differ from most other companies in that their products require a long development time (many years, if not decades). These companies are often founded on the hint of a promising research finding, but the real work is turning that discovery into a product you can manufacture at scale and that will work as desired in a human body or other intended environment.

This period of transforming a promising scientific nugget to a commercial product is essentially a long phase of research and development. Early-stage biotechs are still conducting novel research, so software in such a context serves the goal of enabling quick iterations of experimental learning and discovery. As a software developer, your product _is the scientific process itself._ All of your products in some way must further the goal of quick and repeatable execution of lab experiments at scale. Everything from developing lab automation software, to deploying machine learning models, to establishing a robust data pipeline that can reliably capture instrument data and calculate key metrics falls under such a goal.

This also means the way software is engineered at a biotech has some quirks:

<ol>
    <li>
        <h5>At most biotech companies, you’re not making a single widget; you’re making a dozen different widgets.</h5>
        <p>You’re not making one strain but ten thousand strains. You’re not helping scientists run just one kind of experiment but often half a dozen (or more!) kinds of experiments, each of which come from a different source, have their own format of metadata, and their own sample tracking.</p>
    </li>
    <li>
        <h5>The widgets you create (front-end tools, data pipelines, dashboards, etc) will be constantly evolving.</h5>
        <p>Constant change is a feature of all start-ups, but coupled with fact #1 above, staying on top of things as a developer can be extra challenging. Practically, this means you often don’t even have time for a design doc for a new software product or feature. By the time you’ve made one, the research team needed the feature yesterday, has hacked together something that works well enough, has used it to meet some objective, and has already moved onto a different research question. This can be both disorienting but also exciting.</p>
    </li>
    <li>
        <h5>Delivering a simple MVP (”minimum viable product”) that is a little buggy is better than delivering a tool that has no flaws.</h5>
        <p>Rapidly prototyping or delivering a simple MVP (”minimum viable product”) is infinitely more valuable than architecting a flawless tool, or even a tool that can do many things but is difficult to update. This is especially so in a world where the requirements for research themselves are changing (see point #2). Designing software like this is more of an art than a science, and I believe gets easier with experience, as you learn which components of a tool can be modular and which must be tailored to a specific purpose.</p>
    </li>
    <li>
        <h5>Communication with your stakeholders/users must be constant and fast.</h5>
        <p>You can’t always assume you know how a lab scientist will want a feature to be implemented, or which metrics a data scientist will want to capture from model. Communicate, communicate, communicate. Wet lab scientists, data scientists, and computational biologists are the scientific experts guiding the development of the biological product that a biotech one day hopes to sell, and unless you did your PhD in the thing they are developing, you probably don’t know exactly what they want and how they want it.</p>
    </li>
    <li>
        <h5>Beautiful, clear, easy-to-understand code will often take a back seat to code that is quickly implemented.</h5>
        <p>While this is not always true and heavily depends on the developers' experience level and tolerance for brittleness, I have yet to win an argument for slowing down the practice of force pushing `dev` branches to `main` using an appeal to readability and elegance alone. This characteristic about developing at biotech startups is the hardest one for me to stomach, because while some folks disagree, I believe readable code is worth prioritizing (more on that in another blog post!)</p>
    </li>
    <li>
        <h5>There is <b>a LOT LESS</b> formality about how software gets done at a biotech.</h5>
        <p>A lack of clarity on design and product requirements, as well as a fast and loose development process—scant code reviews, deploying code from dev branches on a time crunch, for example—are endemic. While sprint planning, JIRA tickets, and design docs are regular features of software development at more mature companies, they are not ubiquitous at biotech startups, which can be both good and bad, depending on the team’s objectives.</p>
    </li>
    <li>
        <h5>Your users are never (if rarely) external to the company</h5>
        <p>They generally consist of lab scientists, data scientists/computational biologists, and any other stakeholders interested in running experiments and evaluating the results of those experiments to inform the next product development cycle. And because you're not launching an external-facing product (in most cases), there is less pressure to make tools that execute flawlessly. If something breaks, you won’t have to worry about 1000s of users writing in to complain.</p>
    </li>
    <li>
        <h5>You have to be prepared to kill your (software) darlings.</h5>
        <p>The company's needs can change fast, and as a result, a product that was necessary six months ago
        may become obsolete six months later. Entire codebases can become defunct, and it might seem like all those hours you put into writing and debugging that code were a waste. I like to take a more positive spin, and think of this culling force akin to the force of natural selection on a population (where the population happens to be your software output). If you get attached to what you write, this will be hard to accept. If you can learn to roll with it, however, it's a fun way to learn new things and have impact in ever more novel ways.</p>
    </li>
    
</ol>

These eight features make for a dynamic and intellectually challenging environment. You’ll learn about technology processes most people have never heard of, all in the context of a mission that feels impactful. Feel free to message me if you have more questions or want advice about a particular problem you’re facing; it might become the subject of my next post!
