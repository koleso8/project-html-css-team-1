(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const c=document.getElementsByClassName("header-burger")[0],o=document.getElementsByClassName("header-menu")[0];c.addEventListener("click",function(r){r.stopPropagation(),document.body.classList.toggle("body-prevent-scroll"),o.classList.toggle("header-menu-open"),c.classList.toggle("header-burger-open")});document.addEventListener("click",r=>{!o.contains(r.target)&&o.classList.contains("header-menu-open")&&(document.body.classList.remove("body-prevent-scroll"),o.classList.remove("header-menu-open"),c.classList.remove("header-burger-open"))});
//# sourceMappingURL=commonHelpers.js.map
