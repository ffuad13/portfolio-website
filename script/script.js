$(document).ready(() => {
  $(window).scroll(() => {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  $(".menu-btn").click(() => {
    $(".menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});

//project slide=============
let projectIndex = 1;
let timer = null;
showProject(projectIndex);

function plus(n) {
  clearTimeout(timer);
  showProject((projectIndex += n));
}

function currentProject(n) {
  clearTimeout(timer);
  showProject((projectIndex = n));
}

function showProject(n) {
  let i;
  let project = document.getElementsByClassName("myProject");
  let dots = document.getElementsByClassName("dot");
  if (n == undefined) {
    n = ++projectIndex;
  }
  if (n > project.length) {
    projectIndex = 1;
  }
  if (n < 1) {
    projectIndex = project.length;
  }
  for (i = 0; i < project.length; i++) {
    project[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  project[projectIndex - 1].style.display = "block";
  dots[projectIndex - 1].className += " active";
  timer = setTimeout(showProject, 3000);
}

//dark-mode function=============
const theme = document.getElementsByClassName("theme")[0];

document.getElementById("toggler").checked = false;
document.getElementById("toggler").addEventListener("change", (event) => {
  if (event.target.checked) {
    theme.setAttribute("data-theme", "dark");
  } else {
    theme.removeAttribute("data-theme");
  }
});
