var search=document.querySelector(".search-hotel");
var pop=document.querySelector(".pop-up-search");

search.addEventListener ("click", function (evt) {evt.preventDefault();
  pop.classList.toggle("pop-up-search-show");
});
