(function () {

    var geoPattern = /^[+-]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[+-]?(([1-9]?\d|1[0-7]\d)(\.\d+)?|180(\.0+)?)$/;
    var emailPattern = /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:obook?\.)+(?:[A-Z]{2}|eu)\b/i;
    var appointmentidPattern = /^[1-9][0-9]?$|^100$/;


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
        var subject = document.forms[a]["subject"].value;
        var date = document.forms[a]["date"].value;
        var time = document.forms[a]["time"].value;
        var url = document.forms[a]["url"].value;
        var boo = true;
        if (appointmentid !== "" && !appointmentidPattern.test(appointmentid)) {
            document.getElementById('findappointmentiderrortext').innerHTML = "Please use a correct Appointment ID.<br>Range: 1 - 100";
            document.getElementById('findappointmentiderrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
            document.forms[a]["appointmentid"].style.borderColor = "#D75A4A";
            boo = false;
        } else if (appointmentid === "") {
            document.getElementById('findappointmentiderrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
            document.getElementById('findappointmentiderrortext').innerHTML = "";
            document.forms[a]["appointmentid"].style.borderColor = "";
        } else {
            document.getElementById('findappointmentiderrortext').innerHTML = "";
            document.getElementById('findappointmentiderrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
            document.forms[a]["appointmentid"].style.borderColor = "";
        }
        if (email !== "" && !emailPattern.test(email)) {
            document.getElementById('findemailerrortext').innerHTML = "Email has to end with @obook.eu";
            document.getElementById('findemailerrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
            document.forms[a]["email"].style.borderColor = "#D75A4A";
            boo = false;
        } else if (email === "") {
            document.getElementById('findemailerrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
            document.getElementById('findemailerrortext').innerHTML = "";
            document.forms[a]["email"].style.borderColor = "";
        } else {
            document.getElementById('findemailerrortext').innerHTML = "";
            document.getElementById('findemailerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
            document.forms[a]["email"].style.borderColor = "";
        }
        if (geo !== "" && !geoPattern.test(geo)) {
            document.getElementById('findgeoerrortext').innerHTML = "Wrong coordinate format was used.<br>Please see following example: <br>-50.21, +142.54";
            document.getElementById('findgeoerrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
            document.forms[a]["geo"].style.borderColor = "#D75A4A";
            boo = false;
        } else if (geo === "") {
            document.getElementById('findgeoerrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
            document.getElementById('findgeoerrortext').innerHTML = "";
            document.forms[a]["geo"].style.borderColor = "";
        } else {
            document.getElementById('findgeoerrortext').innerHTML = "";
            document.getElementById('findgeoerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
            document.forms[a]["geo"].style.borderColor = "";
        }
        if (url !== "") {
            document.getElementById('findurlerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
        } else {
            document.getElementById('findurlerrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
        }
        if (date !== "") {
            document.getElementById('finddateerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
        } else {
            document.getElementById('finddateerrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
        }
        if (time !== "") {
            document.getElementById('findtimeerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
        } else {
            document.getElementById('findtimeerrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
        }
        if (subject !== "") {
            document.getElementById('findtimeerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
        } else {
            document.getElementById('findtimeerrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
        }
        return boo;
    }

    function validateDelete(a) {
        var appointmentid = document.forms[a]["appointmentid"].value;
        var email = document.forms[a]["email"].value;
        var boo = true;
        if (appointmentid === "" || !appointmentidPattern.test(appointmentid)) {
            document.getElementById('deleteappointmentiderrortext').innerHTML = "Please use a correct Appointment ID.<br>Range: 1 - 100";
            document.getElementById('deleteappointmentiderrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
            document.forms[a]["appointmentid"].style.borderColor = "#D75A4A";
            boo = false;
        } else {
            document.getElementById('deleteappointmentiderrortext').innerHTML = "";
            document.getElementById('deleteappointmentiderrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
            document.forms[a]["appointmentid"].style.borderColor = "";
        }
        if (email === "") {
            document.getElementById('deleteemailerrortext').innerHTML = "Email cannot be empty.";
            document.getElementById('deleteemailerrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
            document.forms[a]["email"].style.borderColor = "#D75A4A";
            boo = false;
        } else if (email !== "" && !(emailPattern.test(email))) {
            document.getElementById('deleteemailerrortext').innerHTML = "Email has to end with @obook.eu";
            document.getElementById('deleteemailerrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
            document.forms[a]["email"].style.borderColor = "#D75A4A";
            boo = false;
        } else {
            document.getElementById('deleteemailerrortext').innerHTML = "";
            document.getElementById('deleteemailerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
            document.forms[a]["email"].style.borderColor = "";
        }
        return boo;
    }

    function validateUpdate(a) {
        var appointmentid = document.forms[a]["appointmentid"].value;
        var geo = document.forms[a]["geo"].value;
        var subject = document.forms[a]["subject"].value;
        var date = document.forms[a]["date"].value;
        var time = document.forms[a]["time"].value;
        var url = document.forms[a]["url"].value;
        var boo = true;
        if (subject !== "") {
            document.getElementById('updatesubjecterrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
        } else {
            document.getElementById('updatesubjecterrortext').innerHTML = "";
            document.getElementById('updatesubjecterrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
        }
        if (appointmentid === "" || !appointmentidPattern.test(appointmentid)) {
            document.getElementById('updateappointmentiderrortext').innerHTML = "Please use a correct Appointment ID.<br>Range: 1 - 100";
            document.getElementById('updateappointmentiderrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
            document.forms[a]["appointmentid"].style.borderColor = "#D75A4A";
            boo = false;
        } else {
            document.getElementById('updateappointmentiderrortext').innerHTML = "";
            document.getElementById('updateappointmentiderrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
            document.forms[a]["appointmentid"].style.borderColor = "";
        }
        if (geo !== "" && !geoPattern.test(geo)) {
            document.getElementById('updategeoerrortext').innerHTML = "Wrong coordinate format was used.<br>Please see following example: <br>-50.21, +142.54";
            document.getElementById('updategeoerrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
            document.forms[a]["geo"].style.borderColor = "#D75A4A";
            boo = false;
        } else if (geo === "") {
            document.getElementById('updategeoerrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
            document.getElementById('updategeoerrortext').innerHTML = "";
            document.forms[a]["geo"].style.borderColor = "";
        } else {
            document.getElementById('updategeoerrortext').innerHTML = "";
            document.getElementById('updategeoerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
            document.forms[a]["geo"].style.borderColor = "";
        }
        if (url !== "") {
            document.getElementById('updateurlerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
        } else {
            document.getElementById('updateurlerrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
        }
        if (date !== "") {
            document.getElementById('updatedateerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
        } else {
            document.getElementById('updatedateerrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
        }
        if (time !== "") {
            document.getElementById('updatetimeerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
        } else if (time === "") {
            document.getElementById('updatetimeerrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
        }
        return boo;
    }

    function validateCreate(a) {
        var subject = document.forms[a]["subject"].value;
        var geo = document.forms[a]["geo"].value;
        var email = document.forms[a]["email"].value;
        var date = document.forms[a]["date"].value;
        var time = document.forms[a]["time"].value;
        var url = document.forms[a]["url"].value;
        var boo = true;
        if (subject === "") {
            document.getElementById('createsubjecterrortext').innerHTML = "Subject can't be empty.";
            document.getElementById('createsubjecterrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
            document.forms[a]["subject"].style.borderColor = "#D75A4A";
            boo = false;
        } else {
            document.getElementById('createsubjecterrortext').innerHTML = "";
            document.getElementById('createsubjecterrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
            document.forms[a]["subject"].style.borderColor = "";
        }
        if (url !== "") {
            document.getElementById('createurlerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
        } else {
            document.getElementById('createurlerrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
        }
        if (geo !== "" && !geoPattern.test(geo)) {
            document.getElementById('creategeoerrortext').innerHTML = "Wrong coordinate format was used. <br> Please see following example: <br>-50.21, +142.54";
            document.getElementById('creategeoerrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
            document.forms[a]["geo"].style.borderColor = "#D75A4A";
            boo = false;
        } else if (geo === "") {
            document.getElementById('creategeoerrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
            document.getElementById('creategeoerrortext').innerHTML = "";
            document.forms[a]["geo"].style.borderColor = "";
        } else {
            document.getElementById('creategeoerrortext').innerHTML = "";
            document.getElementById('creategeoerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
            document.forms[a]["geo"].style.borderColor = "";
        }
        if (email === "") {
            document.getElementById('createemailerrortext').innerHTML = "Email can't be empty.";
            document.getElementById('createemailerrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
            document.forms[a]["email"].style.borderColor = "#D75A4A";
            boo = false;
        } else {
            document.getElementById('createemailerrortext').innerHTML = "";
            document.getElementById('createemailerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
            document.forms[a]["email"].style.borderColor = "";
        }
        if (email !== "" && !(emailPattern.test(email))) {
            document.getElementById('createemailerrortext').innerHTML = "Email has to end with @obook.eu";
            document.getElementById('createemailerrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
            document.forms[a]["email"].style.borderColor = "#D75A4A";
            boo = false;
        } else {
            document.getElementById('createemailerrortext').innerHTML = "";
            document.getElementById('createemailerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
            document.forms[a]["email"].style.borderColor = "";
        }
        if (date === "") {
            document.getElementById('createdateerrortext').innerHTML = "Date can't be empty.";
            document.getElementById('createdateerrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
            document.forms[a]["date"].style.borderColor = "#D75A4A";
            boo = false;
        } else {
            document.getElementById('createdateerrortext').innerHTML = "";
            document.getElementById('createdateerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
            document.forms[a]["date"].style.borderColor = "";
        }
        if (time === "") {
            document.getElementById('createtimeerrortext').innerHTML = "Time can't be empty.";
            document.getElementById('createtimeerrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
            document.forms[a]["time"].style.borderColor = "#D75A4A";
            boo = false;
        } else {
            document.getElementById('createtimeerrortext').innerHTML = "";
            document.getElementById('createtimeerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
            document.forms[a]["time"].style.borderColor = "";
        }
        return boo;
    }

    var subjects = ["Test Subject", "Meeting", "Bowling", "Essen", "", "Aufgabe3"];
    var geos = ["-50.21, +142.54", "ABC", "-50545435.21, +144523422.54", "-1, +1", "0, 0", "AB, CD"];
    var urls = ["http://www.obook.eu", "", "https://www.obook.eu", "www.obook.eu", "obook.eu", "obook"];
    var emails = ["ferhan@obook.eu", "thismustfail.eu", "ferhan123@obook.eu", "@obook.eu", "ferhan@kaplanseren.de", ""];
    var date = ["2017-01-01", "01-01-2017", "2020-13-35", "2017-01", ""];
    var time = ["5", ":15", "12:", "20:22", "", "28:65"];
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