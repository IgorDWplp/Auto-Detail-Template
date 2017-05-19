/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function(){
	$('.curReplace').each(function(){
		var hr = $(this).attr('href');
		var title = $(this).attr('title');
		$(this).parent().find('.needReplace').attr('href', hr);
		$(this).parent().find('.needReplace').attr('title', title);
	});

	//С„РѕСЂРјР° РѕР±СЂР°С‚РЅРѕР№ СЃРІСЏР·Рё
	var cooka = getCookie('contactSendCooka');
	if (cooka == 'yes') {
		$('.thankyou').show();
		$('#contactForm').hide();
		setCookie('contactSendCooka', 'no', 'Mon, 01-Jan-2001 00:00:00 GMT', '/');
		ga('send', 'event', 'РќР°РїРёС€РёС‚Рµ РЅР°Рј', 'РћС‚РїСЂР°РІР»РµРЅР°');
		yaCounter11368324.reachGoal('writeus_send');
	}

	//РІС‹Р±РѕСЂ РіРѕСЂРѕРґР°
	var avt = getCookie('loc_avt');
	if (avt == '1') {
		setCookie('loc_avt', '0', "Mon, 01-Jan-2020 00:00:00 GMT", "/");
	}
	else {
		$('.region-selector .tooltip').hide();
	}

	//$(".region-selector dd a").click(function(){
//		var cit = $(this).text();
//		switch(cit){
//			case 'РњРѕСЃРєРІР°': setCookie('loc', 'Moscow', "Mon, 01-Jan-2020 00:00:00 GMT", "/"); break;
//			case 'Р•РєР°С‚РµСЂРёРЅР±СѓСЂРі': setCookie('loc', 'Ekaterinburg', "Mon, 01-Jan-2020 00:00:00 GMT", "/");break;
//			case 'Р’Р»Р°РґРёРІРѕСЃС‚РѕРє': setCookie('loc', 'Vladivostok', "Mon, 01-Jan-2020 00:00:00 GMT", "/"); break;
//		}
//	});

	//РѕР±СЂР°С‚РЅС‹Р№ Р·РІРѕРЅРѕРє
	$('#callback-form button[type="submit"]').bind('click', function(){
		var phone = $.trim($('#callback-form .phone-input').val());
		if (!phone) {
			$('#callback-form .phone-input').addClass('er-form');
		}
		else {
			$('#callback-form .phone-input').removeClass('er-form');
			$.ajax({
				url: 'ajax-callback/',
				dataType: 'html',
				type: 'POST',
				data: {phone:phone},
				beforeSend: function(){
					$("#callback-form").hide();
					$("#callback-load").show();
				},
				success: function(data) {
					$("#callback-load").hide();
					$("#callback-success").show();
					ga('send', 'event', 'РћР±СЂР°С‚РЅС‹Р№ Р·РІРѕРЅРѕРє', 'РћС‚РїСЂР°РІР»РµРЅР°');
					yaCounter11368324.reachGoal('callback_send');
				}
			});
		}
	});

	//Р·Р°РєР°Р· СѓСЃР»СѓРіРё
	var cooka = getCookie('zakazSendCooka');
	if (cooka == 'yes') {
		$('.open_order_form .btn').hide();
		$('.thankyou').show();
		setCookie('zakazSendCooka', 'no', 'Mon, 01-Jan-2001 00:00:00 GMT', '/');
		ga('send', 'event', 'Р—Р°РєР°Р·Р°С‚СЊ СѓСЃР»СѓРіСѓ', 'РћС‚РїСЂР°РІР»РµРЅР°');
		yaCounter11368324.reachGoal('zakaz_uslug_send');
	}

	
	$('.colMinus').click(function(){
		var curCol = parseInt($('#colGoods').val());
		if (curCol != 1) {
			curCol = curCol-1;
			$('#colGoods').val(curCol);
			$('.product-item input[name="shk-count"]').val(curCol);
		}
	});
	$('.colPlus').click(function(){
		var curCol = parseInt($('#colGoods').val());
		curCol = curCol+1;
		$('#colGoods').val(curCol);
		$('.product-item input[name="shk-count"]').val(curCol);
	});
	
	//Cart


	


	//РІС‹С…РѕРґ РёР· СЃРёСЃС‚РµРјС‹
	$('body').on('click', '.exit', function(){
		$.ajax({
			url: 'ajax-login/',
			dataType: 'text',
			data: {type: 'logout'},
			type: 'POST',
			success: function(data) {
				if (data == 'ok') {
					$('.loginBox').html('<div class="not-logged-in"><a class="open_login_form" href="javascript:void(0);">Р’С…РѕРґ</a><span class="sep">/</span><a href="/registration/">Р РµРіРёСЃС‚СЂР°С†РёСЏ</a></div>');
					alert('Р’С‹ РІС‹С€Р»Рё РёР· СЃРёСЃС‚РµРјС‹.');
				}
				else {
					alert('РџСЂРѕРёР·РѕС€Р»Р° РѕС€РёР±РєР°');
				}
			}
		});
		return false;
	});
	//РІС…РѕРґ
	$('#login-form button[type="submit"]').click(function(){
		$('#login-form .login-input, #login-form .pass-input').removeClass('er-form');
		var login = $.trim($('#login-form .login-input').val());
		var pas = $.trim($('#login-form .pass-input').val());
		if (!login || !pas) {
			!login ? $('#login-form .login-input').addClass('er-form') : '';
			!pas ? $('#login-form .pass-input').addClass('er-form') : '';
		}
		else {
			$.ajax({
				url: 'ajax-login/',
				dataType: 'text',
				data: {type: 'login', login:login, pas:pas},
				type: 'POST',
				success: function(data) {
					if (data == 'ok') {
						$("#login-popup").fadeOut(200);
						$("#login-overlay").animate({top:"-400px"},400);
						$('.loginBox').html('<div class="logged-in"><a href="/personal/">Р›РёС‡РЅС‹Р№ РєР°Р±РёРЅРµС‚</a><span class="sep">/</span><a class="exit" href="javascript:void(0);">Р’С‹С…РѕРґ</a></div>');
					}
					else {
						alert('Р›РѕРіРёРЅ/РїР°СЂРѕР»СЊ РЅРµРІРµСЂРЅС‹');
					}
				}
			});
		}
		return false;
	});
});