(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cartitem'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"cartItem-container\" id=\"cartItem-container\">\r\n\r\n    <div class=\"cart-img-container\" >\r\n        <img class=\"cart-item-img\" id=\"cart-item-img\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"img") || (depth0 != null ? lookupProperty(depth0,"img") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data,"loc":{"start":{"line":4,"column":59},"end":{"line":4,"column":66}}}) : helper)))
    + "\"/>\r\n    </div>\r\n    \r\n    <div class=\"cart-description\" >\r\n        <p class=\"cart-item-name\" id=\"cart-item-title\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":9,"column":21}}}) : helper)))
    + "\r\n        </p>\r\n    </div>\r\n\r\n    <div>              \r\n        <p class=\"cart-item-price-desc\" id=\"cat-item-price-desc\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"priceDescription") || (depth0 != null ? lookupProperty(depth0,"priceDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"priceDescription","hash":{},"data":data,"loc":{"start":{"line":15,"column":12},"end":{"line":15,"column":32}}}) : helper)))
    + "\r\n        </p>\r\n    </div>\r\n\r\n    <div>\r\n        <p class=\"cart-item-price\" id=\"cat-item-price\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":21,"column":12},"end":{"line":21,"column":21}}}) : helper)))
    + "\r\n        </p>\r\n    </div>\r\n\r\n    <div>\r\n        <p class=\"cart-item-price-uint\" id=\"cat-item-price-unit\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"priceUnit") || (depth0 != null ? lookupProperty(depth0,"priceUnit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"priceUnit","hash":{},"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":25}}}) : helper)))
    + "\r\n        </p>\r\n    </div>\r\n\r\n    <div>\r\n        <p class=\"cart-item-quantity\" id=\"cart-item-quantity\"></p>\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"amount") || (depth0 != null ? lookupProperty(depth0,"amount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amount","hash":{},"data":data,"loc":{"start":{"line":33,"column":8},"end":{"line":33,"column":18}}}) : helper)))
    + "\r\n    </div>\r\n            <!-- <label for=\"item-quantity\">adjust quantity</label> -->\r\n            <select id=\"item-quantity\" class=\"quantity\">\r\n              <option>1</option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n            </select>\r\n            <!-- <label for=\"item-img\"></label> -->\r\n            <button type=\"submit\" value=\"Submit\" id=\"submit-button\" class=\"submit-button\">adjust quantity </button>\r\n            <button> delete item</button>\r\n</section>";
},"useData":true});
})();