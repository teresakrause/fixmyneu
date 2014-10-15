//Inserts scripts into page source
var ext_url = chrome.extension.getURL(''); //The url where this chrome extension's files live
var s = document.createElement('script');
s.src = ext_url + "myneu.js";
s.onload = function() {
    this.parentNode.removeChild(this);
};
//(document.head||document.documentElement).appendChild(jq);
(document.head||document.documentElement).appendChild(s);

$(document).ready(function(){
    $("img[title='mail']").attr("src", "http://www.dailymobile.net/wp-content/uploads/2009/01/gmailicon9lpg.png");
    $("img[title='my files']").attr("src", "http://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/256/Folder-icon.png");
    $("img[title='NUPay']").attr("src", "http://emojipedia.org/wp-content/uploads/2014/04/128x128x1f4b0-google-android.png.pagespeed.ic.ZBTF2aFCY5.png");
})
