const items = document.querySelectorAll('.img-slide');
const next = document.querySelector('.suivant');
const previous = document.querySelector('.precedent');
const container = document.querySelector('.container')
const slide=document.querySelector('.enfant')
const nbslide = items.length;
let count = 0;

function slideNext(){
    console.log('slideNext')
    if(count < nbslide- 1)
    {
      count++;
    }else{
      count=0;
      }
  console.log(count);
  slide.style.left = '-' + count + '00%';

}

function slidePrevious(){
    console.log('slidePrevious')
  if(count > 0)
    {
      count--;
      }else{
      count= nbslide-1;
    }
    slide.style.left = '-' + count + '00%';
    console.log(count);
}

container.addEventListener('click', (e) => {
    if (e.x < container.offsetWidth / 2) {
      slideNext()
    }else{
      slidePrevious()
    }
})