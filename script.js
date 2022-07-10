$("#submit").click(function () {
    var userName = document.getElementById("nickname").value.toLowerCase();
    CreateStringForUser(userName)
});

var a = 11;
var titleId = 542;

function CreateStringForUser(userName) {
    $.ajax({
        url: "https://cheese.formice.com/api/players/" + userName,
    }).done(function (data) {
        console.log(data);
        $('#result').text(a.toString() + data.id.toString() + titleId.toString());
    }).fail(function (data) {
        alert("Please enter a nickname.")
    });
}