$(function(){

	$( ".input-type-text.date input" ).datepicker();
	
	var texts = $('.block-cabinet-tabs-cont.cont1>div'),
		tabs = $('.block-cabinet-tabs.tabs1 li').click(function() {
			var $this = $(this),
				index = $this.index();
			tabs.removeClass('active');
			$this.addClass('active');
			texts.removeClass('active');
			texts.eq(index).addClass('active');
		});

	var texts2 = $('.block-cabinet-tabs-cont.cont2>div'),
		tabs2 = $('.block-cabinet-tabs.tabs2 li').click(function() {
			var $this = $(this),
				index2 = $this.index();
			tabs2.removeClass('active');
			$this.addClass('active');
			texts2.removeClass('active');
			texts2.eq(index2).addClass('active');
		});



});