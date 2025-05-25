// Mobil menü toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle nav
    nav.classList.toggle('active');

    // Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger animation
    burger.classList.toggle('toggle');
});

// Scroll animasyonları
const sections = document.querySelectorAll('.section');

// Sayfa yüklendiğinde tüm bölümleri görünür yap
window.addEventListener('DOMContentLoaded', () => {
    sections.forEach(section => {
        section.classList.remove('hidden');
    });
});

// Scroll olayında bölümleri kontrol et
const checkSections = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        if (sectionTop < triggerBottom && sectionBottom > 0) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
};

window.addEventListener('scroll', checkSections);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            // Mobil menüyü kapat
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                burger.classList.remove('toggle');
            }
        }
    });
});

// Dil değiştirme fonksiyonu
document.addEventListener('DOMContentLoaded', function () {
    const langToggle = document.getElementById('langToggle');
    let currentLang = 'tr'; // Varsayılan dil Türkçe

    // Tüm çevrilebilir elementleri seç
    const translatableElements = document.querySelectorAll('[data-tr], [data-en]');

    // Sayfa yüklendiğinde varsayılan dili uygula
    applyLanguage(currentLang);

    // Dil değiştirme fonksiyonu
    function toggleLanguage() {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        applyLanguage(currentLang);
    }

    // Dili uygulama fonksiyonu
    function applyLanguage(lang) {
        // Buton metnini güncelle
        const buttonText = lang === 'tr' ? 'EN' : 'TR';
        langToggle.querySelector('span').textContent = buttonText;

        // Tüm çevrilebilir elementleri güncelle
        translatableElements.forEach(element => {
            const translation = element.getAttribute(`data-${lang}`);
            if (translation) {
                element.textContent = translation;
            }
        });

        // HTML lang özelliğini güncelle
        document.documentElement.lang = lang;

        // Özel çeviriler için translations nesnesini kullan
        const translations = {
            tr: {
                lead: 'AI Engineer Dev. & Mobile Application Dev.',
                aboutText: 'Merhaba, ben Talha. Bilgisayar mühendisliği öğrencisiyim ve Dart,Java, Python, C# dillerini kullanarak projeler geliştiriyorum. Özellikle Flutter uygulama geliştirme, yapay zekâ ve veri analizi konularına ilgi duyuyorum. Kendimi sürekli geliştirerek yazılım ve yapay zekâ alanlarında ilerlemeyi hedefliyorum. Mobil alanda Flutter ve Firebase kullanma deneyimim bulunuyor ve Flutter ile mobil uygulama geliştirilen Teknofest finalisti olan takımıma kaptanlık ediyorum.',
                skillsTitle: 'Yazılım Dilleri & Kütüphaneler',
                certificatesTitle: 'Sertifikalar',
                volunteerTitle: 'Gönüllü Çalışmalar',
                contactTitle: 'İletişim'
            },
            en: {
                lead: 'AI Engineer Dev. & Mobile Application Dev.',
                aboutText: "Hello, I'm Talha. I'm a Computer Engineering student, developing projects using Dart,Java, Python, and C#. I'm particularly interested in Flutter app development, artificial intelligence, and data analysis. My goal is to continuously improve myself and advance in the fields of software and AI. I have experience with Flutter and Firebase in mobile development, and I'm currently captaining my team, which is a Teknofest finalist with an app developed using Flutter.",
                skillsTitle: 'Programming Languages & Libraries',
                certificatesTitle: 'Certificates',
                volunteerTitle: 'Volunteer Work',
                contactTitle: 'Contact'
            }
        };

        // Özel çevirileri uygula
        document.querySelector('.lead').textContent = translations[lang].lead;
        document.querySelector('.about-content p').textContent = translations[lang].aboutText;
        document.querySelector('#skills h2').textContent = translations[lang].skillsTitle;
        document.querySelector('#certificates h2').textContent = translations[lang].certificatesTitle;
        document.querySelector('#volunteer h2').textContent = translations[lang].volunteerTitle;
        document.querySelector('#contact h2').textContent = translations[lang].contactTitle;
    }

    // Dil değiştirme butonuna tıklama olayı ekle
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
}); 