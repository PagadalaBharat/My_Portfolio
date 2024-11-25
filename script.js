var typed = new Typed(".auto-type", {
  strings: ["Ravi Teja", "A Code Blooded Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
var techskills = document.getElementsByClassName("techskills")[0];
var softskills = document.getElementsByClassName("softskills")[0];
var education = document.getElementsByClassName("education")[0];
var accomplishments = document.getElementsByClassName("accomplishments")[0];



function techskillss() {
    softskills.style.display = "none";
    education.style.display = "none";
    accomplishments.style.display = "none";

  techskills.style.display = "block";

  techskills.style.display = "flex";
  techskills.style.flexDirection = "column";
  techskills.style.gap = "15px";

}
function softskillss() {
  techskills.style.display = "none";
  education.style.display = "none";
  accomplishments.style.display = "none";


    softskills.style.display = "block";
    softskills.style.display = "flex";
    softskills.style.flexDirection = "column";
    softskills.style.gap = "15px";
  
  }
  function educations() {
    techskills.style.display = "none";
    softskills.style.display = "none";
    accomplishments.style.display = "none";
    
      education.style.display = "block";
      education.style.display = "flex";
      education.style.flexDirection = "column";
      education.style.gap = "15px";
    
    }

function achievements(){
    techskills.style.display = "none";
    softskills.style.display = "none";
  education.style.display = "none";

    accomplishments.style.display = "block";
    accomplishments.style.display = "flex";
    accomplishments.style.flexDirection = "column";
    accomplishments.style.gap = "15px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbwIRJDGxhyUFNjFRpPYyluCtACXiEUyX8oLDugRVW1-qeDvL6eObKsCGl0pkfbmpmSu/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

// names=document.getElementById("name").value
// email=document.getElementById("email").value
// textarea=document.getElementById("textarea").value

// function submit(){
// names.innerHTML=""
// email.innerHTML=""
// textarea.innerHTML=""

//  }




