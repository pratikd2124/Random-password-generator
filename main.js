        const lengthy = document.getElementById("length");
        const number = document.getElementById("number");
        const char = document.getElementById("char");
        const uppercase = document.getElementById("uppercase");
        const lowercase = document.getElementById("lowercase");
        
        const passcode = document.getElementById("passcode");
        const grt = document.getElementById("generate");

        const cpy = document.getElementById("copy");



        const randomfnc = {
            lower : getrandomlower,
            upper : getrandomupper,
            characters : getrandomchar,
            numbers : getrandomnumber
            
        }

        
        cpy.addEventListener("click", () => {
            const textarea = document.createElement("textarea");
            const password = passcode.innerText;

            if (!password) {alert ("NO pass generated");}

            else{
            textarea.value = password;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            textarea.remove();
            alert('Generated password copied to clipboard');
            }
        });

        grt.addEventListener("click", function(){
            const l = +lengthy.value;
            const n = number.checked;
            const c = char.checked;
            const uc = uppercase.checked;
            const lc = lowercase.checked;

            document.querySelector("#passcode").innerText = generatepass(lc, uc, c, n, l);
        });

        function generatepass(lower,upper,characters,numbers,lengthy){
            let finalpassword = '';
            const randompasscode = lower + upper + characters + numbers;
            const randomArray = [{lower}, {upper}, {characters}, {numbers}].filter(item => Object.values(item)[0]);

            if (randompasscode === 0){
                return '';
            }
            else{
            for (let i = 0; i < lengthy; i+=randompasscode){
                randomArray.forEach(type => {
                    const funcName = Object.keys(type)[0];
                    finalpassword += randomfnc[funcName]();
                });
            }

            return finalpassword;}
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
        
