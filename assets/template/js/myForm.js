/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


jQuery(document).ready(function($){

	//Р·Р°РєСЂС‹С‚РёРµ РјРѕРґР°Р»СЊРЅРѕРіРѕ РѕРєРЅР°
	$('.close_msg, .overlay').click(function (){
		$('.popupfrpod, .msg_wrap, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.popupfrpod > .fofm textarea').val('');
		//СЃР±СЂРѕСЃ РІСЃРµС… РїРѕР»РµР№ С„РѕСЂРјС‹ РѕР±СЂР°РЅРѕР№ СЃРІСЏР·Рё
		$(':input','.lightform').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
	});

	//РїРѕРєР°Р· РјРѕРґР°Р»СЊРЅРѕРіРѕ РѕРєРЅР°
	$('.open_modalpod').click(function (e){
		e.preventDefault();
		$('.popupfrpod, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//Р°СЏРєСЃ С„РѕСЂРјР° РѕР±СЂР°С‚РЅРѕР№ СЃРІСЏР·Рё
	//РїСЂРѕРІРµСЂСЏРµС‚ РєР°РєРѕР№ РѕС‚РІРµС‚ Р±С‹Р» РїРѕР»СѓС‡РµРЅ
	//Рё РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ РѕС‚РІРµС‚Р°
	//РІС‹РІРѕРґРёС‚ РёРЅС„РѕСЂРјР°С†РёСЋ Рѕ СЃС‚Р°С‚СѓСЃРµ
	//РѕС‚РїСЂР°РІРєРё РїРёСЃСЊРјР°
	$(".lightform").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "/assets/template/php/myForm.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.msg_wrap, .overlay').css('opacity','1');
					$('.msg_wrap, .overlay').css('visibility','visible');
					$('.popupfrpod').css({'opacity':'0','visibility':'hidden'});
                    console.log('Р РµР·СѓР»СЊС‚Р°С‚:' + msg);

				}
				else {
					$('.msg_wrap .window').html('<h5>РћС€РёР±РєР°</h5><p>РЎРѕРѕР±С‰РµРЅРёРµ РЅРµ РѕС‚РїСЂР°РІР»РµРЅРѕ, СѓР±РµРґРёС‚РµСЃСЊ РІ РїСЂР°РІРёР»СЊРЅРѕСЃС‚Рё Р·Р°РїРѕР»РЅРµРЅРёРµ РїРѕР»РµР№</p>');
					$('.msg_wrap, .overlay').css('opacity','1');
					$('.msg_wrap, .overlay').css('visibility','visible');
					$('.popupfrpod').css({'opacity':'0','visibility':'hidden'});
                    console.log('Р РµР·СѓР»СЊС‚Р°С‚:' + msg);

				}
			}
		});
		return false;
	});

});