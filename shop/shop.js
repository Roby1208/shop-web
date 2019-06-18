var shoe = "gggg";





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
