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

const arrowRight =document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft =document.querySelector('.portfolio-box .navigation .arrow-left');

let index=0;

const activePortfolio = ()=>{
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail')

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active')
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click',()=>{
    if(index < 4){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else{
        index = 5;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});
arrowLeft.addEventListener('click',()=>{
    if(index > 1){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{
        index = 0;
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});