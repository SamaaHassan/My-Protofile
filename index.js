// const searchBox = document.querySelector('.search-box');
// const searchBtn = document.getElementById('searchBtn');

// // لما تضغطي على زر البحث → يفتح أو يقفل الـ input
// searchBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     searchBox.classList.toggle('active');
// });

// // لما تضغطي برا الـ search → يتقفل
// document.addEventListener('click', (e) => {
//     if (!searchBox.contains(e.target) && e.target !== searchBtn) {
//         searchBox.classList.remove('active');
//     }
// });
// document.addEventListener("DOMContentLoaded", function () {
//     AOS.init({
//         duration: 1500,     // مدة الحركة بالمللي ثانية
//         once: true          // الحركة بتحصل مرة واحدة بس عند الظهور
//     });
// });
// document.addEventListener('DOMContentLoaded', () => {
//     // 1. Search button function (Toggle Search Input)
//     const searchBox = document.querySelector('.search-box');
//     const searchBtn = document.querySelector('.search-btn');
//     const searchInput = document.querySelector('.search-input');

//     searchBtn.addEventListener('click', () => {
//         searchBox.classList.toggle('active');
//         if (searchBox.classList.contains('active')) {
//             searchInput.focus(); // Focus on the search field when opened
//         } else {
//             searchInput.value = ''; // Clear text when closed
//         }
//     });

//     // Close search field if clicked anywhere else outside the search box
//     document.addEventListener('click', (event) => {
//         if (!searchBox.contains(event.target) && searchBox.classList.contains('active')) {
//             searchBox.classList.remove('active');
//             searchInput.value = '';
//         }
//     });

//     // 2. Hamburger Menu Functionality
//     const hamburgerMenu = document.querySelector('.hamburger-menu');
//     const closeMenu = document.querySelector('.close-menu');
//     const navMenu = document.querySelector('.nav-menu');
//     const navLinks = document.querySelectorAll('.nav-menu ul li a'); // كل الروابط داخل القائمة

//     // فتح القائمة عند النقر على الهامبرغر
//     hamburgerMenu.addEventListener('click', () => {
//         navMenu.classList.add('active');
//     });

//     // إغلاق القائمة عند النقر على زر الإغلاق
//     closeMenu.addEventListener('click', () => {
//         navMenu.classList.remove('active');
//     });

//     // إغلاق القائمة عند النقر على أي رابط داخلها (والانتقال إلى القسم)
//     navLinks.forEach(link => {
//         link.addEventListener('click', () => {
//             navMenu.classList.remove('active'); // إغلاق القائمة
//             // (سلوك التمرير السلس سيتم التعامل معه في النقطة 3)
//         });
//     });

//     // إغلاق القائمة إذا تم النقر خارجها (باستثناء زر الهامبرغر نفسه)
//     document.addEventListener('click', (event) => {
//         if (!navMenu.contains(event.target) && !hamburgerMenu.contains(event.target) && navMenu.classList.contains('active')) {
//             navMenu.classList.remove('active');
//         }
//     });

//     document.addEventListener('DOMContentLoaded', () => {
//         const hamburgerMenu = document.querySelector('.hamburger-menu');
//         const navMenu = document.querySelector('.nav-menu');
//         const navLinks = document.querySelectorAll('.nav-menu ul li a');

//         // فتح القائمة
//         hamburgerMenu.addEventListener('click', (e) => {
//             e.stopPropagation(); // منع إغلاقها فورًا بعد الفتح
//             navMenu.classList.toggle('active');
//         });

//         // إغلاق القائمة لما تضغطي على أي رابط
//         navLinks.forEach(link => {
//             link.addEventListener('click', () => {
//                 navMenu.classList.remove('active');
//             });
//         });

//         // إغلاقها لما تضغطي في أي مكان تاني
//         document.addEventListener('click', (event) => {
//             const isClickInsideMenu = navMenu.contains(event.target);
//             const isClickOnHamburger = hamburgerMenu.contains(event.target);
//             if (!isClickInsideMenu && !isClickOnHamburger) {
//                 navMenu.classList.remove('active');
//             }
//         });
//     });



//     // 3. Smooth Scrolling (Updated to consider header height AND hamburger menu state)
//     const header = document.querySelector('header');
//     const headerHeight = header ? header.offsetHeight : 80; // Default 80px if header not found

//     document.querySelectorAll('.nav-menu ul li a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault(); // Prevent default scroll behavior

//             const targetId = this.getAttribute('href');
//             const targetElement = document.querySelector(targetId);

//             if (targetElement) {
//                 // Calculate position considering header height and extra padding
//                 // OffsetTop remains the same regardless of menu open/close because header is fixed/sticky
//                 const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 20; // 20px for extra padding

//                 window.scrollTo({
//                     top: offsetTop,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });

//     // 4. Contact Form Validation (No changes needed here)
//     const contactForm = document.getElementById('contact-form');
//     if (contactForm) {
//         contactForm.addEventListener('submit', function (e) {
//             e.preventDefault();

//             const name = document.getElementById('name').value.trim();
//             const email = document.getElementById('email').value.trim();
//             const message = document.getElementById('message').value.trim();

//             if (name === '' || email === '' || message === '') {
//                 alert('Please fill in all required fields.');
//                 return;
//             }

//             if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//                 alert('Please enter a valid email address.');
//                 return;
//             }

//             alert('Your message has been sent successfully! We will get back to you soon.');
//             contactForm.reset();
//             console.log('Form data submitted:', { name, email, message });
//         });
//     }
// });




document.addEventListener('DOMContentLoaded', () => {
    // === Search Box ===
    const searchBox = document.querySelector('.search-box');
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');

    searchBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        searchBox.classList.toggle('active');
        if (searchBox.classList.contains('active')) {
            searchInput.focus();
        } else {
            searchInput.value = '';
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchBox.contains(e.target)) {
            searchBox.classList.remove('active');
            searchInput.value = '';
        }
    });

    // === Hamburger Menu ===
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu ul li a');

    // Toggle القائمة عند الضغط على الهامبرغر
    hamburgerMenu.addEventListener('click', (e) => {
        e.stopPropagation(); // عشان الضغط عليه ميفعلش document.click
        navMenu.classList.toggle('active'); // ← هنا التبديل بين الفتح والإغلاق
    });

    // إغلاق القائمة عند الضغط على أي رابط
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // إغلاق القائمة عند الضغط خارجها
    document.addEventListener('click', (e) => {
        const isClickInsideMenu = navMenu.contains(e.target);
        const isClickOnHamburger = hamburgerMenu.contains(e.target);
        if (!isClickInsideMenu && !isClickOnHamburger) {
            navMenu.classList.remove('active');
        }
    });

    // === AOS Animation ===
    AOS.init({
        duration: 1500,
        once: true
    });

    // === Smooth Scroll ===
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 80;

    document.querySelectorAll('.nav-menu ul li a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // === Contact Form ===
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all required fields.');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Your message has been sent successfully! We will get back to you soon.');
            contactForm.reset();
        });
    }
});
