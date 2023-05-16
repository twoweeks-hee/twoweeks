
$(function(){
	$('.tab-ui ul > li > a').bind('click focusin',function (){});
		$('.tab-ui ul > li').each(function(i){this.i=i}).click(function(){
		var idx = $(this).index();
		var tabWrap = $(this).parents('.tabWrap')
		var tabArea = tabWrap.find('.tabArea-ui')
		var tab_ui =  tabWrap.find('.tab-ui ul li')
		$(tab_ui).removeClass('on');
		$(tabArea).hide();
		$(tabArea.eq(idx)).show();
		$(this).addClass('on');
		// console.log(tabArea)
	});
});
$(document).on("click",".ac-ttl",function() {
	$(this).toggleClass('act')
	if($(this).hasClass('act')){
		$(this).next('.ac-cont').show()
	} else {
		$(this).removeClass('act')
		$(this).next('.ac-cont').hide()
	}
});