var shoe = "";





function openNav() {
    document.getElementById("myNav").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }

  function buy(url,name,shoeName){
    shoe = shoeName;
    var newWindow = window.open(url,name);


  }
  function display(){
    document.getElementById("Basket").value = shoe;
  }

  var myIndex = 0;
  
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
  }
