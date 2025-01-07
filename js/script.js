// document.querySelector("section").classList.add("active");

const resumeBtns=document.querySelectorAll('.resume-btn','.knight-rider-btn');

resumeBtns.forEach((btn, idx)=>{
    btn.addEventListener('click', ()=>{
        const resumeDetails=document.querySelectorAll('.resume-details');
        resumeBtns.forEach(btn =>{
            btn.classList.remove('active');
            btn.classList.remove('knight-rider-btn');
        });
       btn.classList.add('active');
       btn.classList.add('knight-rider-btn');

       resumeDetails.forEach(detail =>{
        detail.classList.remove('active');
    
    });
    resumeDetails[idx].classList.add('active');
    });
    
});