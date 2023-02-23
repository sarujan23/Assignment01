//Q1
const links = document.querySelectorAll(".nav-link");
links.forEach(link => {
  link.addEventListener("click", function() {
    links.forEach(link => {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});

//Q2
let slidePosition=0;
const sliders=document.querySelectorAll('.slider-item');
const totalSlider=sliders.length;
const btnPrev=document.querySelector('#btn-prev');
const btnNext=document.querySelector('#btn-next');


btnPrev.addEventListener('click',function(){
  PrevSlide();
});
btnNext.addEventListener('click',function(){
  NextSlide();
});

function updatePosition(){
  sliders.forEach(slide=>{
    slide.classList.remove('active');
    slide.classList.add('hidden');
  });

  sliders[slidePosition].classList.add('active');

  dots.forEach(dot=>{
    dot.classList.remove('dot-active');
  });

  dots[slidePosition].classList.add('dot-active');
}

function PrevSlide(){
  if(slidePosition==0){
    slidePosition=totalSlider-1;
  }else{
    slidePosition--;
  }
  updatePosition();
}
function NextSlide(){
  if(slidePosition==totalSlider-1){
    slidePosition=0;
  }else{
    slidePosition++;
  }
  updatePosition();
}


const dotContainer=document.querySelector('.dots');
sliders.forEach(slide=>{
 const dot=document.createElement('div');
 dot.classList.add('dot');
 dotContainer.appendChild(dot);
});

const dots=document.querySelectorAll('.dot');
dots[slidePosition].classList.add('dot-active');


dots.forEach((dot,index)=>{
  dot.addEventListener('click',function(){
    slidePosition=index;
    updatePosition();
  });
});


setInterval(()=>{
  if(slidePosition==totalSlider-1){
    slidePosition=0;
  }else{
    slidePosition++;
  }
  updatePosition();
},800);
	
//Q4
const navbar = document.querySelector(".nav");
const gallery = document.querySelector("#saru");
const items = Array.from(document.querySelectorAll(".container"));

navbar.addEventListener("click", function(event) {
  if (event.target.matches("#filter")) {
    event.preventDefault();
    const filter = event.target.dataset.filter;
    items.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
});

//error message
fetch('https://example.com/services')
  .then(response => {
    if (response.status === 404) {
      throw new Error('404 Not Found');
    }
    return response.json();
  })
  .then(data => {
    // Do something with the data
  })
  .catch(error => {
    console.error(error);
    // Show an error message to the user
  });



//pages loader
(function(loader) {

  window.addEventListener('beforeunload', function(e) {
    activateLoader();
  });

  window.addEventListener('load', function(e) {
    deactivateLoader();
  });

  function activateLoader() {
    loader.style.display = 'block';
    loader.style.opacity = 1;
  }

  function deactivateLoader() {
   
    setTimeout(function() {
      deactivate();
    }, 1000);

    function deactivate() {
      loader.style.opacity = 0;
      loader.addEventListener('transitionend', function() {
        loader.style.display = 'none';
      }, false);
    }
  }

})(document.querySelector('.o-page-loader'));