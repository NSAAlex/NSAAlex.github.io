// contact.js - CONTACT FORM (used on contact.html)
// Sends the form to Web3Forms, which emails it to me.

const form = document.getElementById("contact-form");
const result = document.getElementById("form-result");
const sendButton = document.getElementById("send-btn");

// Wait for a number of milliseconds (so the message does not just flicker)
const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Send the form information to Web3Forms
const sendEmail = async () => {
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Runs when the form is submitted
const submitForm = async (event) => {
  event.preventDefault(); // stay on this page

  // feedback while we are sending
  result.className = "form-result";
  result.innerHTML = "Sending...";
  sendButton.disabled = true;

  const response = await sendEmail();

  // keep the "Sending..." message up for about 1 second
  await wait(1000);

  if (response != null && response.status == 200) {
    result.className = "form-result success";
    result.innerHTML = "Thank you! Your message was sent.";
    form.reset();
  } else {
    result.className = "form-result error";
    result.innerHTML = "Sorry, your message could not be sent. Please try again.";
  }

  sendButton.disabled = false;
};

// If the form is filled out wrong, tell the user (the browser also shows
// its own message from the required / email rules in the HTML)
sendButton.onclick = () => {
  if (!form.checkValidity()) {
    result.className = "form-result error";
    result.innerHTML = "Please fill out all required fields correctly.";
  }
};

form.onsubmit = submitForm;