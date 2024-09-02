var sen = document.getElementById("sentence");
var inp = document.getElementById("input");

sen.innerText = "";

inp.addEventListener("input", function () {
    if (inp.value % 15 === 0) {
        sen.innerText = "Fizz Buzz";
    }
    if (inp.value % 5 === 0 && inp.value % 15 !== 0 && inp.value % 3 !== 0) {
        sen.innerText = "Buzz";
    }
    if (inp.value % 3 === 0 && inp.value % 15 !== 0 && inp.value % 5 !== 0) {
        sen.innerText = "Fizz";
    }
    if (inp.value % 3 !== 0 && inp.value % 15 !== 0 && inp.value % 5 !== 0) {
        sen.innerText = "None";
    }
    if (inp.value === "") {
        sen.innerText = "";
    }
}
);



