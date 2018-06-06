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
	app.controller('myCtrl', function($scope, $timeout){
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

		$scope.profiles = [
			{
				'name': 'Yuval Goldschmidt',
				'job': 'webDeveloper',
				'image': 'profile-picture.jpg',
				'facebook': '#',
				'linkedin': '#'
			},
			{
				'name': 'Ron',
				'job': 'graphicDesigner',
				'image': 'profile-picture.jpg',
				'facebook': '#',
				'linkedin': '#'
			},
			{
				'name': 'DJ Song',
				'job': 'video',
				'image': 'profile-picture.jpg',
				'facebook': '#',
				'linkedin': '#'
			},
			{
				'name': 'Dana',
				'job': 'marketing',
				'image': 'profile-picture.jpg',
				'facebook': '#',
				'linkedin': '#'
			},
			{
				'name': 'Omer',
				'job': 'iosDeveloper',
				'image': 'profile-picture.jpg',
				'facebook': '#',
				'linkedin': '#'
			},
			{
				'name': 'Yoni',
				'job': 'socialMedia',
				'image': 'profile-picture.jpg',
				'facebook': '#',
				'linkedin': '#'
			},
			{
				'name': 'Ofek',
				'job': 'webDeveloper',
				'image': 'profile-picture.jpg',
				'facebook': '#',
				'linkedin': '#'
			},
			{
				'name': 'Asher Cohen',
				'job': 'androidDeveloper',
				'image': 'profile-picture.jpg',
				'facebook': '#',
				'linkedin': '#'
			},
			{
				'name': 'Tomer Gad',
				'job': 'graphicDesigner',
				'image': 'profile-picture.jpg',
				'facebook': '#',
				'linkedin': '#'
			},
		];

		/*Add profile when form submited*/
		$('.register-form').submit(function(){
			var newProfile = {
				'name': $('#name-input').val(),
				'job': $('#profession-select').find('option:selected').attr('id'),
				'image': $('#image-input').val(),
				'facebook': $('#facebook-input').val(),
				'linkedin': $('#linkedin-input').val()
			}
			$scope.profiles.push(newProfile);
			$(this).trigger('reset');
			alert("Your Profile Was Added");
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