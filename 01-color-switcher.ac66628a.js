const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let n=null;t.addEventListener("click",(()=>{n||(n=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))})),e.addEventListener("click",(function(){clearInterval(n),n=null}));
//# sourceMappingURL=01-color-switcher.ac66628a.js.map
