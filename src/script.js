document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden'); // Toggle the visibility of the mobile menu
    });
    function animateTimeline(entries) {
    
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const service = document.getElementById('service-timings');
                anime({
                    targets: service,
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 800,
                    easing: 'easeOutExpo'
                });
                hasAnimated = true; // Set flag to true after animation
            }
        });
    }

    // Scroll Animation: Animate cards when they come into view
    

    // Create an Intersection Observer
  

    // Event listener for load to animate visible items
  
    // Array of images
    const images = [
        "DSC_0001.webp", // Image 1
        "DSC_0002.webp",
        "DSC_0003.webp" // Image 2
    ];

    // Array of text content
    const textContent = [
        {
            title: "Welcome to our church",
            description: "I was glad when they said to me,“Let us go into the house of the Lord.” Psalm 122:1 "
        },
        {
            title: "Holiness Convention 2024",
            description: "I was glad when they said to me,“Let us go into the house of the Lord.” Psalm 122:1 "
       
        },
        {
            title: "Sunday School Children",
            description: "Together, we can make a difference ."
        }
    ];

    let currentIndex = 0;

    // Function to update the image and text with animations
    function updateContent() {
        const imageElement = document.getElementById('image1');
        const titleElement = document.getElementById('main-title');
        const textElement = document.getElementById('main-text');

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



// TIMELINE


