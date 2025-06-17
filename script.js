document.addEventListener('DOMContentLoaded', function() {
    // Карусел функционалност
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-button.prev');
    const nextBtn = document.querySelector('.carousel-button.next');
    let currentSlide = 0;

    function showSlide(n) {
        // Скриваме всички слайдове
        slides.forEach(slide => slide.style.display = 'none');
        // Премахваме активната точка
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Обработка на граничните стойности
        if (n >= slides.length) {
            currentSlide = 0;
        } else if (n < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = n;
        }
        
        // Показваме текущия слайд и маркираме съответната точка
        slides[currentSlide].style.display = 'block';
        dots[currentSlide].classList.add('active');
    }

    // Събития за бутоните
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // Събития за точките
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Автоматична смяна на слайдовете
    function autoSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Стартираме карусела с първия слайд
    showSlide(0);
    
    // Автоматична смяна на слайдовете на всеки 5 секунди
    setInterval(autoSlide, 5000);

    // Функционалност за мобилното меню
    const menuToggle = document.querySelector('.menu-toggle');
    const navContainer = document.querySelector('.nav-container');
    
    if (menuToggle && navContainer) {
        menuToggle.addEventListener('click', () => {
            navContainer.classList.toggle('active');
            const expanded = navContainer.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', expanded);
        });
    }

    // Затваряне на мобилното меню при клик върху линк
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navContainer.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Затваряне на мобилното меню при промяна на размера на прозореца
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navContainer.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Запазваме оригиналната функционалност
    const clickMeBtn = document.getElementById("clickMe");
    if (clickMeBtn) {
        clickMeBtn.addEventListener("click", function() {
            alert("Здравей! Уеб платформата работи!");
        });
    }
});
