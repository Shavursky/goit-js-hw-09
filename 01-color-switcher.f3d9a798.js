!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=null;t.addEventListener("click",(function(){e||(e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3))})),n.addEventListener("click",(function(){clearInterval(e),e=null}))}();
//# sourceMappingURL=01-color-switcher.f3d9a798.js.map
