

function gen() {
    document.getElementById("qrcode").innerHTML = "";
    let user = document.querySelector("#inputfield");
    let usertext = user.value;
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: usertext,
        width: 128,
        height: 128,
        colorDark: "#5868bf",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

}

// var qrcode = new QRCode(document.getElementById("qrcode"), {
//     text: "https://webisora.com",
//     width: 128,
//     height: 128,
//     colorDark: "#5868bf",
//     colorLight: "#ffffff",
//     correctLevel: QRCode.CorrectLevel.H
// });
