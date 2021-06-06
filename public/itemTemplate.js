(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['item'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"item\">\r\n    <div class=\"img-container\">\r\n        <img class=\"item-img\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"photo") || (depth0 != null ? lookupProperty(depth0,"photo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photo","hash":{},"data":data,"loc":{"start":{"line":3,"column":35},"end":{"line":3,"column":44}}}) : helper)))
    + "\"/>\r\n    </div>\r\n    \r\n    <div class=\"description\">\r\n        <p class=\"item-name\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":20}}}) : helper)))
    + "\r\n        </p>\r\n                    \r\n        <p class=\"item-price\">\r\n            Price: "
    + alias4(((helper = (helper = lookupProperty(helpers,"priceDescription") || (depth0 != null ? lookupProperty(depth0,"priceDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"priceDescription","hash":{},"data":data,"loc":{"start":{"line":12,"column":19},"end":{"line":12,"column":39}}}) : helper)))
    + "\r\n        </p>\r\n    </div>\r\n\r\n</section>";
},"useData":true});
})();