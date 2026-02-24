
    const text = document.getElementById("text");
    const letters = "abcdefghijklmnopqrstuvwxyz 0123456789!@#$%^&*()_+-=[]{}|;':\",./<>?`~ ABCDEFGHIJKLMNOPQRSTUVWXYZ";
<<<<<<< HEAD
=======

>>>>>>> 81e0aa9016e347857add8d46cd0b29b3e3d812fd
    const originalText = text.innerText;

    let currentIndex = 0;

    function animateText() {

        if (currentIndex >= originalText.length +1) return;

        let iteration = 0;

        const interval = setInterval(() => {
<<<<<<< HEAD
            
=======
>>>>>>> 81e0aa9016e347857add8d46cd0b29b3e3d812fd

            let displayText = "";

            // Show already completed letters
            displayText += originalText.substring(0, currentIndex);

            // Show current animated letter (random)
            displayText += letters[Math.floor(Math.random() * letters.length)];

            // Hide remaining letters using blank spaces
            displayText += " ".repeat( Math.max(0, originalText.length - currentIndex - 1));

            text.innerText = displayText;

            iteration++;

            if (iteration >= 5) {
                clearInterval(interval);
                
                // Lock the correct letter
                currentIndex++;
                animateText();
            }

        }, 10);
    }
    animateText();