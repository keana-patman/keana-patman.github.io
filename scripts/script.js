//---------variables-----------
const projects = [
    {title: "Company Webiste", details: "Languages: Python, HTML <br> This project is a practice on learning the Django framework through creating a simple company website that includes a\
        home page, about page, and a products page. Uses templates to achieve this. <br> Built with the Django Frameowrk.", linkText: "View Code on GitHub", href: "https://github.com/keana-patman/company_website"},
    {title: "Blog Page", details: "Languages: Python, HTML <br> This project is a practice on learning the Django framework. This time I created a blog page and practiced\
      creating separate blog pages through get_absolute_url. The project was further updated with class-based views and now supports the addition/editing/deletion of posts.\
      It also now includes a user and signup/login system. <br> Built with the Django Framework.", linkText: "View Code in GitHub", href: "https://github.com/keana-patman/blog"},
    // {title: "Living World Simulation", details: "Languages: Java <br> This project is a simulated environment where different creatures interact with the world around them. Features life cycle, reproduction, feeding, and death.\
    //     Collaboration with other classmates. Features a theme from The Dark Crystal. <br> Built with Object Oriented Programming and JFrame.", linkText: "View Code in GitHub", href: "https://github.com/UM-CS/project-4-the-dark-crystal-simulation"},
    // {title: "Website Emulation Practice", details: "Languages: HTML, CSS, JavaScript <br> This project is an emmulation of a website to further learn and understand the capabilities of Web Development.\
    //     Website mimics the Applebee's home page and does not have working links. <br> Built with Flexbox and simple CSS.", linkText: "View Code in GitHub", href: "https://github.com/keana-patman/patman-csci181-p1"},
];

let modal = document.querySelector("#project-modal");
let modalTitle = document.querySelector("#modal-title");
let modalDetails = document.querySelector("#modal-text");
let modalLink = document.querySelector("#modal-link");
let modalClose = document.querySelector("#close-button");

let cards = document.querySelectorAll(".project-card");

//----------functions-----------
function openModalByIndex(index) {
  const project = projects[index];
  if (!project) return;

  modalTitle.textContent = project.title;
  modalDetails.innerHTML = project.details;
  modalLink.textContent = project.linkText;
  modalLink.href = project.href;

  modal.showModal();
  modal.focus();

  document.body.style.overflow = "hidden";
}

function onCardClicked(event) {
  const clicked_card = event.currentTarget;
  const index = Number(clicked_card.dataset.index);
  openModalByIndex(index);
}

function closeModal(){
    modal.close();
}    

//--------------event listeners--------------
for(const card of cards){
    card.addEventListener("click", onCardClicked);
}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("close", function () {
  document.body.style.overflow = "";
});