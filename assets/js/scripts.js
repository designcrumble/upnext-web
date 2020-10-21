/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("sidebar").style.marginLeft = "0px";
    document.getElementById("app").style.marginLeft = "0px";
    document.getElementById("menu-icon").src= "/assets/img/1/menu-close.svg";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("sidebar").style.marginLeft = "-100vw";
    document.getElementById("app").style.marginLeft = "0";
    document.getElementById("menu-icon").src= "/assets/img/1/menu.svg";
  }

    
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function toggleNav() {
      if (document.getElementById("sidebar").style.marginLeft === "-100vw") {
        openNav();
      }
      else {
        closeNav();
      }
  }