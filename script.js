// You can add custom JS features here, like toast message on download
document.querySelectorAll("a[download]").forEach(link => {
  link.addEventListener("click", () => {
    alert("Download will start shortly!");
  });
});
