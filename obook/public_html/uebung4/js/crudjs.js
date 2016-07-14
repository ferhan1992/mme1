$(document).ready(function () {
    $("#createsubmit").click(function (e) {
        e.preventDefault();
        var subject = $("#createsubject").val();
        var geo = $("#creategeo").val();
        var url = $("#createurl").val();
        var email = $("#createemail").val();
        var date = $("#createdate").val();
        var time = $("#createtime").val();

        var dataString = 'subject=' + subject + '&geo=' + geo + '&url=' + url + '&email=' + email + '&date=' + date + '&time=' + time;
        if (subject == '' || email == '' || date == '' || time == '')
        {
            alert("Please Fill All Required Fields");
        } else
        {
            $.ajax({
                type: "POST",
                url: "includes/create.php",
                data: dataString,
                cache: false,
                success: function (result) {
                    alert(result);
                }
            });
        }
        return false;
    });
});

$(document).ready(function () {
    $("#findsubmit").click(function (e) {
        e.preventDefault();
        var appointmentid = $("#findappointmentid").val();
        var subject = $("#findesubject").val();
        var geo = $("#findgeo").val();
        var url = $("#findurl").val();
        var email = $("#findemail").val();
        var date = $("#finddate").val();
        var time = $("#findtime").val();

        var dataString ='appointmentid=' + appointmentid + 'subject=' + subject + '&geo=' + geo + '&url=' + url + '&email=' + email + '&date=' + date + '&time=' + time;

            $.ajax({
                type: "POST",
                url: "includes/find.php",
                data: dataString,
                cache: false,
                success: function (result) {
                    alert(result);
                }
            });
        
        return false;
    });
});