document.addEventListener("DOMContentLoaded", function () {

    const loginBtn = document.getElementById("loginBtn");

    if (loginBtn) {

        loginBtn.addEventListener("click", function () {

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const message = document.getElementById("message");

            if (email === "" || password === "") {
                message.innerHTML = "❌ সব তথ্য পূরণ করুন";
                message.style.color = "red";
                return;
            }

            message.innerHTML = "✅ Login Successful";
            message.style.color = "green";

            setTimeout(function () {
                window.location.href = "dashboard.html";
            }, 1000);

        });

    }

});

function logout() {
    window.location.href = "index.html";
}