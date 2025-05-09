function toggleServices(serviceId, button) {
  const serviceGrid = document.getElementById(serviceId);
  const isVisible = serviceGrid.style.display === "grid";

  document.querySelectorAll('.service-grid').forEach(grid => grid.style.display = 'none');
  document.querySelectorAll('.toggle-button').forEach(btn => btn.classList.remove('active'));

  if (!isVisible) {
    serviceGrid.style.display = "grid";
    button.classList.add('active');
  }
}
