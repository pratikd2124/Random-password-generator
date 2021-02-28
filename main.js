const length = document.getElementById("length");
        const number = document.getElementById("number");
        const char = document.getElementById("char");
        const uppercase = document.getElementById("uppercase");
        const lowercase = document.getElementById("lowercase");
        
        const passcode = document.getElementById("passcode");
        const grt = document.getElementById("generate");

        const cpy = document.getElementById("copy");



        const randomfnc = {
            lower : getrandomlower(),
            upper : getrandomupper(),
            numbers : getrandomnumber(),
            characters : getrandomchar()
        }
        
        function getrandomlower(){
            return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
        function getrandomupper(){
            return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        }
        function getrandomnumber(){
            return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
        }
        function getrandomchar(){
            const symbols = "!@#$%^&*(){}[]=<>/."
            return symbols[Math.floor(Math.random() * symbols.length)];
        }
        
