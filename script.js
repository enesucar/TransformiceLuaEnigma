$("#submit").click(function () {
    var userName = document.getElementById("nickname").value.toLowerCase();
    CreateStringForUser(userName)
});

var stick = 11;
var titleId = 0;

function CreateStringForUser(userName) {
    $.ajax({
        url: "https://cheese.formice.com/api/players/" + userName.replaceAll("#", "-"),
    }).done(function (data) {
        $('#result').text(a.toString() + data.id.toString() + titleId.toString());
    }).fail(function () {
        alert("Please enter a nickname.")
    });
}

String.prototype.replaceAll = function (str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignore ? "gi" : "g")), (typeof (str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
}
