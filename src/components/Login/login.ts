document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("form");
  if (loginForm) {
      loginForm.addEventListener("submit", (event) => {
          event.preventDefault();
          alert("Login clicked!"); // Aquí puedes agregar la lógica de autenticación
      });
  }
});
