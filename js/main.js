// Navigation dropdowns
const menuItems = document.querySelectorAll('.main-menu__item--has-dropdown');
menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const dropdown = item.querySelector('.main-menu__dropdown');
    if (dropdown) dropdown.style.display = 'block';
  });
  item.addEventListener('mouseleave', () => {
    const dropdown = item.querySelector('.main-menu__dropdown');
    if (dropdown) dropdown.style.display = 'none';
  });
});

// Language switcher (placeholder)
document.querySelectorAll('.lang-switcher__btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    alert('Смена языка пока не реализована.');
  });
});

// Button hover effect (visual effect example)
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 4px 16px rgba(34, 139, 34, 0.15)';
    btn.style.transform = 'translateY(-2px) scale(1.03)';
    btn.style.transition = 'all 0.2s';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = '';
    btn.style.transform = '';
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// --- НАДЕЖНЫЙ КОД ДЛЯ СЛАЙДЕРА ---
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    if (!slider) return;

    const sliderImgs = slider.querySelectorAll('.slider__img');
    const prevBtn = slider.querySelector('.slider__btn--prev');
    const nextBtn = slider.querySelector('.slider__btn--next');
    
    if (sliderImgs.length === 0) return;

    let currentSlide = 0;
    let sliderInterval = null;

    function showSlide(idx) {
        // Определяем правильный индекс
        if (idx >= sliderImgs.length) {
            idx = 0;
        }
        if (idx < 0) {
            idx = sliderImgs.length - 1;
        }

        // Прячем все картинки и показываем только одну
        sliderImgs.forEach(img => {
            img.classList.remove('active');
        });
        sliderImgs[idx].classList.add('active');
        currentSlide = idx;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    // Функция для запуска/перезапуска автопрокрутки
    function startSlider() {
        clearInterval(sliderInterval); // Сначала останавливаем старый
        sliderInterval = setInterval(nextSlide, 8000); // Запускаем новый на 8 секунд
    }

    // Обработчики кнопок
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            startSlider(); // Перезапускаем таймер при клике
        });

        nextBtn.addEventListener('click', () => {
            nextSlide();
            startSlider(); // Перезапускаем таймер при клике
        });
    }
    
    // Запускаем все
    showSlide(0); // Показываем первую картинку
    startSlider(); // Включаем автопрокрутку
});
// --- КОНЕЦ КОДА ДЛЯ СЛАЙДЕРА ---

// Contact form validation (contacts page)
const contactForm = document.querySelector('.contacts__form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Форма неактивна, но можно добавить валидацию
    const name = contactForm.querySelector('input[name="name"]');
    const email = contactForm.querySelector('input[name="email"]');
    const message = contactForm.querySelector('textarea[name="message"]');
    let valid = true;
    [name, email, message].forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = 'red';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });
    if (!valid) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    alert('Спасибо за обращение! Форма отправлена.');
  });
} 