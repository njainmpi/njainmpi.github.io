const toggle = document.getElementById("theme-toggle");
toggle.onclick = () => {
  const t = document.documentElement.dataset.theme === "dark" ? "" : "dark";
  document.documentElement.dataset.theme = t;
  localStorage.setItem("theme", t);
};

document.documentElement.dataset.theme =
  localStorage.getItem("theme") || "";
