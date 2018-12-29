var search=document.querySelector(".search-hotel");
var pop=document.querySelector(".pop-up-search");
var form=document.querySelector(".hotel-search");
var checkdate=document.querySelector("#checkdate");
var checkout=document.querySelector("#checkout");

if (typeof(search) != "undefined" && search !=null){
search.addEventListener ("click", function (evt) {evt.preventDefault();
  pop.classList.toggle("pop-up-search-show");
});
}

document.addEventListener("DOMContentLoaded", function(){
  pop.classList.remove("no-js");
})


form.addEventListener("submit", function (evt) {
  if (!checkdate.value || !checkout.value) {
    evt.preventDefault();
    pop.classList.remove("modal-error");
    pop.offsetWidth = pop.offsetWidth;
    pop.classList.add("modal-error");
  } });