document.addEventListener("DOMContentLoaded", function() {
  // Mengambil elemen yang akan dianimasikan
  const animatedElement = document.querySelector(".animated-element");

  // Fungsi untuk memeriksa apakah elemen sudah masuk ke dalam viewport
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Fungsi untuk menampilkan elemen saat masuk ke dalam viewport
  function animateElementOnScroll() {
    if (isElementInViewport(animatedElement)) {
      animatedElement.style.opacity = 1;
      animatedElement.style.transform = "translateY(0)";
    }
  }

  // Memanggil fungsi animateElementOnScroll saat halaman di-scroll
  window.addEventListener("scroll", animateElementOnScroll);

  // Memanggil fungsi animateElementOnScroll pada saat halaman pertama kali dimuat
  animateElementOnScroll();
});