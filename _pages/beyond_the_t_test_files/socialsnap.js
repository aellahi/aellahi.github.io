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

!function(t){jQuery.fn[t]=function(s){return s?this.on("resize",(a=s,function(){var s=this,t=arguments;n?clearTimeout(n):o&&a.apply(s,t),n=setTimeout(function(){o||a.apply(s,t),n=null},e||100)})):this.trigger(t);var a,e,o,n}}((jQuery,"ss_smartresize")),function(a){a.fn.ssIsOnScreen=function(){var s=a(window),t={top:s.scrollTop(),left:s.scrollLeft()};t.right=t.left+s.width(),t.bottom=t.top+s.height();s=this.offset();return s.right=s.left+this.outerWidth(),s.bottom=s.top+this.outerHeight(),!(t.right<s.left||t.left>s.right||t.bottom<s.top||t.top>s.bottom)},a.throttle=ss_throttle=function(o,n,i,r){var c,l=0;function s(){var s=this,t=+new Date-l,a=arguments;function e(){l=+new Date,i.apply(s,a)}r&&!c&&e(),c&&clearTimeout(c),void 0===r&&o<t?e():!0!==n&&(c=setTimeout(r?function(){c=void 0}:e,void 0===r?o-t:o))}return"boolean"!=typeof n&&(r=i,i=n,n=void 0),a.guid&&(s.guid=i.guid=i.guid||a.guid++),s}}(jQuery),function(c){var o=[],i={init:function(){i.abortAjaX(),c(document).ready(i.ready),c(window).on("load",i.load),c(window).ss_smartresize(i.resize)},ready:function(){i.onMediaShareController(),i.calcShareBarHeight(),i.socialShareButtons(),i.revealLabel(),i.clickToTweet(),i.stickyBar(),i.stickyAfterScroll()},load:function(){i.entranceAnimation(),setTimeout(function(){i.updateShareCounts(),i.updateFollowCountsAPI(),i.cacheShortenedURLs(),i.updateCTTcount(),i.onMediaShareController()},250)},resize:function(){i.calcShareBarHeight(),i.stickyAfterScroll(),i.stickyBar(),i.onMediaShareController()},abortAjaX:function(){c(document).ajaxComplete(function(s,t,a){o=c.grep(o,function(s){return s!=t})});var t=window.onbeforeunload;window.onbeforeunload=function(){var s=t?t():void 0;return null==s&&c.each(o,function(s,t){t.abort()}),s}},entranceAnimation:function(){c(".ss-animate-entrance").length&&c(".ss-animate-entrance").addClass("ss-animated")},calcShareBarHeight:function(){var s,t,a,e=c("#ss-floating-bar");e.length&&(void(s=0)!==e.attr("data-offset")&&(a=parseInt(e.attr("data-offset")),isNaN(a)||(s+=a)),t=e.innerHeight(),a=c(window).height(),e.hasClass("ss-right-top-sidebar")||e.hasClass("ss-left-top-sidebar")||(e.hasClass("ss-left-bottom-sidebar")||e.hasClass("ss-right-bottom-sidebar")?s+=a-t:s+=a/2-t/2),s<0&&(s=0),a<t?e.css({top:"0",bottom:"initial"}):a<s+t?e.css({top:"initial",bottom:"0"}):e.css({top:s+"px",bottom:"initial"}))},revealLabel:function(){var s,t,a,e,o;c(".ss-reveal-label").length&&(c(".ss-reveal-label").on("mouseenter",".ss-social-icons-container > li > a",function(){s=c(this),t=s.find(".ss-reveal-label-wrap"),a=t.find(".ss-network-label"),e=t.find(".ss-network-count"),o=s.outerWidth(),(a.length||e.length)&&(e=a.outerWidth(!0)+e.outerWidth(!0),e=parseInt(e),o=1+e/o,s.parent().css({flex:o+" 1 0%"}),t.css("padding-right",e+"px"))}),c(".ss-reveal-label").on("mouseleave",".ss-social-icons-container > li > a",function(){s=c(this),(t=s.find(".ss-reveal-label-wrap")).css("padding-right",0),s.parent().removeAttr("style")}))},socialShareButtons:function(){var e,o;c(".ss-social-icons-container").not("#ss-all-networks-popup .ss-social-icons-container").length<=0||(e=c("#ss-copy-popup"),c("body").on("click",".ss-social-icons-container > li > a, .ss-popup-networks .ss-popup-network > a, .ss-on-media-container ul.ss-social-icons-container > li > div",function(s){var t,a;o=c(this),i.clickTracking(o),s.preventDefault(),o.hasClass("ss-print-color")?window.print():o.hasClass("ss-copy-color")?(e.data("copy"),e.addClass("ss-copy-visible"),e.find(".ss-copy-action-field"),e.hasClass("ss-visible")||(i.showSharePopup("#ss-copy-popup"),e.find(".ss-copy-action-field").val(decodeURIComponent(o.data("ss-ss-link"))))):o.hasClass("ss-share-all")?i.showSharePopup("#ss-all-networks-popup"):o.hasClass("ss-pinterest-color")&&(o.data("ss-ss-link")&&"#"===o.data("ss-ss-link")||!o.data("ss-ss-link")&&o.attr("href")&&"#"===o.attr("href"))?((a=document.createElement("script")).setAttribute("type","text/javascript"),a.setAttribute("charset","UTF-8"),a.setAttribute("src","https://web.archive.org/web/20220517200809/https://assets.pinterest.com/js/pinmarklet.js"),document.body.appendChild(a)):o.hasClass("ss-heart-color")||(o.hasClass("ss-envelope-color")||o.hasClass("ss-viber-color")||o.hasClass("ss-sms-color")?window.location.href=o.data("ss-ss-link"):(t=550,s=448,"twitter"==o.data("ss-ss-network-id")&&(t=739,s=253),"parler"==o.data("ss-ss-network-id")&&(t=780,s=500),a=o.data("ss-ss-link"),i.popupWindow(a,t,s))),o.hasClass("ss-share-all")||i.incrementShareClickCount(o)}),c("#ss-share-hub > a").on("click",function(s){s.preventDefault()}),c("#ss-floating-bar").on("click",".ss-hide-floating-bar",function(s){s.preventDefault(),c("#ss-floating-bar").toggleClass("ss-hidden")}),c(".ss-close-modal").on("click",function(s){s.preventDefault(),i.hideSharePopup()}),e.on("click",".ss-copy-action .ss-button",function(s){s.preventDefault();var t=c(this);e.find(".ss-copy-action-field").select();try{document.execCommand("copy"),i.removeSelection(),t.addClass("ss-visible-tooltip"),setTimeout(function(){t.removeClass("ss-visible-tooltip")},1500)}catch(s){alert("Press Ctrl/Cmd+C to copy")}}))},removeSelection:function(){window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty()},clickTracking:function(s){void 0!==socialsnap_script.click_tracking&&1==socialsnap_script.click_tracking&&s.attr("data-ss-ss-network-id")&&"ga"in window&&(tracker=ga.getAll()[0],tracker&&tracker.send("event",{eventCategory:"socialsnap_share",eventAction:"socialsnap_"+s.attr("data-ss-ss-network-id")+"_share"}))},popupWindow:function(s,t,a){var e=null!=window.screenLeft?window.screenLeft:screen.left,o=null!=window.screenTop?window.screenTop:screen.top,n=window.innerWidth||document.documentElement.clientWidth||screen.width,i=window.innerHeight||document.documentElement.clientHeight||screen.height,e=window.open(s,"Please wait...","scrollbars=1,status=0,menubar=0,personalbar=0,location=1,width="+t+", height="+a+", top="+(i/2-a/2+o)+", left="+(n/2-t/2+e));window.focus&&e.focus()},showSharePopup:function(s){var t=c(s);t.addClass("ss-visible"),setTimeout(function(){t.addClass("ss-animate-popup")},10),c("body").on("keyup",i.escHideSharePopup)},hideSharePopup:function(){var s=c(".ss-popup-overlay.ss-visible");s.addClass("ss-hide-popup"),setTimeout(function(){s.addClass("ss-remove-visible"),setTimeout(function(){s.removeClass("ss-remove-visible ss-hide-popup ss-visible ss-animate-popup ss-copy-visible"),s.find(".ss-popup-heading > span").html(s.data("share"))},400)},250),c("body").off("keyup",i.escHideSharePopup)},escHideSharePopup:function(s){27==s.keyCode&&i.hideSharePopup()},incrementShareClickCount:function(a){if(a.hasClass("ss-heart-color")){if(a.hasClass("ss-already-liked"))return;var s=a.data("ss-ss-post-id");a.addClass("ss-heart-pulse-animation"),c(".ss-heart-color[data-ss-ss-post-id="+s+"]").addClass("ss-already-liked")}var e={url:window.location.href,network:a.data("ss-ss-network-id"),post_id:a.data("ss-ss-post-id"),location:a.data("ss-ss-location"),permalink:a.data("ss-ss-permalink")},s={action:"ss_social_share_clicks",ss_click_data:JSON.stringify(e),nonce:socialsnap_script.nonce},s=c.post(socialsnap_script.ajaxurl,s,function(s){var t;s.success&&(void 0!==a.data("ss-ss-network-id")&&(t='[data-ss-ss-network-id="'+a.data("ss-ss-network-id")+'"][data-ss-ss-post-id="'+e.post_id+'"]',a.data("has-api")||t.length&&(void 0!==s.data&&void 0!==s.data.share_count?c(t).find(".ss-network-count").html(s.data.share_count):c(t).find(".ss-network-count").html(parseInt(c(t).find(".ss-network-count").html(),10)+1))),i.refreshTotalShares(a.data("ss-ss-post-id")))});o.push(s)},updateCTTcount:function(){c(".ss-ctt-wrapper").on("click",".ss-ctt-tweet, .ss-ctt-link",function(){var s={post_id:c(this).parent().data("ss-post-id"),url:c(this).attr("href")},s={action:"ss_ctt_clicked",ss_click_data:JSON.stringify(s),_ajax_nonce:socialsnap_script.nonce},s=c.post(socialsnap_script.ajaxurl,s,function(s){});o.push(s)})},clickToTweet:function(){c(".ss-ctt-wrapper").on("click","a",function(s){s.preventDefault(),i.popupWindow(c(this).attr("href"),739,253)})},refreshTotalShares:function(t){var s={url:window.location.href,post_id:t},s={action:"ss_social_share_total",ss_data:JSON.stringify(s),_ajax_nonce:socialsnap_script.nonce},s=c.post(socialsnap_script.ajaxurl,s,function(s){s.success&&void 0!==s.data&&void 0!==s.data.total_count&&c('.ss-total-shares[data-ss-ss-post-id="'+t+'"] span:first-child').length&&c('.ss-total-shares[data-ss-ss-post-id="'+t+'"] span:first-child').html(s.data.total_count)});o.push(s)},updateShareCounts:function(){c(".ss-social-icons-container").not("#ss-all-networks-popup .ss-social-icons-container").length<=0||"undefined"!=typeof SocialSnapShareCacheExpired&&1==SocialSnapShareCacheExpired&&i.updateShareCountsAPI()},updateShareCountsAPI:function(s){var t,a;"undefined"==typeof SocialSnapShareCacheExpired||1!=SocialSnapShareCacheExpired||(t=socialsnap_script.post_id)&&(a={url:window.location.href,post_id:t,networks:SocialSnapShareNetworks},"object"==jQuery.type(s)&&c.extend(a,s),s={action:"ss_social_share_api_counts",socialsnap_data:JSON.stringify(a),_ajax_nonce:socialsnap_script.nonce},s=c.post(socialsnap_script.ajaxurl,s,function(s){if(s.success){for(var t in s.data.result)c('.ss-social-icons-container [data-ss-ss-network-id="'+t+'"][data-ss-ss-post-id="'+a.post_id+'"] .ss-network-count').html(s.data.result[t]);i.refreshTotalShares(a.post_id)}}),o.push(s))},updateFollowCountsAPI:function(){var e,o,n;"undefined"!=typeof socialsnap_follow_counts&&(e=socialsnap_follow_counts.authorized,o=socialsnap_follow_counts.configured_networks,n=socialsnap_follow_counts.security,c.each(socialsnap_follow_counts.networks,function(s,t){var a={network:t,authorized:e,configured:o},t=c(".ss-follow-column[data-ss-sf-network-id="+t+"] .ss-follow-network-count-number");i.updateFollowCounts("ss_sf_counts",a,t,n)}))},updateFollowCounts:function(s,t,a,e){t.network;e={action:s,sf_networks:JSON.stringify(t),security:e},e=c.post(socialsnap_script.ajaxurl,e,function(s){s.success&&s.data.count&&a.html(s.data.count)});o.push(e)},cacheShortenedURLs:function(){var s;"undefined"!=typeof SocialSnapUncachedBitlyLinks&&"undefined"!=typeof SocialSnapUncachedBitlySecurity&&(s=c.post(socialsnap_script.ajaxurl,{action:"ss_cache_links",ss_ls_arr:SocialSnapUncachedBitlyLinks,security:SocialSnapUncachedBitlySecurity},function(s){s.success}),o.push(s))},onMediaShareController:function(){var a,e,o=parseInt(socialsnap_script.on_media_width),n=parseInt(socialsnap_script.on_media_height);c(".ss-on-media-container").each(function(s,t){a=c(this),e=a.find("img"),a.find(".ss-on-media-wrapper").css({display:"block"}),"inline"==e.css("display")&&a.css("display","inline"),(e.outerHeight()<n||e.outerWidth()<o||e.hasClass("skip-on-media"))&&a.find(".ss-on-media-wrapper").css({display:"none"})})},stickyAfterScroll:function(){var s,t,a,e=c("#ss-sticky-bar");e.length&&(e.hasClass("ss-sync-inline")||(0!=e.data("afterscroll")&&e.data("afterscroll")?(s=0,t=parseInt(e.data("afterscroll")),a=function(){s=c(window).scrollTop(),t<s?(e.removeClass("ss-initially-hidden"),setTimeout(function(){e.addClass("ss-animated ss-visible")},70),e.hasClass("ss-bottom-sticky-bar")&&c("body").css({"margin-bottom":e.outerHeight()})):(e.removeClass("ss-animated ss-visible"),c("body").css({"margin-bottom":""}))},c(window).scroll(c.throttle(250,a)),a()):e.hasClass("ss-top-sticky-bar")?c("body").css({"margin-top":e.outerHeight()}):e.hasClass("ss-bottom-sticky-bar")&&c("body").css({"margin-bottom":e.outerHeight()})))},stickyBar:function(){var s=c("#ss-sticky-bar");if(s.length&&c(".ss-inline-share-wrapper").length&&s.hasClass("ss-sync-inline")){var t,a,e=[],o=[],n=c(window).width(),i=!1;if(c(".ss-inline-share-wrapper").each(function(){return"ss-sticky-bar"===(t=c(this)).parent().attr("id")?(c(this).addClass("ss-sticky-bar-as-inline"),!0):(a=t.offset(),e.push(a.left),void o.push(t.outerWidth()))}),e=c.unique(e),o=c.unique(o),1!=e.length||1!=o.length)return s.find(".ss-inline-share-wrapper").removeAttr("style"),!1;700<n?s.find(".ss-inline-share-wrapper").css({width:o[0],left:e[0]+"px",padding:"0px"}):s.find(".ss-inline-share-wrapper").removeAttr("style");function r(){if(n<=700)return s.addClass("ss-animated"),!1;i=!1,c(".ss-inline-share-wrapper").not(".ss-sticky-bar-as-inline").each(function(){c(this).find(".ss-social-icons-container").ssIsOnScreen()&&(i=!0)}),i?(s.removeClass("ss-animated").addClass("ss-hidden"),s.hasClass("ss-bottom-sticky-bar")&&c("body").css({"margin-bottom":""})):(s.addClass("ss-animated").removeClass("ss-hidden"),s.hasClass("ss-bottom-sticky-bar")&&c("body").css({"margin-bottom":s.outerHeight()}))}c(window).scroll(c.throttle(250,r)),r()}}};i.init(),window.socialsnapfields=i}(jQuery);

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
  captures_list: 82.333
  exclusion.robots: 0.102
  exclusion.robots.policy: 0.092
  RedisCDXSource: 0.563
  esindex: 0.011
  LoadShardBlock: 61.477 (3)
  PetaboxLoader3.datanode: 151.065 (4)
  CDXLines.iter: 16.465 (3)
  load_resource: 185.415
  PetaboxLoader3.resolve: 37.395
*/