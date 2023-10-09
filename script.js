const emailButton = document.getElementById("email-button");
const emailText = document.getElementById("email-to-copy");
const numberButton = document.getElementById("number-button");
const numberText = document.getElementById("number-to-copy");


emailButton.addEventListener("click", () => {
  const textToCopy = emailText.innerText;

  // Gunakan Clipboard API untuk menyalin teks ke clipboard
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      // Beri tahu pengguna bahwa teks telah disalin (opsional)
      alert("Teks telah disalin!");
    })
    .catch((error) => {
      console.error("Gagal menyalin teks: ", error);
    });
});

numberButton.addEventListener("click", () => {
  const textToCopy = numberText.innerText;

  // Gunakan Clipboard API untuk menyalin teks ke clipboard
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      // Beri tahu pengguna bahwa teks telah disalin (opsional)
      alert("Teks telah disalin!");
    })
    .catch((error) => {
      console.error("Gagal menyalin teks: ", error);
    });
});
