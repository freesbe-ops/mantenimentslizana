document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('menu-toggle');
    const overlay = document.getElementById('menu-overlay');
    const close = document.getElementById('menu-close');

    function openMenu() {
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // evitar scroll
    }
    function closeMenu() {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    if (toggle && overlay) {
        toggle.addEventListener('click', openMenu);
        if (close) close.addEventListener('click', closeMenu);
        // Tancar en clicar un enllaç
        overlay.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                closeMenu();
                // El scroll suau cap a l'element ja el tenim
            });
        });
        // Tancar si es clica fora del contingut (opcional)
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) closeMenu();
        });
    }
});
