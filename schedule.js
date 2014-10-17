$(document).ready(function(){

    $('#term_id').val("201510");
    console.log("201510");

    //Remove right corner tab?!
    $("img[src='/wtlgifs/web_tab_corner_right.gif']").each(function(i, e) {
        e.remove();
    });

})
