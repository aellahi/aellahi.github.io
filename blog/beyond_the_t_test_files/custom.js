var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(function ($) {
  //for accordions where all panels are open
  $('.accordions-open-all .et_pb_accordion .et_pb_toggle_close')
    .addClass('et_pb_toggle_open')
    .removeClass('et_pb_toggle_close');

  $('.accordions-open-all .et_pb_accordion .et_pb_toggle_title').click(
    function () {
      $this = $(this);
      $this.closest('.et_pb_toggle').toggleClass('et_pb_toggle_close');
    }
  );

  // for accordions where the first panel is open
  $('.accordions-open-first .et_pb_accordion .et_pb_toggle')
    .addClass('et_pb_toggle_open')
    .addClass('et_pb_toggle_close');
  $('.accordions-open-first .et_pb_accordion .et_pb_toggle')
    .first()
    .removeClass('et_pb_toggle_close');

  $('.accordions-open-first .et_pb_accordion .et_pb_toggle_title').click(
    function () {
      $this = $(this);
      $this.closest('.et_pb_toggle').toggleClass('et_pb_toggle_close');
    }
  );

  //Adding additional markup to handle Flexbox styling on the Our Work Index pages
  $('.archive article.et_pb_post').each(function () {
    $(this)
      .addClass('flex-styling-applied')
      .find('.entry-title, .post-meta, .post-content')
      .wrapAll('<div class="post-details"/>');
  });

  // Mailchimp Groups API uses the group item ID (e.g. 'e51b2a1d71')
  // and not the human - readable value(e.g. 'Agriculture')
  // But Salesorce uses the human-readable value
  // Here we mimic the choices into a hidden set of checkboxes
  // The group item IDs are defined in the Contact Form 7 form builder
  // using the syntax "label|value" (e.g. "agricuture|e51b2a1d71") to pass a value that is different from the label.
  $('input[type=checkbox]', $('.areas_of_interest')).each(function () {
    $(this).on('click', function () {
      const val = this.value;
      $('input[type=checkbox]', $('.areas_of_interest_mailchimp')).each(
        function () {
          if (this.value == val) {
            $(this).prop('checked', !$(this).prop('checked'));
          }
        }
      );
    });
  });
});


}
/*
     FILE ARCHIVED ON 20:08:09 May 17, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:21:58 Jan 05, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 88.329
  exclusion.robots: 0.112
  exclusion.robots.policy: 0.099
  RedisCDXSource: 1.578
  esindex: 0.012
  LoadShardBlock: 67.751 (3)
  PetaboxLoader3.datanode: 80.76 (4)
  CDXLines.iter: 15.967 (3)
  load_resource: 154.117
  PetaboxLoader3.resolve: 106.101
*/