const listOfCardElements = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

listOfCardElements.forEach((cardElement, index) => {
  cardElement.addEventListener("click", () => {
    const scrollLeft = index * listOfCardElements[0].offsetWidth;
    cardContainer.scrollTo({ left: scrollLeft, behavior: "smooth" });
  });
});



  // Get the current year
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  // Find the element with the id "currentYear"
  let currentYearElement = document.getElementById("currentYear");

  // Update the content of the element with the current year
  currentYearElement.textContent = currentYear;


  // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}