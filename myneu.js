$(document).ready(function(){

var ext_url = chrome.extension.getURL('');
var cat_image_url = ext_url + "images/cat.jpeg";
var s = document.createElement('script');
var jq = document.createElement('script');
s.src = ext_url + "myneu.js";
jq.src = ext_url + "jquery-2.1.1.min.js"
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(jq);
(document.head||document.documentElement).appendChild(s);

//jjn = cat_image_url;
//jjf = cat_image_url;

$("img[title='mail']").attr("src", cat_image_url);

$("img").parent("a").mouseenter(function() {
    $(this).attr("src", cat_image_url);
    console.log("mouseenter");
});
//$("img").parent("a").off("onmouseover");
$("img").parent("a").mouseleave(function() {
    $(this).attr("src", cat_image_url);
    console.log("mouseleave");
})
//$("img").parent("a").off("onmouseout");

});
