document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buttonbox button');
    const images = document.querySelectorAll('.img img');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            images.forEach(img => img.style.display = 'none'); // Hide all images
            images[index].style.display = 'block'; // Show the clicked image
        });
    });

    // Initially hide all images except the first one
    images.forEach((img, index) => {
        img.style.display = index === 0 ? 'block' : 'none';
    });
});
