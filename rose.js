document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const fadeInElements = document.querySelectorAll('.fade-in');
  
    envelope.addEventListener('click', function() {
      envelope.classList.add('open');
      fadeInElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('visible');
        }, index * 500); // Adjust the delay as needed (500ms in this example)
      });
  
      // Vanish the envelope after all elements are visible
      setTimeout(() => {
        envelope.classList.add('vanish');
      }, fadeInElements.length * 500 + 1000); // Adjust the delay as needed
    });
  });