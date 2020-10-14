let projectsArray = [
  {
    src: "images/pig-dice.PNG",
    title: "Pig Dice",
    description: "A fun game of chance created with object oriented JavaScript and jQuery."
  },
  {
    url: "",
    title: "Safer Spaces",
    description: "A place to report incidences of harrasment in the community to help create safer spaces for all."
  },
  {
    url: "",
    title: "PetFriendly",
    description: "An application to help take the stress out of traveling with your pets."
  },
]

document.addEventListener("DOMContentLoaded", function(event) {
  let myprojects = document.getElementById("projects");
  
  projectsArray.forEach(project => {
    myprojects.innerHTML += 
    "<div class='project-item'><img class='project-img' src='" + project.src + "' alt=''><h4><a class='project-link'>" + project.title + "</a></h4><p class='project-para'>" + project.description +"</p></div>";
  });

});
