const btn = document.getElementById("btn-click");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear previous error messages
  document.getElementById("name_error").textContent = "";
  document.getElementById("email_error").textContent = "";
  document.getElementById("message_error").textContent = "";

  // Get form values
  const name = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validate form fields
  let valid = true;
  if (!name) {
    document.getElementById("name_error").textContent = "Name is required";
    valid = false;
  }
  if (!email) {
    document.getElementById("email_error").textContent = "Email is required";
    valid = false;
  }
  if (!message) {
    document.getElementById("message_error").textContent =
      "Message is required";
    valid = false;
  }

  if (!valid) {
    return;
  }

  // Send email using EmailJS
  emailjs.sendForm("service_vx2ayzt", "template_3mnxfr6", this).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Email sent successfully!");
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Failed to send email. Please try again later.");
    }
  );
});
