
document.getElementById("myForm").addEventListener("submit", validateForm);

const nameInput = document.getElementById("name");
const addressInput = document.getElementById("address");
const cityInput = document.getElementById("city");
const phoneInput = document.getElementById("phonenumber");
const emailInput = document.getElementById("email");

function validateForm(event) {
    event.preventDefault(); 

    let isValid = true;

    
    document.getElementById("successMessage").innerHTML = "";

    
    if (nameInput.value.trim() === "") {
        showError("nameError", "Full Name is required!");
        isValid = false;
    } else {
        hideError("nameError");
    }

    
    if (addressInput.value.trim() === "") {
        showError("addressError", "Address is required!");
        isValid = false;
    } else {
        hideError("addressError");
    }

    
    if (cityInput.value.trim() === "") {
        showError("cityError", "City is required!");
        isValid = false;
    } else {
        hideError("cityError");
    }

    
    const phonePattern = /^[0-9]{10}$/;
    if (phoneInput.value.trim() === "") {
        showError("phonenumberError", "Phone Number is required!");
        isValid = false;
    } else if (!phonePattern.test(phoneInput.value.trim())) {
        showError("phonenumberError", "Enter a valid 10-digit phone number!");
        isValid = false;
    } else {
        hideError("phonenumberError");
    }

    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailInput.value.trim() === "") {
        showError("emailError", "Email is required!");
        isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        showError("emailError", "Enter a valid email address!");
        isValid = false;
    } else {
        hideError("emailError");
    }

    
    if (isValid) {
        document.getElementById("successMessage").innerHTML = "Form submitted successfully!";
        document.getElementById("myForm").reset();
        setTimeout(function() {
            window.location.href = 'thankyou.html'; // Yahan apna thank you page ka URL daalein
        }, 2000); // 2000 milliseconds = 2 seconds
        
    }

    return isValid;
}


function showError(elementId, message) {
    document.getElementById(elementId).innerHTML = message;
}


function hideError(elementId) {
    document.getElementById(elementId).innerHTML = "";
}


nameInput.addEventListener("input", () => hideError("nameError"));
addressInput.addEventListener("input", () => hideError("addressError"));
cityInput.addEventListener("input", () => hideError("cityError"));
phoneInput.addEventListener("input", () => {
    const phonePattern = /^[0-9]{10}$/;
    if (phonePattern.test(phoneInput.value.trim())) {
        hideError("phonenumberError");
    }
});
emailInput.addEventListener("input", () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailPattern.test(emailInput.value.trim())) {
        hideError("emailError");
    }
});
