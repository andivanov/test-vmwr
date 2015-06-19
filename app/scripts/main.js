'use strict';

$('.section__vmType input').on('click', function(){
	$('.section__form__actions').find('a.btn.btn--disabled').removeClass('btn--disabled');
});

$('#joinDomainYes').click(function() {           
    if($(this).is(':checked'))  {
        $(this).parent().removeClass('switch-off');
    }
});

$('#joinDomainNo').click(function() {           
    if($(this).is(':checked'))  {
        $(this).parent().addClass('switch-off');
    }
});

