const ToggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarMenu = document.getElementsByClassName('navbar-menu')[0]

ToggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active')
})


//

window.onscroll =  function () {scrollFunction()};
function scrollFunction(){
    if( document.body.scrollTop > 20 || document.documentElement.scroolTop > 20){
        document.getElementById("navbar").style.backgroundColor = "white";
    }else{
        document.getElementById('navbar').style.backgroundColor = "transparent";
    }
}

// form validation




handle = (e) =>{
const form =  document.getElementById("form")

const name = form['name'].value;
const email = form['email'].value;
const subject = form['subject'].value;
const message = form['message'].value;
    e.preventDefault();
    if(email < 8){
        document.getElementById('demo').innerHTML = "email is too short";
    }else if(message < 50){
        document.getElementById('demo').innerHTML = "message is too short";
    }

    const object = {
        name,email,subject,message
    }
    console.log(object)
}

