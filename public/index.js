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

    //req.send(reqBody)
    //console.log("== reqBody2:", reqBody)
    //console.log("== typeof(reqBody2):", typeof(reqBody))
    
    req.addEventListener('load', function (event) {
      console.log("1apples");
      /*document.addEventListener("DOMContentLoaded", function(event) {*/
        /*window.onload = function(){*/
        console.log("2apples");
      if (event.target.status === 200) {
        var cartitemTemplate = Handlebars.templates.cartitem;
        var newcartTemplatHTML = cartitemTemplate(cartItem);
        console.log("3apples");
        var cartTemplatContainer = document.querySelector(".cart-item-container");
        cartTemplatContainer.insertAdjacentHTML('beforeend', newcartTemplatHTML);
      } else {
        alert("Failed to add item to cart; error:\n\n" + event.target.response)
      }
    //}
    }); /*});*/
    
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
/*
  var itemElemsCollection = document.getElementsByClassName('item');
  for (var i = 0; i < itemElemsCollection.length; i++) {
    var addToCartButton = document.getElementById('submit-button');
    if (addToCartButton)
    {
        addToCartButton.addEventListener('click', handleSubmitButtonClick)
    }
  }*/

  var buttons = document.querySelectorAll(".submit-button");

  for (i=0; i < buttons.length; i++) {
      if (document.addEventListener) {
          buttons[i].addEventListener("click", handleSubmitButtonClick);
      } else {
          buttons[i].attachEvent("onclick", handleSubmitButtonClick);
      };
  };
    /*var addToCartButton = document.getElementById('submit-button');
    if (addToCartButton)
    {
    //if ()
        addToCartButton.addEventListener('click', handleSubmitButtonClick)
    //console.log("submit clicked");
    }*/

  });