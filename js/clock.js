let user = prompt('Adınızı Giriniz: ');
let userName = document.querySelector("#myName")
userName.innerHTML = `${user}`

function showTime() {
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let d = date.getDay(); // 0 - 6
    let session = "AM";
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + session + " " + days[d];
    document.getElementById("myClock").innerText = time;
    
    setTimeout(showTime, 1000);
}

showTime();