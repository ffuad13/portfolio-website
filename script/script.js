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

// project slide =============
var projectIndex = 1;
showProject(projectIndex);

function plus(n) {
  showProject((projectIndex += n));
}

function currentProject(n) {
  showProject((projectIndex = n));
}

function showProject(n) {
  var i;
  var project = document.getElementsByClassName("myProject");
  var dots = document.getElementsByClassName("dot");
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
}
