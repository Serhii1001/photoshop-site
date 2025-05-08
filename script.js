<script>
    function toggleServices(serviceId, button) {
        const serviceGrid = document.getElementById(serviceId);
        const isActive = button.classList.contains('active');

        // Сброс всех кнопок и скрытие всех блоков
        document.querySelectorAll('.toggle-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.service-grid').forEach(grid => grid.style.display = "none");

        if (!isActive) {
            // Сделать кнопку активной и показать блок
            button.classList.add('active');
            serviceGrid.style.display = "grid";

            // Плавный скролл
            serviceGrid.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>
