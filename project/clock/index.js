//bikn variabel yg menampung tiap elemen untuk jam, menit, dan sekon, ampm karena itu yang akan kita buat berfungsi 
const hourEl = document.getElementById("hour");
const minEl = document.getElementById("Minute");
const secEl = document.getElementById("Second");
const ampmEl = document.getElementById("ampm");

//1.buat fungsi untuk ubah format dari jamnya 
function updateClock() {
    let h = new Date().getHours(); //untuk mendapatkan jam, kita pakai metod Date().getHours()\
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    //2.buat logika untuk kapan akan am dan kapan akan pm 
    //Jika hours lebih dari 12, misal 13 atau 14 maka jam 13 - 12 = 1
    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h; // jika h nya kurang dari 10 maka 0+h kebalikannya tulis h saja 

    //3. ubah elemen text di hours, minutes sama second dengan gunain innerHtml
    hourEl.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
    ampmEl.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000); //ini akan buat dia kalau seadnainye sudah 1000 milisecond maka fungsinya akan diulang kembali 

}

updateClock();
//4. memanggil fungsi updateClock() untuk mengiperaasikan jamnya

