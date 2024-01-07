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

(function ($) {
  var SUCCESS_STATUS = "mail_sent";
  var AJAX_ACTION = "getDownloadButton";
  var SUPPORTED_VERSIONS = [4, 5];

  function warnVersion(version) {
    console.warn(
      "[CF7 GATED CONTENT]: This version of CF7 is not supported: " + version
    );
  }

  function parseVersions(detail) {
    var version = detail.pluginVersion;
    var versionParts = version.split(".").map(v => parseInt(v, 10));

    // Warn if we are in a non-supported version of CF7
    if (!SUPPORTED_VERSIONS.includes(versionParts[0])) {
      warnVersion(version);
    }

    // Return version object
    return {
      string: version,
      major: versionParts[0],
      minor: versionParts[1],
      patch: versionParts[2],
    };
  }

  function parseStatus(detail) {
    var version = parseVersions(detail);

    switch (version.major) {
      case 5:
        return detail.apiResponse.status;

      case 4:
        return detail.status;

      default:
        return null;
    }
  }

  function parseTarget(detail) {
    var version = parseVersions(detail);

    switch (version.major) {
      case 5:
        return $(detail.apiResponse.into);

      case 4:
        return $("#" + detail.id);

      default:
        return null;
    }
  }

  document.addEventListener(
    "wpcf7submit",
    function (event) {
      var detail = event.detail;
      var status = parseStatus(detail);
      var $target = parseTarget(detail);

      // bail early if we didn't succeed
      if (status !== SUCCESS_STATUS || $target === null) {
        return false;
      }

      var downloadId = "wpcf7-download-" + detail.unitTag;

      // Set a cookie
      document.cookie = wpcf7gc.cookieKey + detail.contactFormId + "=1";

      $.ajax({
        type: "post",
        dataType: "json",
        url: wpcf7gc.ajaxurl,
        data: {
          action: AJAX_ACTION,
          contactFormId: detail.contactFormId,
        },
        error: function (res) {
          console.error("Error Fetching Gated Content: ", res);

          alert(
            "There was an error fetching your download. Please refresh the page."
          );
        },
        success: function (res) {
          if (res.data != null) {
            if ($target && $("#" + downloadId).length < 1) {
              var $downloadContainer = $("<div></div>", { id: downloadId });
              $downloadContainer.append(res.data).appendTo($target);
            }
          }
        },
      });
    },
    false
  );
})(jQuery);


}
/*
     FILE ARCHIVED ON 20:08:09 May 17, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:21:54 Jan 05, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 262.193
  exclusion.robots: 0.058
  exclusion.robots.policy: 0.052
  cdx.remote: 0.047
  esindex: 0.007
  LoadShardBlock: 166.94 (3)
  PetaboxLoader3.resolve: 118.152 (2)
  PetaboxLoader3.datanode: 126.662 (4)
  CDXLines.iter: 14.084 (3)
  load_resource: 297.109
*/