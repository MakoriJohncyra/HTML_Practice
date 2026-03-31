document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      if (!loginForm.username.value || !loginForm.password.value) {
        e.preventDefault();
        alert("Fill all fields");
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      if (signupForm.password.value.length < 6) {
        e.preventDefault();
        alert("Password must be at least 6 characters");
      }
    });
  }

});