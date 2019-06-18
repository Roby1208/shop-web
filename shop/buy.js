function buy{
    var firstname = document.getElementById(Firstname).value;
    var lastname = document.getElementById(Lastname).value;
    var basket = document.getElementById(Basket).value;
    var address = document.getElementById(Address).value;
    var country = document.getElementById(Country).value;
    var extra = document.getElementById(Extra).value;
    alert("Hell0 " + firstname + lastname + ", " + "<br>" + basket + "is beeing send to " + address + country + "<br>" + "with" + extra)
}