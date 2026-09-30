// Close the "Learn Greek" dropdown on outside click and on Escape.
document.addEventListener("click", function (e) {
  document.querySelectorAll(".nav-drop[open]").forEach(function (d) {
    if (!d.contains(e.target)) d.removeAttribute("open");
  });
});
document.addEventListener("keydown", function (e) {
  if (e.key !== "Escape") return;
  document.querySelectorAll(".nav-drop[open]").forEach(function (d) {
    d.removeAttribute("open");
    d.querySelector("summary").focus();
  });
});
