/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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