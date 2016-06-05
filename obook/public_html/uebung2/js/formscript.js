(function () {

    var geoPattern = /[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
    var emailPattern = /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:obook?\.)+(?:[A-Z]{2}|eu)\b/i;
    var appointmentidPattern = /(?:\b|-)([0-9]{1}|100)\b/;


    window.addEventListener("load", init, false);

    function init() {
        document.getElementById('createsubmit').addEventListener('click', function () {
            validateForm('create');
        });

        document.getElementById('findsubmit').addEventListener('click', function () {
            validateForm('find');
        });

        document.getElementById('updatesubmit').addEventListener('click', function () {
            validateForm('update');
        });

        document.getElementById('deletesubmit').addEventListener('click', function () {
            validateForm('delete');
        });

        document.getElementById('creategenerate').addEventListener('click', function () {
            generateData('create');
        });

        document.getElementById('findgenerate').addEventListener('click', function () {
            generateData('find');
        });

        document.getElementById('updategenerate').addEventListener('click', function () {
            generateData('update');
        });

        document.getElementById('deletegenerate').addEventListener('click', function () {
            generateData('delete');
        });
    }


    function initializeMap() {
        var map = {
            center: new google.maps.LatLng(52.30, 13.25),
            zoom: 5
        };
        new google.maps.Map(document.getElementById("googleMaps"), map);
    }
    google.maps.event.addDomListener(window, 'load', initializeMap);

    function validateForm(a) {
        document.getElementById('errors').style.cssText = "font-size:14px; color:red;";
        switch (a) {
            case 'create' :
                validateCreate(a);
                break;
            case 'find' :
                validateFind(a);
                break;
            case 'update' :
                validateUpdate(a);
                break;
            case 'delete' :
                validateDelete(a);
                break;
            default:
                return false;
        }
    }

    function validateFind(a) {
        var appointmentid = document.forms[a]["appointmentid"].value;
        var email = document.forms[a]["email"].value;
        var geo = document.forms[a]["geo"].value;
        if (appointmentid !== "" && !appointmentidPattern.test(appointmentid)) {
            document.getElementById('errors').innerHTML = "Please use a correct Appointment ID.\nRange: 0 - 100";
            document.forms[a]["appointmentid"].style.borderColor = "red";
            return false;
        } else {
            document.getElementById('errors').innerHTML = "";
            document.forms[a]["appointmentid"].style.borderColor = "";
        }
        if (email !== "" && !emailPattern.test(email)) {
            document.getElementById('errors').innerHTML = "Email has to end with @obook.eu";
            document.forms[a]["email"].style.borderColor = "red";
            return false;
        } else {
            document.getElementById('errors').innerHTML = "";
            document.forms[a]["email"].style.borderColor = "";
        }
        if (geo !== "" && !geoPattern.test(geo)) {
            document.getElementById('errors').innerHTML = "Wrong coordinate format was used.\nPlease see following example: \n-50.21, +142.54";
            document.forms[a]["geo"].style.borderColor = "red";
            return false;
        } else {
            document.getElementById('errors').innerHTML = "";
            document.forms[a]["geo"].style.borderColor = "";
        }
        return(true);
    }

    function validateDelete(a) {
        var appointmentid = document.forms[a]["appointmentid"].value;
        var email = document.forms[a]["email"].value;
        if (appointmentid === "" || !appointmentidPattern.test(appointmentid)) {
            document.getElementById('errors').innerHTML = "Please use a correct Appointment ID.\nRange: 0 - 100";
            document.forms[a]["appointmentid"].style.borderColor = "red";
            return false;
        } else {
            document.forms[a]["appointmentid"].style.borderColor = "";
            document.getElementById('errors').innerHTML = "";
        }
        if (email === "") {
            document.getElementById('errors').innerHTML = "Email cannot be empty.";
            document.forms[a]["email"].style.borderColor = "red";
            return false;
        } else {
            document.getElementById('errors').innerHTML = "";
            document.forms[a]["email"].style.borderColor = "";
        }
        if (email !== "" && !(emailPattern.test(email))) {
            document.getElementById('errors').innerHTML = "Email has to end with @obook.eu";
            document.forms[a]["email"].style.borderColor = "red";
            return false;
        } else {
            document.getElementById('errors').innerHTML = "";
            document.forms[a]["email"].style.borderColor = "";
        }
        return(true);
    }

    function validateUpdate(a) {
        var appointmentid = document.forms[a]["appointmentid"].value;
        var geo = document.forms[a]["geo"].value;
        if (appointmentid === "" || !appointmentidPattern.test(appointmentid)) {
            document.getElementById('errors').innerHTML = "Please use a correct Appointment ID.\nRange: 0 - 100";
            document.forms[a]["appointmentid"].style.borderColor = "red";
            return false;
        } else {
            document.getElementById('errors').innerHTML = "";
            document.forms[a]["appointmentid"].style.borderColor = "";
        }
        if (geo !== "" && !geoPattern.test(geo)) {
            document.getElementById('errors').innerHTML = "Wrong coordinate format was used.\nPlease see following example: \n-50.21, +142.54";
            document.forms[a]["geo"].style.borderColor = "red";
            return false;
        } else {
            document.getElementById('errors').innerHTML = "";
            document.forms[a]["geo"].style.borderColor = "";
        }
        return(true);
    }

    function validateCreate(a) {
        var subject = document.forms[a]["subject"].value;
        var geo = document.forms[a]["geo"].value;
        var email = document.forms[a]["email"].value;
        var date = document.forms[a]["date"].value;
        var time = document.forms[a]["time"].value;
        if (subject === "") {
            document.getElementById('errors').innerHTML = "Subject can't be empty.";
            document.forms[a]["subject"].style.borderColor = "red";
            return false;
        } else {
            document.getElementById('errors').innerHTML = "";
            document.forms[a]["subject"].style.borderColor = "";
        }
        if (geo !== "" && !geoPattern.test(geo)) {
            document.getElementById('errors').innerHTML = "Wrong coordinate format was used.\nPlease see following example: \n-50.21, +142.54";
            document.forms[a]["geo"].style.borderColor = "red";
            return false;
        } else {
            document.getElementById('errors').innerHTML = "";
            document.forms[a]["geo"].style.borderColor = "";
        }
        if (email === "") {
            document.getElementById('errors').innerHTML = "Email can't be empty.";
            document.forms[a]["email"].style.borderColor = "red";
            return false;
        } else {
            document.getElementById('errors').innerHTML = "";
            document.forms[a]["email"].style.borderColor = "";
        }
        if (email !== "" && !(emailPattern.test(email))) {
            document.getElementById('errors').innerHTML = "Email has to end with @obook.eu";
            document.forms[a]["email"].style.borderColor = "red";
            return false;
        } else {
            document.getElementById('errors').innerHTML = "";
            document.forms[a]["email"].style.borderColor = "";
        }
        if (date === "") {
            document.getElementById('errors').innerHTML = "Date can't be empty.";
            document.forms[a]["date"].style.borderColor = "red";
            return false;
        } else {
            document.getElementById('errors').innerHTML = "";
            document.forms[a]["date"].style.borderColor = "";
        }
        if (time === "") {
            document.getElementById('errors').innerHTML = "Time can't be empty.";
            document.forms[a]["time"].style.borderColor = "red";
            return false;
        } else {
            document.getElementById('errors').innerHTML = "";
            document.forms[a]["time"].style.borderColor = "";
        }
        return(true);
    }

    var subjects = ["Test Subject", "Meeting", "Bowling", "Essen", "", "Aufgabe3"];
    var geos = ["-50.21, +142.54", "ABC", "-50545435.21, +144523422.54", "-1, +1", "0, 0", "AB, CD"];
    var urls = ["http://www.obook.eu", "", "https://www.obook.eu", "www.obook.eu", "obook.eu", "obook"];
    var emails = ["ferhan@obook.eu", "thismustfail.eu", "ferhan123@obook.eu", "@obook.eu", "ferhan@kaplanseren.de", ""];
    var date = ["2017-01-01", "01-01-2017", "2020-13-35", "2017-01", ""];
    var time =  ["00:01", ":01", "00:", "5", "asd", "0001"];
    var appids = ["1", "100", "123abc123", "abc", "abv123", "123abc"];
    
    function generateData(a) {
        switch (a) {
            case 'create' :
                document.getElementById('createsubject').value = subjects[Math.floor(Math.random() * (6))];
                document.getElementById('creategeo').value = geos[Math.floor(Math.random() * (6))];
                document.getElementById('createurl').value = urls[Math.floor(Math.random() * (6))];
                document.getElementById('createemail').value = emails[Math.floor(Math.random() * (6))];
                document.getElementById('createdate').value = date[Math.floor(Math.random() * (6))];
                document.getElementById('createtime').value = time[Math.floor(Math.random() * (6))];
                break;
            case 'find':
                document.getElementById('findappointmentid').value = appids[Math.floor(Math.random() * (6))];
                document.getElementById('findsubject').value = subjects[Math.floor(Math.random() * (6))];
                document.getElementById('findgeo').value = geos[Math.floor(Math.random() * (6))];
                document.getElementById('findurl').value = urls[Math.floor(Math.random() * (6))];
                document.getElementById('findemail').value = emails[Math.floor(Math.random() * (6))];
                document.getElementById('finddate').value = date[Math.floor(Math.random() * (6))];
                document.getElementById('findtime').value = time[Math.floor(Math.random() * (6))];
                break;
            case 'update' :
                document.getElementById('updateappointmentid').value = appids[Math.floor(Math.random() * (6))];
                document.getElementById('updatesubject').value = subjects[Math.floor(Math.random() * (6))];
                document.getElementById('updategeo').value = geos[Math.floor(Math.random() * (6))];
                document.getElementById('updateurl').value = urls[Math.floor(Math.random() * (6))];
                document.getElementById('updatedate').value = date[Math.floor(Math.random() * (6))];
                document.getElementById('updatetime').value = time[Math.floor(Math.random() * (6))];
                break;
            case 'delete' :
                document.getElementById('deleteappointmentid').value = appids[Math.floor(Math.random() * (6))];
                document.getElementById('deleteemail').value = emails[Math.floor(Math.random() * (6))];
                break;
            default:
                return false;
        }
    }
})();