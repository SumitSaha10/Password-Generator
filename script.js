window.addEventListener('load',function() {

    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*/(){}[]&@#$%-_";
    let password = '';
    let generate = document.getElementById('btn-1');
    let showPassword = document.getElementById('box');
    let messege = document.querySelector('.messege');

generate.addEventListener("click",function() {

    for (let i = 0; i < 16; i++) {
        let random = Math.round(Math.random()*(chars.length-1));
        password += chars.charAt(random);
    }
    //console.log(password);
    showPassword.value = password;
    password = ''

})

    let copy = document.getElementById('btn-2');

    copy.addEventListener('click',function() {

        navigator.clipboard.writeText(showPassword.value);
        messege.style.display = "block";
        setTimeout(() => {
            messege.style.display = "none";
        }, 1500);
        
    })

})
