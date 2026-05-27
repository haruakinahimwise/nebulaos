const frame = document.getElementById("uv-frame");
const fakeUrl = document.getElementById("fake-url");

if (window.location.hash.startsWith("#/")) {
  const encoded = window.location.hash.slice(2);
  const decoded = __uv$config.decodeUrl(encoded);
  frame.src = decoded;
  fakeUrl.value = decoded;
}

document.getElementById("back").onclick = () => frame.contentWindow.history.back();
document.getElementById("forward").onclick = () => frame.contentWindow.history.forward();
document.getElementById("refresh").onclick = () => frame.contentWindow.location.reload();
document.getElementById("home").onclick = () => window.location.href = "index.html";
