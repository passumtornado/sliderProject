const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const carouselItem = document.querySelectorAll('.carousel__items');
const carouselItemLength = carouselItem.length;
let index = 0
console.log(carouselItem);

// function carousel

function carousel() {
  for (let i = 0; i < carouselItemLength; i++) {
    carouselItem[i].classList.remove('active');
  }
  carouselItem[index].classList.add('active');
}


function nextCarousel(){
  if(index === carouselItemLength - 1){
    index = 0;
  }else{
    index++
  }
  carousel()
}
function prevCarousel(){
    if(index === 0){
    index = carouselItemLength -1
  }else{
    index--
  }
  carousel()
}

carousel()
nextBtn.addEventListener('click',nextCarousel);
prevBtn.addEventListener('click',prevCarousel);