// You can place this script in your index.js file or in a <script> tag in your HTML

document.addEventListener("DOMContentLoaded", function () {
  const toggleMenuButton = document.querySelector(".toggle-menu");

  if (toggleMenuButton) {
    toggleMenuButton.addEventListener("click", function () {
      toggleMenuButton.classList.toggle("open");
      // Add code here to open/close the menu (e.g., toggle a class on the menu element)
    });
  } else {
    console.error("Toggle menu button not found.");
  }
});
