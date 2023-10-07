const emailButton = document.getElementById("email-button");
const emailText = document.getElementById("email-to-copy");
const numberButton = document.getElementById("number-button");
const numberText = document.getElementById("number-to-copy");

emailButton.addEventListener("click", () => {
  // Buat elemen input sementara untuk menyalin teks
  const tempInput = document.createElement("input");
  tempInput.value = emailText.innerText;
  document.body.appendChild(tempInput);

  // Pilih teks dalam input dan salin ke clipboard
  tempInput.select();
  document.execCommand("copy");

  // Hapus elemen input sementara
  document.body.removeChild(tempInput);

  // Beri tahu pengguna bahwa teks telah disalin (opsional)
  alert("Teks telah disalin!");
});
