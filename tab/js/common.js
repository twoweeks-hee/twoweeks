
$(function(){
	// $(선택자).on('click',function(){
	// 	$(this) = $(선택자)
	// 이 방식으로 하면 선택자의 요소가 css가 display:none 일 경우 또는
	// 선택자가 팝업 안에 선택자도 선택자로 못 불러와서 에러가 난다.
	// })
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

	
// TODO.2
// 불러오는 방식 바꾸기
// 비동기


$(document).on("click",".ac-ttl",function() {
	// $(document).on('click', '선택자', function(){
	//	그래서 document 형식으로 불러오면 비동기적으로 만들어진 선택자 문제가 없어짐.
	// })

	$(this).toggleClass('act')

	if($(this).hasClass('act')){
		if($(this).parents().hasClass('option1')){
			// 스르륵
			$(this).next('.ac-cont').stop().slideDown()
		} else {
			// 기본
			$(this).next('.ac-cont').show()
		}
	} else {
		$(this).removeClass('act')
		if($(this).parents().hasClass('option1')){
			// 스르륵
			$(this).next('.ac-cont').stop().slideUp()
		} else {
			// 기본
			$(this).next('.ac-cont').hide()
		}
	};

});

// TODO.3
// 옵션주는 방법을 클래스가 아닌 html 태그에다가 객체나 배열을 넣는식으로 변경 

$(function(){
	// this 세팅
	// 스코프 관련?
	// function으로 하면 변수가 그 안에 가두는것 처엄 그 안에서 시작한다.
	// () => {} 이 형태는 가두지 않아서 그 부모의 영역을 가리킴
	$('.thisChk1').click(function(){
		setTimeout(function(){
			// this = window
			console.log(this)
		})
	});
	$('.thisChk2').click(function(){
		setTimeout(() => {
			// this = 선택자
			console.log(this)
		});
	});
	$('.thisChk3').click(() =>{
		setTimeout(() => {
			// this = #document
			console.log(this)
		});
	});
})