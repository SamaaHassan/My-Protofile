const searchBox = document.querySelector('.search-box');
const searchBtn = document.getElementById('searchBtn');

// لما تضغطي على زر البحث → يفتح أو يقفل الـ input
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  searchBox.classList.toggle('active');
});

// لما تضغطي برا الـ search → يتقفل
document.addEventListener('click', (e) => {
  if (!searchBox.contains(e.target) && e.target !== searchBtn) {
    searchBox.classList.remove('active');
  }
});
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,     // مدة الحركة بالمللي ثانية
    once: true          // الحركة بتحصل مرة واحدة بس عند الظهور
  });
});
