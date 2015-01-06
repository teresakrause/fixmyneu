function makeBookmarkBar() {
    chrome.storage.sync.get(
        {
            cool: false,
            schedule: false,
            timesheet: false,
            advising: false
        },
        function (settings) {
            $("img[title='Portal Logo']").replaceWith(
                "<table id='bookmark_bar'><tr>" +
                "<td><img src='"+ext_url+"images/myNEU_banner.png' /></td>"+
                + makeAllAwesomeButtons(settings) +
                "</tr></table>"
            );
        }
    )
}

//Make the Bookmarks buttons... now with settings!
function makeAllAwesomeButtons(settings) {
    console.log(settings);
    var result = "";
    if (settings.cool) {
        result = result + "<td>" +
        makeAwesomeButton(
            "suitcase",
            "http://myneu.neu.edu/cp/ip/login?sys=pp&url=https://www.cool.neu.edu/students/mainmenu.aspx"
        ) + "</td>";
        console.log("cool");
    }
    if (settings.schedule) {
        result += "<td>" +
        makeAwesomeButton(
            "calendar-o",
            "http://myneu.neu.edu/cp/ip/login?sys=sctssb&url=https://wl11gp.neu.edu/udcprod8/bwskfshd.P_CrseSchdDetl"
        ) + "</td>";
    }
    if (settings.timesheet) {
        result += "<td>" +
        makeAwesomeButton(
            "money",
            "https://studentemployment.neu.edu/Tsx_StudentJobs.aspx?fo=true"
        ) + "</td>";
    }
    if (settings.advising) {
        result += "<td>" +
        makeAwesomeButton(
            "graduation-cap",
            "http://myneu.neu.edu/cp/ip/login?sys=pp&url=https://www.cool.neu.edu/students/mainmenu.aspx"
        ) + "</td>";
    }
    return result;
}

//Make a button with a given image and link
function makeAwesomeButton(fontname, link_url) {
    var a =
        "<a href='" + link_url + "'>" +
        "<i class='fa fa-" + fontname + " fa-4x'></i>" +
        "</a>";
    return a;
}

//Remove minimize/ maximize buttons from each table
function removeFocusButtons() {
    $("img[src='/media/org/jasig/portal/layout/dlm/skins/classic/controls/focus.gif']").each(function(i, e) {
        e.parentElement.parentElement.remove();
    });
}

//Remove right corner tab?!
function removeCornerTab() {
    $("img[src='/wtlgifs/web_tab_corner_right.gif']").each(function (i, e) {
        e.remove();
    });
}