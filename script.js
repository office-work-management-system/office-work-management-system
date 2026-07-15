window.onload = function () {

    alert("Script Loaded Successfully");

    document.getElementById("loginBtn").addEventListener("click", function () {

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            document.getElementById("message").innerHTML = "সব তথ্য পূরণ করুন";
        } else {
            document.getElementById("message").innerHTML = "Login Successful";
        }

    });

};