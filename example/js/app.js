const tabsContent = document.querySelectorAll('.tabcontent')
const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')

const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 0) => {
    tabsContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

tabsParent.addEventListener('click', (event) => {
    const target = event.target

    if (target.classList.contains('tabheader__item')){
        tabs.forEach((item, i) => {
            if(item === target){
                hideTabContent()
                showTabContent(i)
            }
        })
    }
})

let slide = document.querySelector('.tabheader__items')
let i = 0

function nextSlide() {
    if (i === slide.length - 1) {
        slide[i].style.display = 'none'
        i = 0
        slide[0].style.display = 'block'
    } else {
        slide[i].style.display = 'none'
        slide[i + 1].style.display = 'block'
        i++;
    }
}

setInterval(nextSlide, 1000)






const offersSlider = document.querySelectorAll(".offer__slider");
let currentIndex = 0;

function showImage(index) {
  offersSlider[currentIndex].classList.remove('active');
  offersSlider[index].classList.add('active');
  currentIndex = index;
}

const slider = document.querySelector(".offer__slider-counter")
  slider.addEventListener('click', function (event) {
    if (event.target.classList.contains('prev')) {
      let index = currentIndex - 1;
      if (index < 0) {
        index = slider.length - 1;
      }
      showImage(index);
    } else if (event.target.classList.contains('next')) {
      let index = currentIndex + 1;
      if (index >= slider.length) {
        index = 0;
      }
      showImage(index);
    }
  });

showImage(currentIndex);



