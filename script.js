// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when link is clicked
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Works Filtering Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work-item');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update button styles
            filterBtns.forEach(b => {
                b.classList.remove('bg-navy', 'text-white');
                b.classList.add('bg-transparent', 'text-navy');
            });
            btn.classList.remove('bg-transparent', 'text-navy');
            btn.classList.add('bg-navy', 'text-white');

            const filterValue = btn.getAttribute('data-filter');

            workItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hidden');
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                    setTimeout(() => {
                        if (!item.classList.contains('show')) item.classList.add('hidden');
                    }, 0); // Immediate hide for simplicity
                }
            });
        });
    });
}

// Navbar Background Change on Scroll
const header = document.getElementById('header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-md');
        } else {
            header.classList.remove('shadow-md');
        }
    });
}