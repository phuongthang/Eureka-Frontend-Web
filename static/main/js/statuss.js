for (var i = 0; i < document.querySelectorAll('.checkstatus').length; i = i + 1) {
        if (document.querySelectorAll('.checkstatus')[i].textContent == "done") {
             document.querySelector('#status_'+i).style.color = "blue";
             document.querySelector('#status_'+i).fontWeight = "700";
            }
        if (document.querySelectorAll('.checkstatus')[i].textContent == "working") {
             document.querySelector('#status_'+i).style.color = "red"
             document.querySelector('#status_'+i).fontWeight = "700";
        }
    }