function submitForm() {
    document.getElementById("errMsg").innerHTML = '<p style="color: green; border: 2px solid green; padding: 10px; font-weight: 600; font-size: 14px;">Successfully submitted</p>';
}
function validateForm() {
    let err = false;
    var name = document.getElementById("nameCntct").value;
    var email = document.getElementById("emailCntct").value;
    var message = document.getElementById("messageCntct").value;

    if (name === "" || email === "" || message === "" || !isValidEmail(email)) {
        err = true;
    }
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    if (err == false) {
        document.getElementById("errMsg").innerHTML = '<p style="color: green; border: 2px solid green; padding: 10px; font-weight: 600; font-size: 14px;">Successfully submitted.</p>';
        $('#contactForm').trigger("reset");
    } else {
        document.getElementById("errMsg").innerHTML = '<p style="color: red; border: 2px solid red; padding: 10px; font-weight: 600; font-size: 14px;">All fields are required and email should be correct format.</p>';
    }
    return false;
}