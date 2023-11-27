(function () {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn'); //gunain all karena kita mau sekalian aja ambilnya yakni untuk class btn
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let love = document.querySelector('.love');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            screen.style.fontSize = "2.3rem";
            screen.style.textAlign = "right";
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    //untuk bikin tombol = berfungsi 
    equal.addEventListener('click', function (e) {
        if (screen.value === '') { //jika layar punya value maka 
            screen.style.fontSize = "2rem";
            screen.style.textAlign = "right-end";
            screen.value = "Please Enter!";
        } else {
            screen.style.fontSize = "2.3rem";
            screen.style.textAlign = "right";
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    love.addEventListener('click', function (e) {
        screen.style.fontSize = "2rem";
        screen.style.textAlign = "center";
        screen.value = "Thank You 🥰";
    })


    clear.addEventListener('click', function (e) {
        screen.value = "";
    })

})();