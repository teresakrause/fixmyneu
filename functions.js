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

