var main=function(){
	//Function that check if all filters are same
	function filtersSame(filtersObject){
		last_value = Object.values(filtersObject)[1];
		for(var i = 2; i < Object.values(filtersObject).length; i++){
				var this_value = Object.values(filtersObject)[i];
				if(last_value != this_value) return false;
				last_value = this_value;
		};
		return true;
	};

	//Angular settings
	var app = angular.module("myApp", []);
	app.controller('myCtrl', function($scope, $timeout, $http){
		//Filters object
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

		//Function that change the checkboxes filters
		$scope.filterFunction = function(id){
			$timeout(function(){
				var this_filter = id;
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
		};

		$http.get('/profiles.json').then(function(response){
			$scope.profiles = JSON.parse(JSON.stringify(response.data));
		});

		/*Update profiles variable when form submited*/
		$('.register-form').submit(function(){
			$scope.profiles = JSON.parse(JSON.stringify(response.data));
		});
	});

	//Get the name of filter and return it beautiful
	app.filter('filtersFormat', function(){
		return function(filterName){
			var c = filterName[0].toUpperCase(), name = "";
			name += c;
			for(var i=1; i<filterName.length; i++){
				c = filterName[i];
				if(c == c.toUpperCase()){
					name += " ";
				}
				name += c;
			}
			return name;
		}
	});

	/*Open the register screen*/
	$('.register-button').click(function(){
		$('.register-screen').show();
		$('body').css('overflow-y', 'hidden');
	});

	/*Close the register screen*/
	$('.register-screen').click(function(evt){
		if ($(evt.target).closest('.register-window').length) return;
		else {
			$(this).hide();
			$('body').css('overflow-y', 'scroll');
		}
	});

	$('.exit-register').click(function(){
		$('.register-screen').hide();
		$('body').css('overflow-y', 'scroll');
	});
};

$(document).ready(main);