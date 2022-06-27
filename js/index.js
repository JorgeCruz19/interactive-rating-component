const card = document.querySelectorAll(".card");
const ratings = document.querySelectorAll(".card-rating");
const btnSubmit = document.querySelector(".card-btn")

let ratingValue = "";


/* Active / Inactive value */

ratings.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    ratings.forEach(element =>{
      element.classList.remove("is-active");
    })
    ratingValue = e.target.textContent;
    e.target.classList.add("is-active");
  })
})


/* Template */



/* Send rating */

btnSubmit.addEventListener("click", () => {
  console.log(ratingValue);
})