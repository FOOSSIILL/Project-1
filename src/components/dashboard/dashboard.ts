document.addEventListener("DOMContentLoaded", () => {
    const dashboardContainer = document.querySelector(".dashboard-container");

    if (dashboardContainer) {
        // Crea un panel de ejemplo
        const panel = document.createElement("div");
        panel.classList.add("dashboard-panel");
        panel.textContent = "Panel de Ejemplo";
        dashboardContainer.appendChild(panel);

        // Agrega más paneles y lógica aquí según tus necesidades
    }
});
