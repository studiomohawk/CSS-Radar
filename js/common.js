$(document).ready(function() {
	$('#menu').click(function() {
		$('#backnumber').slideToggle(500);
	});
	$('a.fancybox').fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
// END
});
