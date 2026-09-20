const theme=document.getElementById("theme");
function setTheme(t){document.documentElement.dataset.theme=t;localStorage.setItem("cpg-theme",t);theme.textContent=t==="dark"?"☀":"☾"}
setTheme(localStorage.getItem("cpg-theme") || (matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"));
theme.onclick=()=>setTheme(document.documentElement.dataset.theme==="dark"?"light":"dark");
const top=document.getElementById("top");
addEventListener("scroll",()=>top.classList.toggle("show",scrollY>450));
top.onclick=()=>scrollTo({top:0,behavior:"smooth"});
