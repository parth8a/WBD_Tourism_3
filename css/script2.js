//like it button
const likeItButton = document.querySelector('#inc-btn');
document.querySelector("#like-count").innerHTML = "150";
let predvalue = 150;
likeItButton.addEventListener('click',(e) =>{
    predvalue = predvalue + 1;
    document.getElementById('like-count').innerHTML = `${predvalue}`;
})

//reviews
let modal = document.querySelector(".modal");
let show = document.querySelector(".show-btn");
let closeButton = document.querySelector(".close-button");

modal.addEventListener('click',(e)=>{
  modal.classList.toggle("show-modal");
})

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}