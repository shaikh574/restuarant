// Slider for Hero Section
$(document).ready(function () {
    let currentSlide = 0;
    let slides = $('.slider img');
    let numSlides = slides.length;
  
    function showNextSlide() {
      slides.eq(currentSlide).fadeOut(600);
      currentSlide = (currentSlide + 1) % numSlides;
      slides.eq(currentSlide).fadeIn(600);
    }
  
    setInterval(showNextSlide, 3000);
  });
  
  // Testimonials Slider
  $(document).ready(function () {
    let testimonialIndex = 0;
    let testimonials = $('.testimonial');
    let numTestimonials = testimonials.length;
  
    function showNextTestimonial() {
      testimonials.hide();
      testimonials.eq(testimonialIndex).fadeIn(600);
      testimonialIndex = (testimonialIndex + 1) % numTestimonials;
    }
  
    setInterval(showNextTestimonial, 5000);
  });
  $(document).ready(function () {
    let currentSlide = 0;
    let slides = $('.slider img');
    let numSlides = slides.length;
  
    function showNextSlide() {
      slides.eq(currentSlide).fadeOut(600);
      currentSlide = (currentSlide + 1) % numSlides;
      slides.eq(currentSlide).fadeIn(600);
    }
  
    setInterval(showNextSlide, 3000);
  });
$(document).ready(function () {
  let currentDish = 0;
  let dishes = $('.dishes-slider .dish');
  let numDishes = dishes.length;

  function showNextDish() {
    dishes.eq(currentDish).fadeOut(600);
    currentDish = (currentDish + 1) % numDishes;
    dishes.eq(currentDish).fadeIn(600);
  }

  setInterval(showNextDish, 3000);
});
$(document).ready(function () {
  let currentDish = 0;
  let dishes = $('.dishes-slider .dish');
  let numDishes = dishes.length;

  function showNextDish() {
    dishes.eq(currentDish).fadeOut(600);
    currentDish = (currentDish + 1) % numDishes;
    dishes.eq(currentDish).fadeIn(600);
  }

  setInterval(showNextDish, 3000);
});
  

  