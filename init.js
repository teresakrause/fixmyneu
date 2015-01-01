//Make a button with a given image and link
function makeAwesomeButton(fontname, link_url) {
    var a =
        "<a href='" + link_url + "'>" +
        "<i class='fa fa-" + fontname + " fa-4x'></i>" +
        "</a>";
    return a;
}

$(document).ready(function(){
    //Replace link images
    $("img[title='mail']").attr("src", "http://www.dailymobile.net/wp-content/uploads/2009/01/gmailicon9lpg.png");
    $("img[title='my files']").attr("src", "http://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/256/Folder-icon.png");
    $("img[title='NUPay']").attr("src", "http://emojipedia.org/wp-content/uploads/2014/04/128x128x1f4b0-google-android.png.pagespeed.ic.ZBTF2aFCY5.png");

    //Replace banner
    $("img[title='Portal Logo']").attr("src", ext_url + "images/myNEU_banner.png");

    //Insert new exciting things into the header
    //Link to COOL
    var coolCell = makeAwesomeButton(
        "suitcase",
        "http://myneu.neu.edu/cp/ip/login?sys=pp&url=https://www.cool.neu.edu/students/mainmenu.aspx"
    );

    $("td[class='bg1']").append(coolCell);

    // //Link to schedule
    var scheduleCell = makeAwesomeButton(
        "calendar-o",
        "http://myneu.neu.edu/cp/ip/login?sys=sctssb&url=https://wl11gp.neu.edu/udcprod8/bwskfshd.P_CrseSchdDetl"
    );
    $("td[class='bg1']").append(scheduleCell);

    // //Link to Timesheet
    var timesheetCell = makeAwesomeButton(
        "money",
        "https://studentemployment.neu.edu/Tsx_StudentJobs.aspx?fo=true"
    );
    $("td[class='bg1']").append(timesheetCell);


    //Remove minimize/ maximize buttons from each table
    $("img[src='/media/org/jasig/portal/layout/dlm/skins/classic/controls/focus.gif']").each(function(i, e) {
        e.parentElement.parentElement.remove();
    });
})