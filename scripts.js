let projectsArray = [
  {
    src: "images/pet-friendly.PNG",
    url: "https://github.com/LINDGRENBA/petFriendly",
    title: "PetFriendly",
    description: "An application to help take the stress out of traveling with your pets."
  },
  {
    src: "images/safer-spaces.PNG",
    url: "https://github.com/LINDGRENBA/SaferSpacesClient",
    title: "Safer Spaces",
    description: "A place to report incidences of harrasment in the community to help create safer spaces for all."
  },
  {
    src: "images/pig-dice.PNG",
    url: "https://lindgrenba.github.io/pig-dice/",
    title: "Pig Dice",
    description: "A fun game of chance created with object oriented JavaScript and jQuery."
  },
];

document.addEventListener("DOMContentLoaded", function(event) {
  let myprojects = document.getElementById("projects");
  
  projectsArray.forEach(project => {
    myprojects.innerHTML += 
    "<div class='project-item'><img class='project-img' src='" + project.src + "' alt=''><h4><a href='" + project.url + "' target='_blank' class='project-link'>" + project.title + "</a></h4><p class='project-para'>" + project.description +"</p></div>";
  });

});
