const slider= document.querySelector('.slider');
const left_button=document.querySelector('.left-button');
const right_button=document.querySelector('.right-button');

let section_index=0;

left_button.addEventListener('click',()=>{
    section_index=(section_index > 0) ? section_index -1:0 ;
    slider.style.transform=`translatex(${ section_index * -16.67}%)`;
})

right_button.addEventListener('click',()=>{ 
    section_index=(section_index < 5) ? section_index +1:5 ;
    slider.style.transform=`translatex(${ section_index * -16.67}%)`;
})