// Mendapatkan semua elemen menu
const menus = document.querySelectorAll(".menu");

menus.forEach((menu) => {
  menu.addEventListener("click", function () {
    // Menghapus class aktif dari semua menu
    menus.forEach((m) => {
      m.classList.remove("bg-amber-800");
      m.classList.add("bg-transparent", "border-2", "border-white");
      m.dataset.active = "false";
    });

    // Menambahkan class aktif ke menu yang diklik
    this.classList.add("bg-amber-800");
    this.classList.remove("bg-transparent", "border-2", "border-white");
    this.dataset.active = "true";
  });
});
