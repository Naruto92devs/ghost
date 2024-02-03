let header = document.querySelector("header")
window.onscroll = (e)=> {
   if (window.pageYOffset > 200) {
      header.style.backgroundColor= "#242424";
    } else {
      header.style.backgroundColor = "transparent";
    }
 }

const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".center-menu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});

const month = document.querySelector(".month");
const week = document.querySelector(".week");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

month.addEventListener("click", () => {
  month.classList.add("active2");
  week.classList.remove("active2");
  monthly.classList.add("active3");
  weekly.classList.remove("active3");
});

week.addEventListener("click", () => {
  week.classList.add("active2");
  month.classList.remove("active2");
  weekly.classList.add("active3");
  monthly.classList.remove("active3");
});


//--------------------------------- scroller start

const sp1 = document.querySelector(".rt1");
const sp2 = document.querySelector(".rt2");
const sp3 = document.querySelector(".rt3");
const sp4 = document.querySelector(".rt4");
const sp5 = document.querySelector(".rt5");
const tip1 = document.querySelector(".tip1");
const tip2 = document.querySelector(".tip2");
const tip3 = document.querySelector(".tip3");
const tip4 = document.querySelector(".tip4");
const tip5 = document.querySelector(".tip5");

sp1.addEventListener('mouseenter', () => {
  tip1.classList.add("active");
});

sp1.addEventListener('mouseleave', () => {
  tip1.classList.remove("active");
});

sp2.addEventListener('mouseenter', () => {
  tip2.classList.add("active");
});

sp2.addEventListener('mouseleave', () => {
  tip2.classList.remove("active");
});

sp3.addEventListener('mouseenter', () => {
  tip3.classList.add("active");
});

sp3.addEventListener('mouseleave', () => {
  tip3.classList.remove("active");
});

sp4.addEventListener('mouseenter', () => {
  tip4.classList.add("active");
});

sp4.addEventListener('mouseleave', () => {
  tip4.classList.remove("active");
});

sp5.addEventListener('mouseenter', () => {
  tip5.classList.add("active");
});

sp5.addEventListener('mouseleave', () => {
  tip5.classList.remove("active");
});


const navbarToggle2 = document.querySelector(".navbar-toggle2");
const navbarLinks2 = document.querySelector(".more2");

navbarToggle2.addEventListener("click", () => {
  navbarLinks2.classList.toggle("active2");
});

//--------------------------------- scroller End


// Get a reference to the toggle elements
const toggleElements = document.getElementsByClassName('navbar-toggle');

// Loop through the toggle elements and add a click event listener to each one
for (let i = 0; i < toggleElements.length; i++) {
  // Store the original inner HTML for each element
  const originalInnerHTML = toggleElements[i].innerHTML;

  // Add a click event listener to toggle the inner HTML for each element
  toggleElements[i].addEventListener('click', function() {
    // Check if the current inner HTML matches the original inner HTML
    if (toggleElements[i].innerHTML === originalInnerHTML) {
      // If it does, set a different inner HTML
      toggleElements[i].innerHTML = 'See less';
    } else {
      // If it doesn't, set the original inner HTML
      toggleElements[i].innerHTML = originalInnerHTML;
    }
  });
}

//   const toggleElement1 = document.getElementById('navbar-toggle1');

//   // Store the original inner HTML
//   const originalInnerHTML1 = toggleElement.innerHTML;

//   // Add a click event listener to toggle the inner HTML
//   toggleElement1.addEventListener('click', function() {
//     // Check if the current inner HTML matches the original inner HTML
//     if (toggleElement1.innerHTML === originalInnerHTML1) {
//       // If it does, set a different inner HTML
//       toggleElement1.innerHTML = 'See less';
//     } else {
//       // If it doesn't, set the original inner HTML
//       toggleElement1.innerHTML = originalInnerHTML1;
//     }
//   });

const navbarToggle3 = document.querySelector(".navbar-toggle3");
const navbarLinks3 = document.querySelector(".more3");

navbarToggle3.addEventListener("click", () => {
  navbarLinks3.classList.toggle("active3");
});
  
//     const toggleElement2 = document.getElementById('navbar-toggle2');
  
//     // Store the original inner HTML
//     const originalInnerHTML2 = toggleElement.innerHTML;
  
//     // Add a click event listener to toggle the inner HTML
//     toggleElement2.addEventListener('click', function() {
//       // Check if the current inner HTML matches the original inner HTML
//       if (toggleElement2.innerHTML === originalInnerHTML2) {
//         // If it does, set a different inner HTML
//         toggleElement2.innerHTML = 'See less';
//       } else {
//         // If it doesn't, set the original inner HTML
//         toggleElement2.innerHTML = originalInnerHTML2;
//       }
//     });


    const navbarToggle4 = document.querySelector(".navbar-toggle4");
  const navbarLinks4 = document.querySelector(".more4");
  
  navbarToggle4.addEventListener("click", () => {
    navbarLinks4.classList.toggle("active4");
  });
  
//     const toggleElement3 = document.getElementById('navbar-toggle3');
  
//     // Store the original inner HTML
//     const originalInnerHTML3 = toggleElement.innerHTML;
  
//     // Add a click event listener to toggle the inner HTML
//     toggleElement3.addEventListener('click', function() {
//       // Check if the current inner HTML matches the original inner HTML
//       if (toggleElement3.innerHTML === originalInnerHTML3) {
//         // If it does, set a different inner HTML
//         toggleElement3.innerHTML = 'See less';
//       } else {
//         // If it doesn't, set the original inner HTML
//         toggleElement3.innerHTML = originalInnerHTML3;
//       }
//     });