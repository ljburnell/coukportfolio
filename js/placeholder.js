//v0.5
jQuery(document).ready(function(){
	
	jQuery('input[placeholder], textarea[placeholder]').each(function(){ 
       
        var input = jQuery(this);       
       
        if (jQuery(input).val() == '') {
			jQuery(input).val(input.attr('placeholder')).css('color', '#ccc');
		}
		
        jQuery(input).focus(function(){
             if (input.val() == input.attr('placeholder')) {
                 input.val('').css('color', '');
             }
        });
       
        jQuery(input).blur(function(){
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.val(input.attr('placeholder')).css('color', '#ccc');
            }
        });
		
    });
               
	jQuery('form').submit(function(){
		
		var inputs = jQuery(this).find('input[placeholder], textarea[placeholder]');
		
		inputs.each(function(){
			var input = jQuery(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		});

	});
	
});
