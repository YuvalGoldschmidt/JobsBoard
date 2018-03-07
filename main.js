var main=function(){
	$('.people').hover(function(){
		$(this).find('div.hideit').slideToggle(200);
		$(this).css('margin-bottom', '0');
	}, function(){
		$(this).find('div.hideit').slideToggle(200);
	});

	$('.filter-choose-all').click(function(){
		if($(this).not('.active')){
			$('.filter-choose').removeClass('active');
			$('.filter-choose-all').addClass('active');
			$('.people').show();
		}
	});

	$('.filter-choose').click(function(){
		$(this).toggleClass('active');
		var $filteractiveid = $(this).attr('id');
		$('div.people'+'.'+$filteractiveid).toggle();
		
		if ($('.filter-choose-all').hasClass('active')) {
			$('.filter-choose-all').removeClass('active');			
			$('.people').hide();
			$('div.people'+'.'+$filteractiveid).show();
		}
		else if (($('.filter:has(div.active)').length)==($('.filter:has(div.filter-choose)').length) || ($('.filter:has(div.active)').length)==0) {
			$('div.filter-choose').removeClass('active');
			$('div.filter-choose-all').addClass('active');
			$('.people').show();
		};
	});
};

$(document).ready(main);

/*to do:
1. if all active nothing else active(done)
2. if somthing else active all isnt active(done)
3. CSS: the people's div is move if other people hover
4. people working with the filters(done)     4.1. people hiden in the last filter hiden in "all"(done)
*/