const hamburger = document.getElementById("hamburger")
console.log(hamburger)
const navUL = document.getElementById("links")


hamburger.addEventListener('click',()=>{
    navUL.classList.toggle('show');
    console.log("hi")
    
})

// const submitMessage = document.querySelector('.submit');

// const fname = document.getElementById('fname').value;
// const lname = document.getElementById('lname').value;
// const country = document.getElementById('country').value;
// const subject = document.getElementById('subject').value;
// submitMessage.addEventListener("click",(e)=>{
//     e.preventDefault();
//     console.log("hi");
//     alert(`first name:${fname}\n last name:${lname}\n country:${country}\n maessage:${subject}`);
// })