function navDropdown() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  var y = document.getElementById('dropdown-btn')

  y.addEventListener("toggle", revealMore)
 
  function revealMore() {
 y.classList.toggle('visible')
  }