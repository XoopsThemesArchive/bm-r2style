// $Id: style.js,v 1.0 2005/07/19 16:38:25 cc-.-* nya~n Exp $

function changing(sClass) {
	document.getElementsByTagName('body')[0].className = sClass;
	setCookie('body', sClass, 365);
}

function setCookie(theName, theValue, theDay) {
	if ((theName != null) && (theValue != null)) {
		if (theDay != null) {
			theDay = eval(theDay);
			setDay = new Date();
			setDay.setTime(setDay.getTime() + (theDay * 1000 * 60 * 60 * 24));
			expDay = setDay.toGMTString();
		}
		document.cookie = theName + '=' + escape(theValue) + ';expires=' + expDay + ';path=/';
		return true;
	}
	return false;
}

function getCookie(theName) {
	theName += '=';
	var theCookie = document.cookie + ';';
	var start = theCookie.indexOf(theName);
	if (start != -1) {
		var end = theCookie.indexOf(';', start);
		return unescape(theCookie.substring(start + theName.length, end));
	}
	return false;
}
