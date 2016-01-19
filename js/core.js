$( document ).ready(function() {
    $('.nav > li').each(function(index, element) {
		$(this).append('<span class="bordeBajo"></span>');
		$(this).hover(function(){
			$(this).find('.bordeBajo').css({'display':'block'});
			},function(){
			$(this).find('.bordeBajo').css({'display':'none'});
		})
        
    });
	
		$('.home').hover(function(){
				$(this).find('.homeOff').css({'opacity':'0'});
				
			},function(){
				$(this).find('.homeOff').css({'opacity':'1'});
		})
		
		$('.navbar-toggle').click(function(){
			if($(this).hasClass('collapsed')){
				$('.menuPrinc').css({'bottom':'0px', 'right':'0px' ,'overflow-y':'scroll'});
				}else{
				$('.menuPrinc').css({'bottom':'auto', 'right':'auto' ,'overflow-y':'visible'});
				}
			});
	
});