// Toggle Hamburger Menu
document.getElementById("menu-btn").addEventListener("click", function () {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("hidden");
});

// Set current time on page load
function updateTime() {
  const now = new Date();
  const formattedTime = now.toLocaleString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "shortOffset",
  });
  document.getElementById("current-time").textContent = formattedTime.replace(
    /,/g,
    ""
  );
}

// Initial time update
updateTime();

// Handle form submission
const form = document.getElementById("message-form");
form.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior (page reload)
  event.preventDefault();

  // Get values from form inputs
  const name = document.getElementById("name-input").value;
  const dob = document.getElementById("dob-input").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById("message-input").value;

  // Format date to DD/MM/YYYY
  const dateParts = dob.split("-"); // YYYY-MM-DD
  const formattedDob = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;

  // Display values in the output area
  document.getElementById("output-name").textContent = name;
  document.getElementById("output-dob").textContent = formattedDob;
  document.getElementById("output-gender").textContent = gender;
  document.getElementById("output-message").textContent = message;

  // Optional: You can reset the form after submission
  // form.reset();

  // Handle Form
  document
    .getElementById("message-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name-input").value;
      const dob = document.getElementById("dob-input").value;
      const gender = document.querySelector(
        'input[name="gender"]:checked'
      ).value;
      const message = document.getElementById("message-input").value;
      const now = new Date().toLocaleString("id-ID");

      document.getElementById("output-name").innerText = name;
      document.getElementById("output-dob").innerText = dob;
      document.getElementById("output-gender").innerText = gender;
      document.getElementById("output-message").innerText = message;
      document.getElementById("current-time").innerText = now;
    });

});
