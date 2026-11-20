document.addEventListener("DOMContentLoaded", () => {
  // 1. Toggle Navbar Mobile
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Tutup menu mobile otomatis setelah item diklik
  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  // 2. Membaca Query Parameter dari URL
  const urlParams = new URLSearchParams(window.location.search);
  
  const namaTamu = urlParams.get("nama");
  const instansiTamu = urlParams.get("to");
  const kategoriTamu = urlParams.get("kategori");

  if (namaTamu) {
    document.getElementById("guest-name").textContent = namaTamu;
    document.getElementById("rsvp-nama").value = namaTamu;
  }

  if (instansiTamu) {
    document.getElementById("guest-instansi").textContent = instansiTamu;
    document.getElementById("rsvp-instansi").value = instansiTamu;
  }

  if (kategoriTamu) {
    document.getElementById("guest-kategori").textContent = kategoriTamu;
  }

  // 3. Menangani Submit Form RSVP
  const rsvpForm = document.getElementById("rsvp-form");
  const feedbackBox = document.getElementById("rsvp-feedback");

  rsvpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = document.getElementById("rsvp-nama").value;
    const instansi = document.getElementById("rsvp-instansi").value;
    const status = document.getElementById("rsvp-status").value;
    const jumlah = document.getElementById("rsvp-jumlah").value;

    feedbackBox.textContent = `Terima kasih, ${nama} (${instansi}). Konfirmasi "${status}" (${jumlah} orang) telah tercatat!`;
    feedbackBox.classList.remove("hidden");
    rsvpForm.reset();
  });
});