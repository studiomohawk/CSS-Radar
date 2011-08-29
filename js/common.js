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

(function() {
  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
  po.src = 'https://apis.google.com/js/plusone.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
(function(){
  var twitterWidgets = document.createElement('script');
  twitterWidgets.type = 'text/javascript';
  twitterWidgets.async = true;
  twitterWidgets.src = 'http://platform.twitter.com/widgets.js';
  document.getElementsByTagName('head')[0].appendChild(twitterWidgets);
})();
