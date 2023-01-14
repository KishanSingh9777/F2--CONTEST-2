function show_message(event){
    event.preventDefault()
    console.log("function called");
    let fullname = document.getElementById("fullname");
    let profession = document.getElementById("profession");
    let age = document.getElementById("age");
    let btn = document.getElementById("btn");
    let success = document.getElementById("success");
    let feild = document.getElementById("feild");


    if (fullname.value === '' || profession.value === '' || age.value === ''){
        feild.style.display = "block"
    }
    else {
        success.style.display = "block"
    }
}
document.getElementById('btn').addEventListener('click', show_message)

