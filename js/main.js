$(document).ready(function(){
	
//데스크탑 종이학 롤링
	old=0;
	num=0;

	function paper(){
		num++;
		if(num>1){
			num=0;
		}

	$(".section6 ul li").eq(old).stop(true,true).fadeOut(1000);
	$(".section6 ul li").eq(num).stop(true,true).fadeIn(1000,function(){
		old=num;
	});
	}

	setInterval(paper,3000);



	$(".gnb_list").css({"right":"-300px"}); //처음위치
	$(".close").hide();

	//메뉴버튼
	$(".mo_menu_btn").click(function(){
		$(".gnb_list").stop(true,true).animate({"right":0});
		$(".back").stop(true,true).fadeIn(); //메뉴 뒤 검정배경 등장
		$(".close").show();
	});
	//닫기버튼
	$(".gnb .close").click(function(){
		$(".gnb_list").stop(true,true).animate({"right":"-300px"});
		$(".back").stop(true,true).fadeOut();
		$(".close").hide();
	});


});