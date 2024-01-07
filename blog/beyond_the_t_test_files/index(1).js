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

document.addEventListener("DOMContentLoaded",(t=>{var e;wpcf7_recaptcha={...null!==(e=wpcf7_recaptcha)&&void 0!==e?e:{}};const c=wpcf7_recaptcha.sitekey,{homepage:n,contactform:a}=wpcf7_recaptcha.actions,o=t=>{const{action:e,func:n,params:a}=t;grecaptcha.execute(c,{action:e}).then((t=>{const c=new CustomEvent("wpcf7grecaptchaexecuted",{detail:{action:e,token:t}});document.dispatchEvent(c)})).then((()=>{"function"==typeof n&&n(...a)})).catch((t=>console.error(t)))};if(grecaptcha.ready((()=>{o({action:n})})),document.addEventListener("change",(t=>{o({action:a})})),"undefined"!=typeof wpcf7&&"function"==typeof wpcf7.submit){const t=wpcf7.submit;wpcf7.submit=function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o({action:a,func:t,params:[e,c]})}}document.addEventListener("wpcf7grecaptchaexecuted",(t=>{const e=document.querySelectorAll('form.wpcf7-form input[name="_wpcf7_recaptcha_response"]');for(let c=0;c<e.length;c++)e[c].setAttribute("value",t.detail.token)}))}));

}
/*
     FILE ARCHIVED ON 20:08:09 May 17, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:21:59 Jan 05, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 413.713
  exclusion.robots: 0.075
  exclusion.robots.policy: 0.068
  cdx.remote: 0.065
  esindex: 0.009
  LoadShardBlock: 216.967 (3)
  PetaboxLoader3.datanode: 182.36 (4)
  CDXLines.iter: 15.493 (3)
  load_resource: 70.201
  PetaboxLoader3.resolve: 22.654
*/