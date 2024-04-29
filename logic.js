function kategoriNilai(nilai) {
  if (nilai >= 86 && nilai <= 100) {
    return "A";
  } else if (nilai >= 71 && nilai <= 85) {
    return "B";
  } else if (nilai >= 56 && nilai <= 70) {
    return "C";
  } else if (nilai >= 41 && nilai <= 55) {
    return "D";
  } else if (nilai >= 0 && nilai <= 40) {
    return "E";
  } else {
    return "Nilai tidak valid"; // Mengembalikan pesan jika nilai tidak valid
  }
}

function distribusiNilai(kategori) {
  switch (kategori) {
    case "A":
      return 12;
    case "B":
      return 24;
    case "C":
      return 33;
    case "D":
      return 81;
    case "E":
      return 100;
    default:
      return "Kategori tidak valid"; // Mengembalikan pesan jika kategori tidak valid
  }
}

// Contoh penggunaan fungsi:
console.log(kategoriNilai(95)); // Output: A
console.log(distribusiNilai(kategoriNilai(95))); // Output: 12
