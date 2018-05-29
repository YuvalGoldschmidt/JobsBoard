var main=function(){
	$('.filter-choose-all').click(function(){
		if($(this).not('.active')){
			$('.filter-choose').removeClass('active');
			$('.filter-choose-all').addClass('active');
			$('.profile').show();
		}
	});

	$('.filter-choose').click(function(){
		$(this).toggleClass('active');
		var $filteractiveid = $(this).attr('id');
		$('div.profile'+'.'+$filteractiveid).toggle();
		
		if ($('.filter-choose-all').hasClass('active')) {
			$('.filter-choose-all').removeClass('active');			
			$('.profile').hide();
			$('div.profile'+'.'+$filteractiveid).show();
		}
		else if (($('.filter:has(div.active)').length)==($('.filter:has(div.filter-choose)').length) || ($('.filter:has(div.active)').length)==0) {
			$('div.filter-choose').removeClass('active');
			$('div.filter-choose-all').addClass('active');
			$('.profile').show();
		};
	});
};

$(document).ready(main);