var main=function(){
	function filtersSame(filtersObject){
		last_value = Object.values(filtersObject)[1];
		for(var i = 2; i < Object.values(filtersObject).length; i++){
				var this_value = Object.values(filtersObject)[i];
				if(last_value != this_value) return false;
				last_value = this_value;
		};
		return true;
	};

	var app = angular.module("myApp", []);
	app.controller('myCtrl', function($scope, $timeout){
		$scope.filters = {
			'all': true,
			'webDeveloper': false,
			'graphicDesigner': false,
			'marketing': false,
			'video': false,
			'iosDeveloper': false,
			'socialMedia': false,
			'androidDeveloper': false
		};

		$('.filter-choose').change(function(){
			var $this = $(this);
			$timeout(function(){
				var this_filter = $this.attr('id');
				if(this_filter == 'all'){
					if($scope.filters.all){
						Object.keys($scope.filters).slice(1).forEach(function(element){
							$scope.filters[element] = false;
						});
					}
					else{
						$scope.filters.all = true;
					}
				}
				else{
					$scope.filters.all = false;
					if(filtersSame($scope.filters)){
						$scope.filters.all = true;
						Object.keys($scope.filters).slice(1).forEach(function(element){
							$scope.filters[element] = false;
						});
					}
				}
			}, 1);
		});
	});
};

$(document).ready(main);