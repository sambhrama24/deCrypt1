// Start Of Homepage's JavaScript
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// });

//End of Homepage's JavaScript
// searching coins
function searching() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("cryptocoins-list");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


// To toggle between the display of crypto list ,which shows the entire list only when the search bar is clicked else it is hidden

document.addEventListener("click", (event) => {


  if (event.path[1].className === "search") {
    document.getElementById("cryptocoins-list").style.display = "grid"

  }

  else {

    document.getElementById("cryptocoins-list").style.display = "none"
  }

})