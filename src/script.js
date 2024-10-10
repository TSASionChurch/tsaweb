document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden'); // Toggle the visibility of the mobile menu
    });

    // Scroll Animation: Animate cards when they come into view
    const serviceCards = document.querySelectorAll('.service-card');

    // Scroll observer callback
    const observerCallback = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [50, 0], // Move up slightly
                    duration: 800,
                    easing: 'linear',
                     // Stagger delay for each card (150ms per card)
                });
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    };
const p="Cc";
    // Create an Intersection Observer
    const observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: '0px 0px -50px 0px', // Trigger animation when the element is near the viewport
        threshold: 0.4 // Element must be 10% in view to trigger
    });

    // Observe each card
    serviceCards.forEach(card => {
        observer.observe(card);
    });

    // Array of images
    const images = [
        "DSC_0001.webp", // Image 1
        "DSC_0002.webp", // Image 2
    ];

    // Array of text content
    const textContent = [
        {
            title: "Experience the Spirit of the Salvation Army Church",
            description: "Be a part of our mission to uplift lives, bring comfort, and share hope. We're here to support and welcome those who seek help and community.",
            textcolor: "text-amber-900",
            bgcolor: "bg-amber-200"
        },
        {
            title: "Join Our Mission",
            description: "Together, we can make a difference in the lives of those who need it most. Help us help others.",
            textcolor: "text-sky-900",
            bgcolor: "bg-sky-200"
        }
    ];

    let currentIndex = 0;

    // Function to update the image and text with animations
    function updateContent() {
        const imageElement = document.getElementById('image1');
        const titleElement = document.getElementById('main-title');
        const textElement = document.getElementById('main-text');
        const bgElement = document.getElementById('main-section');

        // Slide out the old image to the left
        anime({
            targets: imageElement,
            translateX: [0, -1000],  // Slide image to the left
            opacity: [1, 0],
            duration: 600,
            easing: 'easeInQuad',
            complete: () => {
                // Change the image source
                imageElement.src = images[currentIndex];

                // Slide the new image in from the right
                anime({
                    targets: imageElement,
                    translateX: [1000, 0],  // Slide image from the right
                    opacity: [0, 1],
                    duration: 600,
                    easing: 'easeOutQuad'
                });
            }
        });

        // Staggered fade-out of the old text
        anime({
            targets: [titleElement, textElement],
            opacity: [1, 0],
            translateY: [0, -30], // Slide up
            duration: 500,
            easing: 'easeInQuad',
            delay: 400, // Introduce a delay for the text to fade out after the image starts sliding
            complete: () => {
                // Change the text content
                titleElement.textContent = textContent[currentIndex].title;
                textElement.textContent = textContent[currentIndex].description;

                // Change background color
                bgElement.classList.remove('bg-amber-200', 'bg-sky-200'); // Remove previous classes
                bgElement.classList.add(textContent[currentIndex].bgcolor); // Add new background color class

                // Change text color
                titleElement.classList.remove('text-amber-900', 'text-sky-900'); // Remove previous text color
                textElement.classList.remove('text-amber-900', 'text-sky-900'); // Remove previous text color
                titleElement.classList.add(textContent[currentIndex].textcolor); // Add new text color class
                textElement.classList.add(textContent[currentIndex].textcolor); // Add new text color class

                // Animate the new text in (fade and slide in from below)
                anime({
                    targets: [titleElement, textElement],
                    opacity: [0, 1],
                    translateY: [30, 0], // Slide in
                    duration: 500,
                    easing: 'linear',
                    delay: 200, // Stagger the text appearance slightly after the image transition
                });
            }
        });

        // Increment index
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Update content every 7 seconds with animation
    setInterval(updateContent, 7000);

    // Initial content update on page load
    updateContent();
});
