

(function () {
  // 🔒 安全校验：强制 HTTPS
  if (location.protocol !== "https:") {
    console.warn("Sgrastar blocked: not HTTPS");
    return;
  }

  if (window.SgrastarLoaded) {
    console.log("Sgrastar already loaded");
    return;
  }

  window.SgrastarLoaded = true;

  const base = "https://sgrastar.com.cn/js/components/";

  const scripts = [
    "scrollTop.v1.js",
    "timestamp.v1.js"
  ];

  scripts.forEach(file => {
    const s = document.createElement("script");
    s.src = base + file;
    s.async = true;
    document.body.appendChild(s);
  });

  console.log("Sgrastar components loaded");

})();
