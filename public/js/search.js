const input = document.getElementById("nebula-input");
const go = document.getElementById("nebula-go");

function normalize(value) {
  value = value.trim();
  if (!value) return "";

  if (value.includes(" ") || !value.includes(".")) {
    return "https://www.google.com/search?q=" + encodeURIComponent(value);
  }

  if (!value.startsWith("http://") && !value.startsWith("https://")) {
    return "https://" + value;
  }

  return value;
}

function openUV(url) {
  const encoded = __uv$config.encodeUrl(url);
  window.location.href = "/workspace.html#/" + encoded;
}

go.addEventListener("click", () => {
  const url = normalize(input.value);
  if (url) openUV(url);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const url = normalize(input.value);
    if (url) openUV(url);
  }
});

document.querySelectorAll(".quick").forEach(btn => {
  btn.addEventListener("click", () => openUV(btn.dataset.url));
});
