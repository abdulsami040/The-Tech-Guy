// toogle icon bar

let menuIcon = document.querySelector('#menu-icon') ;
let navbar =document.querySelector('.navbar');

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




let selections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {

    selections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id=  sec.getAttribute('id');

        if( top >= offset && top < offset + height ){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            } );
            sec.classList.add('show-animate');
            }
         else{
            sec.classList.remove('show-animate');
         }
    });

    let header   = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


}  

// var btn = document.getElementById('btn');
// btn.addEventListener('click', function(e){
//     e.preventDefault()
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var number = document.getElementById('number').value;
//     var sub = document.getElementById('sub').value;
//     var message = document.getElementById('message').value;
//     var body = 'name:'+name + '<br/> email:'+email+ '<br/> number:'+number+'<br/> sub:' +sub+ '<br/> message:'+message; 


//                Email.send({
//                 SecureToken : "4c00007c-040e-4f7e-b591-bc8e7087146c",
//                 To : 'afsheensamad88@gmail.com',
//                 From : "abdulsam069@gmail.com",
//                 Subject : "Contact Message",
//                 Body : body
//             }).then(
//             message => alert(message)
//             );
// })


