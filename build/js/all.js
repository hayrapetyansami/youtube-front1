"use strict";window.addEventListener("DOMContentLoaded",function(){for(var e=document.querySelector("#burger-menu"),t=document.querySelector(".nav__right"),r=document.querySelectorAll(".lms__item__wrapper__trigger"),s=document.querySelectorAll(".lms__item__wrapper__content"),n=(e.addEventListener("click",function(){t.classList.toggle("active__nav"),t.classList.contains("active__nav")?this.classList.add("close"):this.removeAttribute("class")}),0);n<r.length;n++)!function(t){r[t].addEventListener("click",function(){for(var e=0;e<s.length;e++)s[e].style.display="none",r[e].querySelector("svg").style.cssText="transform: rotate(0deg)";r[t].querySelector("svg").style.cssText="transform: rotate(45deg)",s[t].style.display="block",r[t].querySelector("svg").addEventListener("click",function(e){e.stopPropagation(),r[t].querySelector("svg").style.cssText="transform: rotate(0deg)",s[t].style.display="none"})})}(n)});
//# sourceMappingURL=all.js.map
