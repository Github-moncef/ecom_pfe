
const images=['image/coffee.jpg','image/grapes.jpg','image/olive.jpg'] ;
let i=2 ;
const image = document.getElementById('image') ;
const left = document.getElementById('left-button') ;
const right = document.getElementById('right-button') ;

function updateImage() {
    image.src=images[i] ;
}
left.addEventListener("click",function() { 
    i-- ;
    if(i < 0) {i= images.length-1 ;}
    updateImage() ;

});

right.addEventListener("click",function () {
    i++ ;
    if(i >= images.length ) {i=0 ;}
    updateImage() ;

});
//  bars menu

const menuButton = document.querySelector('.menu-button');
const menuColumn = document.querySelector('.menu-column');


menuButton.addEventListener('click', () => {
  if (menuColumn.style.display === 'block') {
    menuColumn.style.display = 'none';
  } else {
    menuColumn.style.display = 'block';
  }
});
