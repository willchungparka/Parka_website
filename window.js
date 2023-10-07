// JavaScript to toggle accordion sections
document.querySelectorAll('.accordion').forEach(function(acc) {
    const header = acc.querySelector('.accordion-header');
    const content = acc.querySelector('.accordion-content');
    
    header.addEventListener('click', function() {
        acc.classList.toggle('active');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});