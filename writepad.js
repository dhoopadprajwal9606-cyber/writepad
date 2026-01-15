const pad = document.getElementById("pad");

// Load saved text
pad.value = localStorage.getItem("writepad") || "";

// Save text automatically
pad.addEventListener("input", () => {
  localStorage.setItem("writepad", pad.value);
});
