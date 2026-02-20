


(function(){

  if(document.getElementById("sgrastar-scroll-top")){
    return;
  }

  const btn = document.createElement("button");

  btn.id = "sgrastar-scroll-top";

  btn.innerHTML = "↑";

  btn.style.position = "fixed";
  btn.style.bottom = "120px";
  btn.style.right = "20px";
  btn.style.zIndex = "999999";
  btn.style.padding = "10px";
  btn.style.borderRadius = "6px";
  btn.style.border = "none";
  btn.style.cursor = "pointer";

  btn.onclick = function(){
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  };

  document.body.appendChild(btn);

})();

