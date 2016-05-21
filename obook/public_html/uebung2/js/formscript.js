var geoPattern = /[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
var emailPattern = /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:obook?\.)+(?:[A-Z]{2}|eu)\b/i;
var appointmentidPattern = /(?:\b|-)([0-9]{1}|100)\b/;

function initializeMap() {
    var mapProp = {
        center: new google.maps.LatLng(52.30, 13.25),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    new google.maps.Map(document.getElementById("googleMaps"), mapProp);
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