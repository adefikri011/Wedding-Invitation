function loadComponent(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Tidak bisa load ${file}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => {
      console.error(error);
    });
}


document.addEventListener("DOMContentLoaded", function () {
  loadComponent("cover", "components/cover.html");
  loadComponent("couple", "components/couple.html");
  loadComponent("countdown", "components/countdown.html");
  loadComponent("gallery", "components/gallery.html");
  loadComponent("event", "components/event.html");
  loadComponent("footer", "components/footer.html");
});