function save_bookmarks_options() {
    var settingsArray = [];
    if (document.getElementById('cool').checked) {
        settingsArray.push(
            {
                id : "cool",
                url: "http://myneu.neu.edu/cp/ip/login?sys=pp&url=https://www.cool.neu.edu/students/mainmenu.aspx",
                icon: "suitcase"
            }
        );
    }
    if (document.getElementById('schedule').checked) {
        settingsArray.push(
            {
                id : "schedule",
                url: "http://myneu.neu.edu/cp/ip/login?sys=sctssb&url=https://wl11gp.neu.edu/udcprod8/bwskfshd.P_CrseSchdDetl",
                icon: "calendar-o"
            }
        );
    }
    if (document.getElementById('timesheet').checked) {
        settingsArray.push(
            {
                id : "timesheet",
                url: "https://studentemployment.neu.edu/Tsx_StudentJobs.aspx?fo=true",
                icon: "money"
            }
        );
    }
    if (document.getElementById('advising').checked) {
        settingsArray.push(
            {
                id : "advising",
                url: "https://prod-web.neu.edu/wasapp/public/calendar/booking/app/secure/main.action?",
                icon: "graduation-cap"
            }
        );
    }
    if (document.getElementById('email').checked) {
        settingsArray.push(
            {
                id : "email",
                url: "https://mail.google.com/",
                icon: "envelope-o"
            }
        );
    }
    if (document.getElementById('files').checked) {
        settingsArray.push(
            {
                id : "files",
                url: "https://myfiles.neu.edu/xythoswfs/webview/fileManager.action?x=y&shareLogin=false&stk=698B6A654DF1F49",
                icon: "folder-o"
            }
        );
    }
    chrome.storage.sync.set({ settings: settingsArray}, function() {
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
        settings: []
    }, function(storage) {
        for (i in storage.settings) {
            var bookmark = storage.settings[i];
            document.getElementById(bookmark.id).checked = true;
        }
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('bookmarks_save').addEventListener('click',
    save_bookmarks_options);
