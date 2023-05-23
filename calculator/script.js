function clearScreen() {
        document.getElementById("result").value = "";
    }
     
    function display(value) {
        document.getElementById("result").value += value;
    }
     
    function calculate() {
        var a = document.getElementById("result").value;
        var b = eval(a);
        document.getElementById("result").value = b;
    }
    
    function lightMode() {
        var body = document.body;
        var calculator = document.querySelector('calculator');
        var buttons = document.querySelectorAll('input[type="button"]');

        body.classList.toggle("light-Mode")

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.toggle('light-Mode')
        }
    }