(function(d, s) {
	var js, fjs = d.getElementsByTagName(s)[0],
		load = function(url, id) {
			if (d.getElementById(id)) {
				return;
			}
			js = d.createElement(s);
			js.src = url;
			js.id = id;
			fjs.parentNode.insertBefore(js, fjs);
		};
	load('//connect.facebook.net/en_US/all.js#xfbml=1', 'fbjssdk');
	load('https://apis.google.com/js/plusone.js', 'gplus1js');
	load('//platform.twitter.com/widgets.js', 'tweetjs');
}(document, 'script'));
(function(doc) {
	var addEvent = 'addEventListener',
		type = 'gesturestart',
		qsa = 'querySelectorAll',
		scales = [1, 1],
		meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}
	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		fix();
		scales = [.25, 1.6];
		doc[addEvent](type, fix, true);
	}
}(document));
(function(win) {
	var doc = win.document;
	// If there's a hash, or addEventListener is undefined, stop here
	if (!location.hash && win.addEventListener) {
		//scroll to 1
		window.scrollTo(0, 1);
		var scrollTop = 1,
			getScrollTop = function() {
				return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
			},
			//reset to 0 on bodyready, if needed
			bodycheck = setInterval(function() {
				if (doc.body) {
					clearInterval(bodycheck);
					scrollTop = getScrollTop();
					win.scrollTo(0, scrollTop === 1 ? 0 : 1);
				}
			}, 15);
		win.addEventListener("load", function() {
			setTimeout(function() {
				//at load, if user hasn't scrolled more than 20 or so...
				if (getScrollTop() < 20) {
					//reset to hide addr bar at onload
					win.scrollTo(0, scrollTop === 1 ? 0 : 1);
				}
			}, 0);
		});
	}
})(this);