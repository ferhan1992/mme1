(function () {

    var geoPattern = /^[+-]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[+-]?(([1-9]?\d|1[0-7]\d)(\.\d+)?|180(\.0+)?)$/;
    var emailPattern = /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:obook?\.)+(?:[A-Z]{2}|eu)\b/i;
    var appointmentidPattern = /^[1-9][0-9]?$|^100$/;

    function initializeMap() {
        var map = {
            center: new google.maps.LatLng(52.30, 13.25),
            zoom: 5
        };
        new google.maps.Map(document.getElementById("googleMaps"), map);
    }
    google.maps.event.addDomListener(window, 'load', initializeMap);

    function validateAppointmentId(a) {
        var appointmentid = document.forms[a].appointmentid.value;
        switch (a) {
            case 'find' :
                if (appointmentid !== "" && !appointmentidPattern.test(appointmentid)) {
                    document.getElementById(a + 'appointmentiderrortext').innerHTML = "Please use a correct Appointment ID.<br>Range: 1 - 100";
                    document.getElementById(a + 'appointmentiderrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
                    document.forms[a].appointmentid.style.borderColor = "#D75A4A";
                } else if (appointmentid === "") {
                    document.getElementById(a + 'appointmentiderrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
                    document.getElementById(a + 'appointmentiderrortext').innerHTML = "";
                    document.forms[a].appointmentid.style.borderColor = "";
                } else {
                    document.getElementById(a + 'appointmentiderrortext').innerHTML = "";
                    document.getElementById(a + 'dappointmentiderrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
                    document.forms[a].appointmentid.style.borderColor = "";
                }
                break;
            default :
                if (appointmentid === "" || !appointmentidPattern.test(appointmentid)) {
                    document.getElementById(a + 'appointmentiderrortext').innerHTML = "Please use a correct Appointment ID.<br>Range: 1 - 100";
                    document.getElementById(a + 'appointmentiderrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
                    document.forms[a].appointmentid.style.borderColor = "#D75A4A";
                } else {
                    document.getElementById(a + 'appointmentiderrortext').innerHTML = "";
                    document.getElementById(a + 'appointmentiderrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
                    document.forms[a].appointmentid.style.borderColor = "";
                }
                break;
        }

    }

    function validateDate(a) {
        var date = document.forms[a].date.value;
        switch (a) {
            case 'create' :
                if (date === "") {
                    document.getElementById(a + 'dateerrortext').innerHTML = "Date can't be empty.";
                    document.getElementById(a + 'dateerrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
                    document.forms[a].date.style.borderColor = "#D75A4A";
                } else {
                    document.getElementById(a + 'dateerrortext').innerHTML = "";
                    document.getElementById(a + 'dateerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
                    document.forms[a].date.style.borderColor = "";
                }
                break;
            default :
                if (date !== "") {
                    document.getElementById(a + 'dateerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
                } else {
                    document.getElementById(a + 'dateerrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
                }
                break;
        }
    }

    function validateTime(a) {
        var time = document.forms[a].time.value;
        switch (a) {
            case 'create' :
                if (time !== "") {
                    document.getElementById(a + 'timeerrortext').innerHTML = "";
                    document.getElementById(a + 'timeerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
                    document.forms[a].time.style.borderColor = "";
                } else {
                    document.getElementById(a + 'timeerrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
                    document.getElementById(a + 'timeerrortext').innerHTML = "Time can't be empty.";
                    document.forms[a].time.style.borderColor = "#D75A4A";
                }
                break;
            default :
                if (time !== "") {
                    document.getElementById(a + 'timeerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
                } else if (time === "") {
                    document.getElementById(a + 'timeerrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
                }
                break;
        }
    }

    function validateEmail(a) {
        var email = document.forms[a].email.value;
        switch (a) {
            case'find' :
                if (email !== "" && !emailPattern.test(email)) {
                    document.getElementById(a + 'emailerrortext').innerHTML = "Email has to end with @obook.eu";
                    document.getElementById(a + 'emailerrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
                    document.forms[a].email.style.borderColor = "#D75A4A";
                } else if (email === "") {
                    document.getElementById(a + 'emailerrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
                    document.getElementById(a + 'emailerrortext').innerHTML = "";
                    document.forms[a].email.style.borderColor = "";
                } else {
                    document.getElementById(a + 'emailerrortext').innerHTML = "";
                    document.getElementById(a + 'emailerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
                    document.forms[a].email.style.borderColor = "";
                }
                break;
            default :
                if (email === "") {
                    document.getElementById(a + 'emailerrortext').innerHTML = "Email cannot be empty.";
                    document.getElementById(a + 'emailerrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
                    document.forms[a].email.style.borderColor = "#D75A4A";
                } else if (email !== "" && !(emailPattern.test(email))) {
                    document.getElementById(a + 'emailerrortext').innerHTML = "Email has to end with @obook.eu";
                    document.getElementById(a + 'emailerrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
                    document.forms[a].email.style.borderColor = "#D75A4A";
                } else {
                    document.getElementById(a + 'emailerrortext').innerHTML = "";
                    document.getElementById(a + 'emailerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
                    document.forms[a].email.style.borderColor = "";
                }
                break;
        }
    }

    function validateUrl(a) {
        var url = document.forms[a].url.value;
        if (url !== "") {
            document.getElementById(a + 'urlerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
        } else {
            document.getElementById(a + 'urlerrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
        }
    }

    function validateSubject(a) {
        var subject = document.forms[a].subject.value;
        switch (a) {
            case'create' :
                if (subject === "") {
                    document.getElementById(a + 'subjecterrortext').innerHTML = "Subject can't be empty.";
                    document.getElementById(a + 'subjecterrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
                    document.forms[a].subject.style.borderColor = "#D75A4A";
                } else {
                    document.getElementById(a + 'subjecterrortext').innerHTML = "";
                    document.getElementById(a + 'subjecterrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
                    document.forms[a].subject.style.borderColor = "";
                }
                break;
            default :
                if (subject !== "") {
                    document.getElementById(a + 'subjecterrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
                } else {
                    document.getElementById(a + 'subjecterrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
                }
                break;
        }
    }

    function validateGeo(a) {
        var geo = document.forms[a].geo.value;
        if (geo !== "" && !geoPattern.test(geo)) {
            document.getElementById(a + 'geoerrortext').innerHTML = "Wrong coordinate format was used. <br> Please see following example: <br>-50.21, +142.54";
            document.getElementById(a + 'geoerrorimage').innerHTML = '<img src="pictures/false.png" alt="error">';
            document.forms[a].geo.style.borderColor = "#D75A4A";
        } else if (geo === "") {
            document.getElementById(a + 'geoerrorimage').innerHTML = '<img src="pictures/unclear.png" alt="unclear">';
            document.getElementById(a + 'geoerrortext').innerHTML = "";
            document.forms[a].geo.style.borderColor = "";
        } else {
            document.getElementById(a + 'geoerrortext').innerHTML = "";
            document.getElementById(a + 'geoerrorimage').innerHTML = '<img src="pictures/true.png" alt="ok">';
            document.forms[a].geo.style.borderColor = "";
        }
    }

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
        validateAppointmentId(a);
        validateEmail(a);
        validateGeo(a);
        validateUrl(a);
        validateDate(a);
        validateTime(a);
        validateSubject(a);
    }

    function validateDelete(a) {
        validateAppointmentId(a);
        validateEmail(a);
    }

    function validateUpdate(a) {
        validateAppointmentId(a);
        validateGeo(a);
        validateUrl(a);
        validateDate(a);
        validateTime(a);
        validateSubject(a);
    }

    function validateCreate(a) {
        validateEmail(a);
        validateGeo(a);
        validateUrl(a);
        validateDate(a);
        validateTime(a);
        validateSubject(a);
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
        document.getElementById('createsubject').addEventListener('keyup', function () {
            validateSubject('create');
        });
        document.getElementById('findsubject').addEventListener('keyup', function () {
            validateSubject('find');
        });
        document.getElementById('updatesubject').addEventListener('keyup', function () {
            validateSubject('update');
        });
        document.getElementById('creategeo').addEventListener('keyup', function () {
            validateGeo('create');
        });
        document.getElementById('findgeo').addEventListener('keyup', function () {
            validateGeo('find');
        });
        document.getElementById('updategeo').addEventListener('keyup', function () {
            validateGeo('update');
        });
        document.getElementById('createurl').addEventListener('keyup', function () {
            validateUrl('create');
        });
        document.getElementById('findurl').addEventListener('keyup', function () {
            validateUrl('find');
        });
        document.getElementById('updateurl').addEventListener('keyup', function () {
            validateUrl('update');
        });
        document.getElementById('createemail').addEventListener('keyup', function () {
            validateEmail('create');
        });
        document.getElementById('findemail').addEventListener('keyup', function () {
            validateEmail('find');
        });
        document.getElementById('deleteemail').addEventListener('keyup', function () {
            validateEmail('delete');
        });
        document.getElementById('createtime').addEventListener('keyup', function () {
            validateTime('create');
        });
        document.getElementById('findtime').addEventListener('keyup', function () {
            validateTime('find');
        });
        document.getElementById('updatetime').addEventListener('keyup', function () {
            validateTime('update');
        });
        document.getElementById('createdate').addEventListener('keyup', function () {
            validateDate('create');
        });
        document.getElementById('finddate').addEventListener('keyup', function () {
            validateDate('find');
        });
        document.getElementById('updatedate').addEventListener('keyup', function () {
            validateDate('update');
        });
        document.getElementById('findappointmentid').addEventListener('keyup', function () {
            validateAppointmentId('find');
        });
        document.getElementById('updateappointmentid').addEventListener('keyup', function () {
            validateAppointmentId('update');
        });
        document.getElementById('deleteappointmentid').addEventListener('keyup', function () {
            validateAppointmentId('delete');
        });
    }

    window.addEventListener("load", init, false);
})();