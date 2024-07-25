
            // Function to check if element is in viewport
            function isInViewport(element) {
                var rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
    
            // Function to handle scroll event
            function handleScroll() {
                var elements = document.querySelectorAll('.animate-jump');
                elements.forEach(function(element) {
                    if (isInViewport(element)) {
                        element.classList.add('animate-in');
                    }
                });
            }
    
            // Attach scroll event listener
            window.addEventListener('scroll', handleScroll);
    
            // Initial check in case elements are already in viewport on page load
            handleScroll();
