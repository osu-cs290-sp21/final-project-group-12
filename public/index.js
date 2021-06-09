/*
 * This function gets the Person ID from the current URL.  For example, if the
 * current URL path is  "/people/luke", this function will return "luke".
 */
function getPersonIdFromURL() {
  var path = window.location.pathname;
  var pathParts = path.split('/');
  if (pathParts[1] === "category") {
      //var smth = pathParts[2];
    //console.log('returned not null for the path:', smth)
    return pathParts[2];
  } else {
    console.log('returned null for the path')
    return null;
  }
}

function handleSubmitButtonClick() {

  var img = document.getElementById('item-img').src;
  var title = document.getElementById('item-title').innerText;
  var priceDescription = document.getElementById('item-price-desc').innerText;
  var price = document.getElementById('item-price-desc').getAttribute("name");
  var amount = document.getElementById('item-quantity').value;
  var priceUnit = document.getElementById('item-title').getAttribute("name");

    var req = new XMLHttpRequest()
    var reqUrl = '/category/' + getPersonIdFromURL() /*+ '/addItem'*/
    console.log("== reqUrl:", reqUrl)
    req.open('POST', reqUrl /*, true*/)

    var cartItem = {
      img: img,
      title: title,
	    priceDescription: priceDescription,
	    price: price,
	    amount: amount,
      priceUnit: priceUnit,
    }
    var reqBody = JSON.stringify(cartItem)
    console.log("== reqBody:", reqBody)
    console.log("== typeof(reqBody):", typeof(reqBody))

    req.setRequestHeader('Content-Type', 'application/json')
   
    req.send(reqBody)

  }

  /*var addToCartButton = document.getElementById('submit-button');
  if (addToCartButton)
  {
  addToCartButton.addEventListener('click', handleSubmitButtonClick);
  console.log("submit clicked");
  }*/
  ////
var allItems = []









  window.addEventListener('DOMContentLoaded', function () {

   // var checkOutButton = document.getElementById("checkout-button");
    //checkOutButton.onclick = handleSubmitButtonClick();

/*
  var itemElemsCollection = document.getElementsByClassName('item');
  for (var i = 0; i < itemElemsCollection.length; i++) {
    var addToCartButton = document.getElementById('submit-button');
    if (addToCartButton)
    {
        addToCartButton.addEventListener('click', handleSubmitButtonClick)
    }
  */

    var buttons = document.querySelectorAll(".submit-button");
  var i=0;
  for ( i; i < buttons.length; i++) {
           // if (onclick.buttons[i]){
      buttons[i].onclick = handleSubmitButtonClick;
        
     /* buttons[i].addEventListener("click", function()
      {
        var img = document.querySelectorAll('.item-img').src;
        console.log(img);
        var title = document.querySelectorAll('.item-name').innerText;
        var priceDescription = document.querySelectorAll('.item-price-desc').innerText;
        var priceo = document.querySelectorAll('.item-price-desc');
        //var price = priceo.getAttribute("name");
        var amount = document.querySelectorAll('.quantity').value;
        var priceUnito = document.querySelectorAll('.item-title');
        //var priceUnit = priceUnito.getAttribute("name")

        var imgi = img[i];
        var titlei = title[i];
        var priceDescriptioni = priceDescription[i];
        var priceUnit = priceo[i].getAttribute("name");
        var amounti = amount[i];
        var priceUniti= priceUnito[i].getAttribute("name");
        

        var req = new XMLHttpRequest()
        var reqUrl = '/category/' + getPersonIdFromURL() 
        console.log("== reqUrl:", reqUrl)
        req.open('POST', reqUrl )
    
        var cartItem = {
          img: imgi,
          title: titlei,
          priceDescription: priceDescriptioni,
          price: pricei,
          amount: amounti,
          priceUnit: priceUniti,
        }
        var reqBody = JSON.stringify(cartItem)
        console.log("== reqBody:", reqBody)
        console.log("== typeof(reqBody):", typeof(reqBody))
    
        req.setRequestHeader('Content-Type', 'application/json')
       
        req.send(reqBody)
      }, false);
    }*/
    ////////////////////////

        //buttons[i].onclick = handleSubmitButtonClick;}
        //buttons[i].preventDefault(); }
    /*if (document.addEventListener) {
        buttons[i].addEventListener("click", handleSubmitButtonClick);

    } else {
       buttons[i].attachEvent("onclick", handleSubmitButtonClick);
    };
}*/
    /*var addToCartButton = document.getElementById('submit-button');
    if (addToCartButton)
    {
    //if ()
        addToCartButton.addEventListener('click', handleSubmitButtonClick)
    //console.log("submit clicked");
    }*/


  }})
