function makeBookmarkBar() {
    chrome.storage.sync.get(
        {settings: []},
        function (storage) {
            var bookmarkBar =
                "<table id='bookmark_bar'>" +
                    "<tr>"
                        +
                        "<td><img src='"+ext_url+"images/myNEU_banner.png' /></td>"
                        +
                        makeAllAwesomeButtons(storage.settings)
                        +
                    "</tr>"
                    +
                "</table>";
            $("img[title='Portal Logo']").replaceWith(bookmarkBar);
        }
    )
}

//Make the Bookmarks buttons... now with settings!
function makeAllAwesomeButtons(settings) {
    var result = "";
    for (i in settings) {
        var bookmark = settings[i];
        result += "<td>" + makeAwesomeButton(bookmark.icon, bookmark.url) + "</td>";
    }
    return result;
}

//Make a button with a given font-awesome tag and link
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

function setDefaultOption(selector, default_option) {
    $(selector).val(default_option);
}