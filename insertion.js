var head = document.head || document.documentElement;

//The url where this chrome extension's files live
var ext_url = chrome.extension.getURL('');

var script2 = document.createElement('script');
script2.textContent = 'var ext_url = "' + ext_url + '";';
head.appendChild(script2);

var script1 = document.createElement('script');
script1.src = ext_url + 'myneu.js';
head.appendChild(script1);

function makeBannerButton(image_url, link_url) {
    var a =
        "<a href='" + link_url + "'>" +
        "<img src='" + image_url + "'>" +
        "</a>";
    return a;
}


$(document).ready(function(){
    //Replace link images
    $("img[title='mail']").attr("src", "http://www.dailymobile.net/wp-content/uploads/2009/01/gmailicon9lpg.png");
    $("img[title='my files']").attr("src", "http://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/256/Folder-icon.png");
    $("img[title='NUPay']").attr("src", "http://emojipedia.org/wp-content/uploads/2014/04/128x128x1f4b0-google-android.png.pagespeed.ic.ZBTF2aFCY5.png");

    //Replace banner
    $("img[title='Portal Logo']").attr("src", ext_url + "images/Northeastern_Univ_Logotype.png");

    //Insert new exciting things into the header
    //Link to COOL
    var coolCell = makeBannerButton(
        ext_url + "images/cat.jpeg",
        "http://myneu.neu.edu/cp/ip/login?sys=pp&url=https://www.cool.neu.edu/students/mainmenu.aspx"
        );

    $("td[class='bg1']").append(coolCell);

    var googleCell = makeBannerButton(
        ext_url + "images/cat.jpeg",
        "http://google.com"
    );
    $("td[class='bg1']").append(googleCell);


})
