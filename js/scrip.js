// hớlider
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  var intervalId = setInterval(nextSlide, 3000);
  
  document.querySelector(".slider").addEventListener("mouseover", function () {
    clearInterval(intervalId);
  });

  document.querySelector(".slider").addEventListener("mouseout", function () {
    intervalId = setInterval(nextSlide, 5000);
  });
  function prev() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
  
  function next() {
    currentSlide = (currentSlide + 1) % slides.length;
    if (currentSlide === 0) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }
  