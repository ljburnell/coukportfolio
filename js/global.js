/*
visible
*/
jQuery(function(){
	jQuery(document).on('change', 'input[data-visible]', function(){
		var input = jQuery(this);
		var selector = input.data('visible');
		var target = jQuery(selector);
		if (input.is(':checked')) {
			target.show();
		} else {
			target.hide();
		}
	});
	jQuery('input[data-visible]').trigger('change');
});

/*
button
*/
(function(){
	jQuery('span.button').each(function(){
		var background_color = jQuery(this).css('background-color');
		var color = jQuery(this).css('color');
		jQuery(this).css({'background-color':background_color, 'color':color});
	});
})();

/*
tab
*/
(function(){
	jQuery('a[data-toggle="tab"]').on('show.bs.tab', function(e){
		jQuery(e.target).parent('li').addClass('selected');
		jQuery(e.relatedTarget).parent('li').removeClass('selected');
	});
})();

/*
tooltip
*/
(function(){
	if (jQuery().tooltip) {
		jQuery('[data-hover="tooltip"]').css('cursor', 'help').tooltip();
	}
})();

/*
magnific popup
*/
(function(){
	if (jQuery().magnificPopup) {
		
		var galleries = [];
		jQuery('[data-gallery]').each(function(){
			var i = galleries.length;
			var gallery = jQuery(this).data('gallery');
			if (jQuery.inArray(gallery, galleries) > -1) return;
			galleries[i] = gallery;
			jQuery('[data-gallery="'+gallery+'"]').magnificPopup({type:'image', gallery:{enabled:true} });
		});
		
		jQuery('[data-magnific="iframe"]').each(function(){
			jQuery(this).magnificPopup({type:'iframe'});
		});
		
	}
})();

/*
toggle block
*/
(function(){
	jQuery(document).on('click', 'a[data-toggle="block"]', function(){
		var selector = jQuery(this).attr('href');
		var target = jQuery(selector);
		var toggle = jQuery(this).find('i');
		if (target.is(':visible')) {
			target.hide();
			toggle.html('v');
		} else {
			target.show();
			toggle.html('^');
		}
		return false;
	});
})();

/*
loading
*/
(function(){
	var url = document.URL;
	var domain = document.domain;
	var phpself = url.replace(domain, '').replace('http://', '').replace('https://', '');
	var target = jQuery('a[data-loading="1"]').filter('a[href="' + phpself + '"]');
	
	if (target.length) {
		var scroll_top = target.first().offset().top - 200;
		if (scroll_top < 0) {
			scroll_top = 0;
		}
		jQuery('html, body').animate({ scrollTop:scroll_top }, 0);
	}
	
	jQuery(document).on('click', 'a[data-loading="1"]', function(){
		var scroll_top = jQuery(this).offset().top - 200;
		jQuery('html, body').animate({ scrollTop:scroll_top }, 500);
		jQuery('body').append('<div class="modal" style="display:block"><div class="modal-dialog"><div class="modal-content"><div class="loader"></div></div></div></div>');
		jQuery('body').append('<div class="modal-backdrop in"></div>');
	});
})();

/*
prompt confirm
*/
(function(){
	var button = jQuery('a[data-confirm]');
	button.click(function(){
		var msg = jQuery(this).data('confirm')
		if (msg == 1) {
			msg = 'Are you sure?';
		}
		return confirm(msg);
	});
})();

/*
responsive menu
*/
(function(){
	function updateHeader(menu){
		var header = menu.find('.menu-toggle');
		var title = menu.find('.menu-collapse li.selected > a').data('title');
		if (!title) title = menu.find('.menu-collapse li.selected > a').text();
		if (title) header.text(title);
	}
	var menus = jQuery('.menu-respond');
	var buttons = jQuery('.menu-toggle');
	buttons.click(function(){
		var menu = jQuery(this).next('.menu-collapse');
		menu.slideToggle();
		return false;
	});
	menus.each(function(){
		var menu = jQuery(this);
		var menu_links = menu.find('.menu-collapse a');
		updateHeader(menu);
		menu_links.click(function(){
			if (jQuery(this).attr('href').substr(0,1) != '#') return;
			var header = menu.find('.menu-toggle');
			var collapse = menu.find('.menu-collapse');
			var title = jQuery(this).data('title');
			if (!title) title = jQuery(this).text();
			if (title) header.text(title);
			collapse.hide();
		});
	});
})();
