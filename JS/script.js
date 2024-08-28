//---HAMBURGER MENU---//

// select hamburger and nav-menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Listen for a click on hamburger and toggle on active class to bring out nav-menu
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Select all links within nav-menu, then when user clicks any link, close the menu (remove active class).
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//---BACK TO TOP BUTTON---//

const mybutton = document.querySelector("#btn-back-to-top");

// If the user scrolls down 1000px from the top of the document, scrollFunction  will change #btn-back-to-top to display: block, or else display will stay as 'none'

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

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const clock = entry.target.querySelector('#clock');
    const rating = entry.target.querySelector('#rating');
    const house = entry.target.querySelector('#house');
    const calendar = entry.target.querySelector('#calendar');

    if (entry.isIntersecting) {
      clock.classList.add('scale-animation');
      rating.classList.add('scale-animation');
      house.classList.add('scale-animation');
      calendar.classList.add('scale-animation');
	  return; // if we added the class, exit the function
    }

    // When we are not intersecting, remove the class
    clock.classList.remove('scale-animation');
    rating.classList.remove('scale-animation');
    house.classList.remove('scale-animation');
    calendar.classList.remove('scale-animation');
  });
});

observer.observe(document.querySelector('.services'));

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
