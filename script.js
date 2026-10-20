$(document).ready(function () {
  // Event Handler 1: click() pada tombol 'Ubah Warna Judul'
  // Metode jQuery yang digunakan: css()

  $("#btn-mode").click(function () {
    // Mengecek warna teks judul saat ini
    var warnaJudulSaatIni = $("#judul-halaman").css("color");

    // Jika warna judul sedang biru (rgb 0, 122, 204), kembalikan ke warna hitam
    if (warnaJudulSaatIni === "rgb(0, 122, 204)") {
      $("#judul-halaman").css("color", "#000000");
    } else {
      // Jika warnanya hitam (atau lainnya), ubah menjadi warna biru
      $("#judul-halaman").css("color", "#007acc");
    }
  });

  // Event Handler 2: hover() pada elemen Foto Profil
  // Metode jQuery yang digunakan: html(), css()
  $("#foto").hover(
    function () {
      // Dijalankan saat kursor mengarah ke foto (mouse enter)
      $(this).css("border", "4px solid #ff9800");
      $(this).html("<b>Halo!</b>");
    },
    function () {
      // Dijalankan saat kursor meninggalkan foto (mouse leave)
      $(this).css("border", "none");
      $(this).text("FOTO PROFIL");
    },
  );

  // Event Handler 3: click() pada tombol Toggle Bio
  // Metode jQuery yang digunakan: slideToggle() / toggle()
  $("#btn-toggle-bio").click(function () {
    // Menampilkan atau menyembunyikan box biodata dengan efek geser (slide)
    $("#box-biodata").slideToggle("fast");
  });

  // Event Handler 4: click() untuk Efek Animasi Foto Profil
  // Metode jQuery yang digunakan: animate()
  $("#btn-animasi").click(function () {
    // Menjalankan animasi perbesaran dan pudar (opacity) secara bertahap
    $("#foto")
      .animate(
        {
          width: "150px",
          height: "150px",
          opacity: 0.5,
        },
        500,
      )
      .animate(
        {
          width: "120px",
          height: "120px",
          opacity: 1.0,
        },
        500,
      );
  });
});
