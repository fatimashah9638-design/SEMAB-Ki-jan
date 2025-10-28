// 1. Smooth Scrolling Jab Button Click Ho
document.getElementById('start-button').addEventListener('click', function() {
    // Section-2 par smoothly scroll karega
    document.getElementById('section-2').scrollIntoView({
        behavior: 'smooth'
    });
});

// 2. Button Animation on Hover (Example: View More button)
document.querySelectorAll('.view-more-btn').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#880E4F';
    });
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // CSS gradient wapas aa jayega
    });
});
