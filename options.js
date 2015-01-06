function save_options() {
    chrome.storage.sync.set({
        cool : document.getElementById('cool').checked,
        schedule: document.getElementById('schedule').checked,
        timesheet: document.getElementById('timesheet').checked,
        advising: document.getElementById('advising').checked

    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        cool: false,
        schedule: false,
        timesheet: false,
        advising: false
    }, function(items) {
        document.getElementById('cool').checked = items.cool;
        document.getElementById('schedule').checked = items.schedule;
        document.getElementById('timesheet').checked = items.timesheet;
        document.getElementById('advising').checked = items.advising;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
