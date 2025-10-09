//template_uv8okwi
//service_hkb1lup
//NkSsWG7rq8T-jrtSf

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

// Mobile touch handling for project cards
document.addEventListener('DOMContentLoaded', function() {
  const projects = document.querySelectorAll('.project__wrapper');
  
  projects.forEach(project => {
    let isActive = false;
    
    // Handle touch events for mobile
    project.addEventListener('touchstart', function(e) {
      // If this project is already active, let the touch pass through
      if (isActive) {
        return;
      }
      
      // Prevent the default behavior and stop propagation
      e.preventDefault();
      e.stopPropagation();
      
      // Close all other projects
      projects.forEach(p => {
        if (p !== project) {
          p.classList.remove('project--active');
        }
      });
      
      // Toggle this project
      project.classList.add('project--active');
      isActive = true;
    });
    
    // Handle clicks on links within the project description
    const links = project.querySelectorAll('.project__description--link');
    links.forEach(link => {
      link.addEventListener('touchstart', function(e) {
        e.stopPropagation();
      });
    });
  });
  
  // Close active project when touching outside
  document.addEventListener('touchstart', function(e) {
    if (!e.target.closest('.project__wrapper')) {
      projects.forEach(project => {
        project.classList.remove('project--active');
      });
    }
  });
});

// function moveBackground(event) {
//   const shapes = document.querySelectorAll(".shape");
//   const x = event.clientX * scaleFactor;
//   const y = event.clientY * scaleFactor;

//   for (let i = 0; i < shapes.length; ++i) {
//     const isOdd = i % 2 !== 0;
//     const boolInt = isOdd ? -1 :1
//     shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
//   }
// }

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_hkb1lup",
      "template_uv8okwi",
      event.target,
      "NkSsWG7rq8T-jrtSf"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on dontecarter269@gmail.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}