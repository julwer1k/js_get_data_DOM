var t=document.querySelector(".total-population"),e=document.querySelector(".average-population"),o=document.querySelectorAll(".population"),n=o.length,l=0;o.forEach(function(t){var e=t.textContent.split(",").join("");l+=+e});var r=l/n;t.textContent=l.toLocaleString("en-US"),e.textContent=r.toLocaleString("en-US");
//# sourceMappingURL=index.62c14ae9.js.map
