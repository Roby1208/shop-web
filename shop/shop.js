





function openNav() {
    document.getElementById("myNav").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }

  var myArray = [];

        function add(shoeName) {
            if (shoeName === "") {
                alert("Please enter a value");
            } else {
                myArray.push(shoeName);
            }

            document.getElementById("Basket").innerHTML = myArray;
        }

        function buy(){
            var Firstname = document.getElementById('Firstname').value;
            var Lastname = document.getElementById('Lastname').value;
            var Basket = document.getElementById('Basket').value;
            var Address = document.getElementById('Address').value;
            var Country = document.getElementById('Country').value;

            alert(Firstname + " " + Lastname + Basket + " will be delivered to " + Address + Country);
        }

        var myIndex = 0;
        carousel();
        
        function carousel() {
          var i;
          var x = document.getElementsByClassName("slideShow");
          for (i = 0; i < x.length; i++) {
             x[i].style.display = "none";
          }
          myIndex++;
          if (myIndex > x.length) {myIndex = 1}
          x[myIndex-1].style.display = "block";
          setTimeout(carousel, 3000);
        }







 // function buy(url,name,shoeName){
 //   shoe = shoeName;
  //  var newWindow = window.open(url,name);
//  }
 // function display(){
  //  document.getElementById("Basket").value = shoe;
 // }
