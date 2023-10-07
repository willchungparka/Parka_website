
// script.js
document.addEventListener('DOMContentLoaded', function () {
    // JavaScript for the accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionContent = header.nextElementSibling;
            
            // Check if the clicked header is already active
            const isActive = header.classList.contains('active');
            
            // Collapse all accordion sections
            accordionHeaders.forEach(otherHeader => {
                otherHeader.classList.remove('active');
                otherHeader.nextElementSibling.style.maxHeight = '0';
            });

            // If the clicked header was not active, expand it
            if (!isActive) {
                header.classList.add('active');
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
        });
    });
    // JavaScript for changing navbar design on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            navbar.style.backgroundColor = '#8AA2A6'; // Change the background color
            // Add other style changes as needed
        } else {
            navbar.style.backgroundColor = 'transparent'; // Revert to the initial background color
            // Revert other styles as needed
        }
    });

    // popup navbar
    const navbarButton = document.getElementById("navbar_icon");
    const navOverlay = document.getElementById("navbar-overlay");

    navbarButton.addEventListener("click", function() {
        // Check the current height of the overlay
        const currentHeight = parseInt(getComputedStyle(navOverlay).height);

        // Toggle the overlay height
        if (currentHeight === 0) {
            navOverlay.style.height = "300px";
        } else {
            navOverlay.style.height = "0";
        }
    });

    // Close button functionality remains the same
    document.getElementById("closeNav").addEventListener("click", function() {
        navOverlay.style.height = "0";
    });
    // Hide the navigation overlay on scroll
    let scrolled = false;

    window.addEventListener("scroll", function() {
        if (!scrolled) {
            scrolled = true;
            // Hide the navigation overlay
            navOverlay.style.height = "0";
            // Reset the flag after a brief delay (adjust the delay as needed)
            setTimeout(function() {
                scrolled = false;
            }, 1000); // Adjust the delay duration as needed
        }
    });






});
    

