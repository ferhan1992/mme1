(function () {

    window.addEventListener("load", init, false);

    function init() {
        document.getElementById('createbutton').addEventListener('click', function () {
            switchForm('createform');
        });

        document.getElementById('findbutton').addEventListener('click', function () {
            switchForm('findform');
        });

        document.getElementById('updatebutton').addEventListener('click', function () {
            switchForm('updateform');
        });

        document.getElementById('showallbutton').addEventListener('click', function () {
            switchForm('showallform');
        });

        document.getElementById('deletebutton').addEventListener('click', function () {
            switchForm('deleteform');
        });
        document.getElementById('createform').style.display = "block";
    }

    function switchForm(a) {
        var e = document.getElementById(a);
        hide();
        e.style.display = "block";
    }

    function hide() {
        document.getElementById('createform').style.display = "none";
        document.getElementById('findform').style.display = "none";
        document.getElementById('updateform').style.display = "none";
        document.getElementById('showallform').style.display = "none";
        document.getElementById('deleteform').style.display = "none";
    }
})();