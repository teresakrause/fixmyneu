$(document).ready(function(){
    //Replace link images
    $("img[title='mail']").attr("src", ext_url + "images/mail_inactive.png");
    $("img[title='my files']").attr("src", ext_url + "images/myfiles_inactive.png");
    $("img[title='NUPay']").attr("src", ext_url + "images/nupay_inactive.png");

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

    removeFocusButtons();
})