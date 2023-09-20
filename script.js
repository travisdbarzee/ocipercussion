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

  function scrollFunction() {
    let e = document.getElementById("audition-section");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  }

  const form = document.getElementById("myForm")

  function openForm() {
    form.style.display = "block"
  }
  
  function closeForm() {
    form.style.display = "none";
  }

  function formSubmitted() {
    alert("Thank you!")
  }