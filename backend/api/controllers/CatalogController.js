/**
 * CatalogController
 *
 * @description :: Server-side logic for managing Catalogs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get : function(req, res){
	  console.log('.................inside get in controller');
	  var dummyData = [
											{
                    	"sku": "WI132MA05ZWOINDFAS",
                    	"title": "Navy Blue Printed Slim Fit Casual Shirt",
                    	"image": "Wills-Lifestyle-Navy-Blue-Printed-Slim-Fit-Casual-Shirt-7219-4944972-1",
                    	"url": "Wills-Lifestyle-Navy-Blue-Printed-Slim-Fit-Casual-Shirt-2794494.html",
                    	"price": 1999,
                    	"packQty": 1,
                    	"simples": [{
                    		"sku": "WI132MA05ZWOINDFAS-10467721",
                    		"size": {
                    			"type": "apm",
                    			"value": "42"
                    		}
                    	}, {
                    		"sku": "WI132MA05ZWOINDFAS-10465218",
                    		"size": {
                    			"type": "apm",
                    			"value": "44"
                    		}
                    	}, {
                    		"sku": "WI132MA05ZWOINDFAS-10465223",
                    		"size": {
                    			"type": "apm",
                    			"value": "40"
                    		}
                    	}],
                    	"brand": "Wills Lifestyle",
                    	"discount": 35,
                    	"specialPrice": 1300,
                    	"tags": [{
                    		"type": "color",
                    		"params": {
                    			"name": "colorFamily",
                    			"text": "Navy Blue"
                    		}
                    	}],
                    	"idCatalogConfig": 2794494,
                    	"StockedinSimple": null
                    }, {
                    	"sku": "WI132MA05ZWOINDFAS",
                    	"title": "Navy Blue Printed Slim Fit Casual Shirt",
                    	"image": "Wills-Lifestyle-Navy-Blue-Printed-Slim-Fit-Casual-Shirt-7219-4944972-1",
                    	"url": "Wills-Lifestyle-Navy-Blue-Printed-Slim-Fit-Casual-Shirt-2794494.html",
                    	"price": 1999,
                    	"packQty": 1,
                    	"simples": [{
                    		"sku": "WI132MA05ZWOINDFAS-10467721",
                    		"size": {
                    			"type": "apm",
                    			"value": "42"
                    		}
                    	}, {
                    		"sku": "WI132MA05ZWOINDFAS-10465218",
                    		"size": {
                    			"type": "apm",
                    			"value": "44"
                    		}
                    	}, {
                    		"sku": "WI132MA05ZWOINDFAS-10465223",
                    		"size": {
                    			"type": "apm",
                    			"value": "40"
                    		}
                    	}],
                    	"brand": "Wills Lifestyle",
                    	"discount": 35,
                    	"specialPrice": 1300,
                    	"tags": [{
                    		"type": "color",
                    		"params": {
                    			"name": "colorFamily",
                    			"text": "Navy Blue"
                    		}
                    	}],
                    	"idCatalogConfig": 2794494,
                    	"StockedinSimple": null
                    },
										{
										"sku": "WI132MA05ZWOINDFAS",
										"title": "Navy Blue Printed Slim Fit Casual Shirt",
										"image": "Wills-Lifestyle-Navy-Blue-Printed-Slim-Fit-Casual-Shirt-7219-4944972-1",
										"url": "Wills-Lifestyle-Navy-Blue-Printed-Slim-Fit-Casual-Shirt-2794494.html",
										"price": 1999,
										"packQty": 1,
										"simples": [{
											"sku": "WI132MA05ZWOINDFAS-10467721",
											"size": {
												"type": "apm",
												"value": "42"
											}
										}, {
											"sku": "WI132MA05ZWOINDFAS-10465218",
											"size": {
												"type": "apm",
												"value": "44"
											}
										}, {
											"sku": "WI132MA05ZWOINDFAS-10465223",
											"size": {
												"type": "apm",
												"value": "40"
											}
										}],
										"brand": "Wills Lifestyle",
										"discount": 35,
										"specialPrice": 1300,
										"tags": [{
											"type": "color",
											"params": {
												"name": "colorFamily",
												"text": "Navy Blue"
											}
										}],
										"idCatalogConfig": 2794494,
										"StockedinSimple": null
									},
									{
									"sku": "WI132MA05ZWOINDFAS",
									"title": "Navy Blue Printed Slim Fit Casual Shirt",
									"image": "Wills-Lifestyle-Navy-Blue-Printed-Slim-Fit-Casual-Shirt-7219-4944972-1",
									"url": "Wills-Lifestyle-Navy-Blue-Printed-Slim-Fit-Casual-Shirt-2794494.html",
									"price": 1999,
									"packQty": 1,
									"simples": [{
										"sku": "WI132MA05ZWOINDFAS-10467721",
										"size": {
											"type": "apm",
											"value": "42"
										}
									}, {
										"sku": "WI132MA05ZWOINDFAS-10465218",
										"size": {
											"type": "apm",
											"value": "44"
										}
									}, {
										"sku": "WI132MA05ZWOINDFAS-10465223",
										"size": {
											"type": "apm",
											"value": "40"
										}
									}],
									"brand": "Wills Lifestyle",
									"discount": 35,
									"specialPrice": 1300,
									"tags": [{
										"type": "color",
										"params": {
											"name": "colorFamily",
											"text": "Navy Blue"
										}
									}],
									"idCatalogConfig": 2794494,
									"StockedinSimple": null
								}];
	  res.json({
	  'products': dummyData
	  })
	}
};
