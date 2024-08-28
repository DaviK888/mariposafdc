//---HAMBURGER MENU---//

// select hamburger and nav-menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Listen for a click on hamburger and toggle on active to bring out nav-menu
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Select all links within nav-menu, then when user clicks any link, close the menu.
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//---BACK TO TOP BUTTON---//

const mybutton = document.querySelector("#btn-back-to-top");

// If the user scrolls down 1000px from the top of the document, scrollFunction  will change #btn-back-to-top to display: block , or else display will stay as 'none'

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, activate backToTop function to scroll to the top of the document at 0 pixels
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//---SCROLL ANIMATIONS---//

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const container1 = entry.target.querySelector('.content-container-1');
  
      if (entry.isIntersecting) {
        container1.classList.add('content-animation-1');
        return; // if we added the class, exit the function
      }
  
      // When we are not intersecting, remove the class
      container1.classList.remove('content-animation-1');
    });
  });
  
  observer1.observe(document.querySelector('.content-container-wrapper-1'));
  
  
  
  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const container2 = entry.target.querySelector('.content-container-2');
  
      if (entry.isIntersecting) {
        container2.classList.add('content-animation-2');
        return; // if we added the class, exit the function
      }
  
      // When we are not intersecting, remove the class
      container2.classList.remove('content-animation-2');
    });
  });
  
  observer2.observe(document.querySelector('.content-container-wrapper-2'));
  
  const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const container3 = entry.target.querySelector('.content-container-3');
  
      if (entry.isIntersecting) {
        container3.classList.add('content-animation-1');
        return; // if we added the class, exit the function
      }
  
      // When we are not intersecting, remove the class
      container3.classList.remove('content-animation-1');
    });
  });

  observer3.observe(document.querySelector('.content-container-wrapper-3'));

  const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const container4 = entry.target.querySelector('.content-container-4');
  
      if (entry.isIntersecting) {
        container4.classList.add('content-animation-2');
        return; // if we added the class, exit the function
      }
  
      // When we are not intersecting, remove the class
      container4.classList.remove('content-animation-2');
    });
  });

  observer4.observe(document.querySelector('.content-container-wrapper-4'));

//Since all the IDs under .services-box has scale(0) on main page for their animation, here we don't want that so we change the scale to(1)

document.querySelector('#clock').style.transform = 'scale(1)';
document.querySelector('#rating').style.transform = 'scale(1)';
document.querySelector('#house').style.transform = 'scale(1)';
document.querySelector('#calendar').style.transform = 'scale(1)';

//---SCROLL TRIGGERS CANCELLATION---//

// const noAnimationClock = document.querySelector('#clock');
// const noAnimationRating = document.querySelector('#rating');
// const noAnimationHouse = document.querySelector('#house');
// const noAnimationCalendar = document.querySelector('#calendar');


// noAnimationClock.classList.add('noanimation');
// noAnimationRating.classList.add('noanimation');
// noAnimationHouse.classList.add('noanimation');
// noAnimationCalendar.classList.add('noanimation');