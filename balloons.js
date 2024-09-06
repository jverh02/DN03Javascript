document.addEventListener("DOMContentLoaded", function () {
    const randomNum = Math.floor(Math.random() * 3);
    const elem = document.getElementById('dob');
    const greeting = document.getElementById('greeting');
    switch (randomNum) {
        case 0:
            greeting.classList.add("animate__animated", "animate__rubberBand");
            break;
        case 1:
            greeting.classList.add("animate__animated", "animate__wobble");
            break;
        case 2:
            greeting.classList.add("animate__animated", "animate__shakeY");
            break;
        default:
            console.log("Error, generated a random number I shouldn't have");
            break;
    }
    const datepicker = new Datepicker(elem, {
        // options
        autohide: true,
        format: 'MM-dd'
    });
    // uncheck all boxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
    // event listener for check/uncheck
    document.getElementById('checkbox-card').addEventListener('change', function (e) {
        if (e.target.classList.contains('form-check-input')) {
            document.getElementById(e.target.id + 'Img').style.visibility = e.target.checked ? "visible" : "hidden";
            const elem = document.getElementById(e.target.id + 'Img');
            elem.style.visibility = "visible";
            elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
            e.target.checked ?
                elem.classList.add("animate__animated", "animate__bounceInDown") :
                elem.classList.add("animate__animated", "animate__bounceOutUp");
        }
    });
    document.getElementById("submit").addEventListener('click', function () {
        let checked = document.querySelectorAll("input:checked");
        //console.log(checked.length);
        if (checked.length == 0) {
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
        }
    });
    document.getElementById("check").addEventListener('click', function (e) {
         //check if each individual box is clicked (to trigger click event properly), and if it isn't, click it
        document.querySelectorAll('.form-check-input').forEach(c => c.checked ? console.log("already checked") : c.click());

    });
    document.getElementById("uncheck").addEventListener('click', function () {
        //there's probably some way to lump these two event listeners together, but if there is I didn't figure it out
        document.querySelectorAll('.form-check-input').forEach(c => c.checked ? c.click() : console.log("already unchecked"));
    });

    document.querySelectorAll('.form-check-label').forEach(function (e) {
        e.addEventListener("mouseover", function (e) {
            console.log(e.target.htmlFor);
            greeting.style.color = e.target.htmlFor;
        })
        e.addEventListener("mouseout", function (e) {
            greeting.style.color = "slategray";
        })
    })
});