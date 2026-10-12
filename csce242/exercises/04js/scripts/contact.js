//https://web3forms.com/
//e.target is the form
document.getElementById('contact-form').onsubmit = async(e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    formData.append("access_key", "5c4ad0a4-e84f-4bb9-b1bd-285ec351c843");
    const result = document.getElementById("result");
    result.innerHTML = "Sending...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            result.innerHTML = "Message Sent";
            form.reset();
        } else {
            result.innerHTML ="Error: " + data.message;
        }

    } catch (error) {
        result.innerHTML = "Sorry, we couldn't send your message";
    } finally {
        result.innerHTML = "";
    }
};