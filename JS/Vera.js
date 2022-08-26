const suivant =document.querySelector('.right');
const deriere =document.querySelector('.left')

// slide 1
const items= document.querySelectorAll('.img-slide')
const nbslide = items.length;
const container = document.querySelector('.parent')
const slide=document.querySelector('.enfant')
let count=0;

// slides sofiane slide 1 
;function slidederiere(){
      console.log('slidederiere')
      if(count < nbslide- 1)
      {
        count++;
      }else{
        count=0;
        }
    console.log(count);
    slide.style.left = '-' + count + '00%'

}
;function slidesuivante(){
  console.log('slidesuivante')
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
      slidesuivante()
    }else{
      slidederiere()
    }
})