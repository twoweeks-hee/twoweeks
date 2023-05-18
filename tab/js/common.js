
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
	// TODO
	// 1.스르륵/똑딱
	// 2.불러오는 방식 바꾸기
	$(this).toggleClass('act')

	if($(this).hasClass('act')){
		if($(this).hasClass('.option1')){
			// 스르륵

		} else if($(this).hasClass('.option2')) {
			// 똑딱

		} else {
			// 기본
			$(this).next('.ac-cont').show()
		}
	} else {
		$(this).removeClass('act')
		if($(this).hasClass('.option1')){
			// 스르륵
			
		} else if ($(this).hasClass('.option2')){
			// 똑딱

		} else {
			// 기본
			$(this).next('.ac-cont').hide()
		}
	}
});