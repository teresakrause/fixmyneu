 $(document).ready(function(){
    //Replace link images
    $("img[title='mail']").attr("src", ext_url + "images/mail_inactive.png");
    $("img[title='my files']").attr("src", ext_url + "images/myfiles_inactive.png");
    $("img[title='NUPay']").attr("src", ext_url + "images/nupay_inactive.png");

    //Replace banner
    makeBookmarkBar();
    removeFocusButtons();
})