// Contact form validation

const contactForm = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

function setError(id, msg) {
  document.getElementById(id + "Error").textContent = msg;
  return msg === "";
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  successMsg.textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const ok = [
    setError("name", name.length < 3 ? "Name kuraindhadhu 3 letters venum" : ""),
    setError("email", !emailPattern.test(email) ? "Valid email kudunga" : ""),
    setError("message", message.length < 10 ? "Message kuraindhadhu 10 letters venum" : ""),
  ].every(Boolean);

  if (ok) {
    successMsg.textContent = `Nandri ${name}! Unga message send aagiduchu.`;
    contactForm.reset();
  }
});
