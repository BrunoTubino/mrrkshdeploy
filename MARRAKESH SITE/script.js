document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("bandName"),e="MARRAKESH";let n=0;function o(){n<e.length&&(t.textContent+=e.charAt(n),n++,setTimeout(o,100))}o(),t.addEventListener("mouseenter",function(){t.textContent="",n=0,o()})});