// ===============================
// Load Component Function
// ===============================
function loadComponent(id, file) {
  return fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Tidak bisa load ${file}`);
      }
      return response.text();
    })
    .then(data => {
      const element = document.getElementById(id);
      if (element) {
        element.innerHTML = data;
      }
    })
    .catch(error => console.error(error));
}


// ===============================
// Main App Initialization
// ===============================
document.addEventListener("DOMContentLoaded", async function () {

  document.body.classList.add("locked");

  // Load components
  await loadComponent("cover", "components/cover.html");
  await loadComponent("couple", "components/couple.html");
  await loadComponent("countdown", "components/countdown.html");
  await loadComponent("gallery", "components/gallery.html");
  await loadComponent("event", "components/event.html");
  await loadComponent("footer", "components/footer.html");

  // Ambil element setelah load
  const openBtn = document.getElementById("openInvitation");
  const cover = document.getElementById("cover-lock");
  const music = document.getElementById("bgMusic");
  const musicToggle = document.getElementById("musicToggle");

  if (openBtn && cover) {

    openBtn.addEventListener("click", function () {

      // Play music
      if (music) {
        music.play().catch(err => {
          console.log("Autoplay dicegah browser:", err);
        });
      }

      // Tampilkan tombol music
      if (musicToggle) {
        musicToggle.classList.add("active");
      }

      // Fade out cover
      cover.style.transition = "opacity 1s ease";
      cover.style.opacity = "0";

      setTimeout(() => {
        cover.style.display = "none";
        document.body.classList.remove("locked");
      }, 1000);

    });

  }

  // Toggle music play/pause
  if (musicToggle && music) {

    musicToggle.addEventListener("click", function () {

      if (music.paused) {
        music.play();
        musicToggle.innerHTML = "♪";
      } else {
        music.pause();
        musicToggle.innerHTML = "✕";
      }

    });

  }

});