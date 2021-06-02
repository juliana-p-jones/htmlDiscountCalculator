
function calculate(){
    var productPrice = document.getElementById("priceinput").value;
    var discountAmt = document.getElementById("discountinput").value;
    var result = productPrice*((100-discountAmt)/100);
    document.getElementById("total").innerHTML= result;
    console.log(typeof productPrice);
    console.log(typeof discountAmt);
    console.log(typeof result);
}


