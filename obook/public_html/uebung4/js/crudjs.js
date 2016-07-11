$(document).ready(function () {
    $("#createsubmit").click(function (e) {
        e.preventDefault();
        var subject = $("#createsubject").val();
        var geo = $("#creategeo").val();
        var url = $("#createurl").val();
        var email = $("#createemail").val();
        var date = $("#createdate").val();
        var time = $("#createtime").val();
// Returns successful data submission message when the entered information is stored in database.
        var dataString = 'subject=' + subject + '&geo=' + geo + '&url=' + url + '&email=' + email + '&date=' + date + '&time=' + time;
        if (subject == '' || email == '' || date == '' || time == '')
        {
            alert("Please Fill All Required Fields");
        } else
        {
// AJAX Code To Submit Form.
            $.ajax({
                type: "POST",
                url: "includes/crud.php",
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