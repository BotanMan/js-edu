(function () {
	"use strict";

	angular
		.module('app')
		.provider('itemsApi', itemsApi);

	function itemsApi() {
		var _apiUrl = '';
		var _items = [];

		this.setApiUrl = function (apiUrl) {
			_apiUrl = apiUrl;
		};

		this.loadItems = function () {
			return jQuery.ajax({
				url: _apiUrl,
				cache: true,
				async: false,
				success: function(result) {
					_items = result.items;
				}
			});
		}

		this.$get = ['$http', provider];

		function provider($http) {
			this.getItems = function () {
				return _items;
			}

			this.getItem = function(id) {
				return _items.filter(function(item) {
					return id == item.id;
				})[0];
			}

			return this;
		}
	}
})();
