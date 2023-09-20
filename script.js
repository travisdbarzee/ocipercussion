function navDropdown() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  const form = document.getElementById("myForm")

  function openForm() {
    form.style.display = "block"
  }
  
  function closeForm() {
    form.style.display = "none";
  }