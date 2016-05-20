var geoPattern = /[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
var emailPattern = /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:obook?\.)+(?:[A-Z]{2}|eu)\b/i;
var appointmentidPattern = /(?:\b|-)([0-9]{1}|100)\b/;

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
    var boo = true;

    if (appointmentid !== "" && !appointmentidPattern.test(appointmentid)) {
        alert("Please use a correct Appointment ID.\nRange: 0 - 100");
        boo = false;
    }
    if (email !== "" && !emailPattern.test(email)) {
        alert("Email has to end with @obook.eu");
        boo = false;
    }
    if (geo !== "" && !geoPattern.test(geo)) {
        alert("Wrong coordinate format was used.\nPlease see following example: \n-50.21, +142.54");
        boo = false;
    }
    Boolean(boo);
}

function validateDelete(a) {
    var appointmentid = document.forms[a]["appointmentid"].value;
    var email = document.forms[a]["email"].value;
    var boo = true;

    if (appointmentid === "" || !appointmentidPattern.test(appointmentid)) {
        alert("Please use a correct Appointment ID.\nRange: 0 - 100");
        boo = false;
    }
    if (email === "" || !emailPattern.test(email)) {
        alert("Email cannot be empty has to end with @obook.eu");
        boo = false;
    }
    Boolean(boo);
}

function validateUpdate(a) {
    var appointmentid = document.forms[a]["appointmentid"].value;
    var geo = document.forms[a]["geo"].value;
    var boo = true;

    if (appointmentid === "" || !appointmentidPattern.test(appointmentid)) {
        alert("Please use a correct Appointment ID.\nRange: 0 - 100");
        boo = false;
    }
    if (geo !== "" && !geoPattern.test(geo)) {
        alert("Wrong coordinate format was used.\nPlease see following example: \n-50.21, +142.54");
        boo = false;
    }
    Boolean(boo);
}

function validateCreate(a) {
    var subject = document.forms[a]["subject"].value;
    var geo = document.forms[a]["geo"].value;
    var email = document.forms[a]["email"].value;
    var date = document.forms[a]["date"].value;
    var time = document.forms[a]["time"].value;
    var boo = true;

    if (subject === "") {
        alert("Subject can't be empty.");
        boo = false;
    }
    if (geo !== "" && !geoPattern.test(geo)) {
        alert("Wrong coordinate format was used.\nPlease see following example: \n-50.21, +142.54");
        boo = false;
    }
    if (email === "") {
        alert("Email can't be empty.");
        boo = false;
    }
    if (email !== "" && !(emailPattern.test(email))) {
        alert("Email has to end with @obook.eu");
        boo = false;
    }
    if (date === "") {
        alert("Date can't be empty.");
        boo = false;
    }
    if (time === "") {
        alert("Time can't be empty.");
        boo = false;
    }
    Boolean(boo);
}

function generateData(a) {
    switch (a) {
        case 'create' :
            document.getElementById('createsubject').value = "Test Subject";
            document.getElementById('creategeo').value = "-50.21, +142.54";
            document.getElementById('createurl').value = "http://www.obook.eu";
            document.getElementById('createemail').value = "ferhan@obook.eu";
            document.getElementById('createdate').value = "2017-01-01";
            document.getElementById('createtime').value = "00:01";
            break;
        case 'find':
            document.getElementById('findappointmentid').value = "1";
            document.getElementById('findsubject').value = "Test Subject";
            document.getElementById('findgeo').value = "-50.21, +142.54";
            document.getElementById('findurl').value = "http://www.obook.eu";
            document.getElementById('findemail').value = "ferhan@obook.eu";
            document.getElementById('finddate').value = "2017-01-01";
            document.getElementById('findtime').value = "00:01";
            break;
        case 'update' :
            document.getElementById('updateappointmentid').value = "1";
            document.getElementById('updatesubject').value = "Test Subject";
            document.getElementById('updategeo').value = "-50.21, +142.54";
            document.getElementById('updateurl').value = "http://www.obook.eu";
            document.getElementById('updatedate').value = "2017-01-01";
            document.getElementById('updatetime').value = "00:01";
            break;
        case 'delete' :
            document.getElementById('deleteappointmentid').value = "1";
            document.getElementById('deleteemail').value = "ferhan@obook.eu";
            break;
        default:
            return false;
    }
}