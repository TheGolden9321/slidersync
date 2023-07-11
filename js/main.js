"use strict";
const tabs = document.querySelectorAll('.tab');
tabs[0].style.display = "block"
const links = document.querySelectorAll('.tabs__navigation a');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        tabs.forEach(tab => {
            tab.style.display = "none";
        });
        const activeTab = document.getElementById(event.target.dataset.open);
        console.log(activeTab);
        activeTab.style.display = "block"
    })
});

let reviewSlider = new Swiper('.tab__slider', {
    wrapperClass: "tab__sliderwrapper",
    slideClass: "tab__slide",
    navigation:{
        prevEl: ".tab__prev",
        nextEl: ".tab__next",
    },
    breakpoints:{
        1300:{
            slidesPerView: "5",
        },
        900:{
            slidesPerView: "3",
        },
        320:{
            slidesPerView: "1",
        }
    },
});
let reviewSlider2 = new Swiper('.tab__slider2', {
    wrapperClass: "tab__sliderwrapper2",
    slideClass: "tab__slide2",
    navigation:{
        prevEl: ".tab__prev",
        nextEl: ".tab__next",
    },
    breakpoints:{
        1300:{
            slidesPerView: "5",
        },
        900:{
            slidesPerView: "3",
        },
        320:{
            slidesPerView: "1",
        }
    },
});


let reviewSlider3 = new Swiper('.tab__slider3', {
    wrapperClass: "tab__sliderwrapper3",
    slideClass: "tab__slide3",
    navigation:{
        prevEl: ".tab__prev",
        nextEl: ".tab__next",
    },
    breakpoints:{
        1300:{
            slidesPerView: "5",
        },
        900:{
            slidesPerView: "3",
        },
        320:{
            slidesPerView: "1",
        }
    },
});
let reviewSlider4 = new Swiper('.tab__slider4', {
    wrapperClass: "tab__sliderwrapper4",
    slideClass: "tab__slide4",
    navigation:{
        prevEl: ".tab__prev",
        nextEl: ".tab__next",
    },
    breakpoints:{
        1300:{
            slidesPerView: "5",
        },
        900:{
            slidesPerView: "3",
        },
        320:{
            slidesPerView: "1",
        }
    },
});
let reviewSlider5 = new Swiper('.tab__slider5', {
    wrapperClass: "tab__sliderwrapper5",
    slideClass: "tab__slide5",
    navigation:{
        prevEl: ".tab__prev",
        nextEl: ".tab__next",
    },
    breakpoints:{
        1300:{
            slidesPerView: "5",
        },
        900:{
            slidesPerView: "3",
        },
        320:{
            slidesPerView: "1",
        }
    },
});
let reviewSlider6 = new Swiper('.tab__slider6', {
    wrapperClass: "tab__sliderwrapper6",
    slideClass: "tab__slide6",
    navigation:{
        prevEl: ".tab__prev",
        nextEl: ".tab__next",
    },
    breakpoints:{
        1300:{
            slidesPerView: "5",
        },
        900:{
            slidesPerView: "3",
        },
        320:{
            slidesPerView: "1",
        }
    },
});
let reviewSlider7 = new Swiper('.tab__slider7', {
    wrapperClass: "tab__sliderwrapper7",
    slideClass: "tab__slide7",
    navigation:{
        prevEl: ".tab__prev",
        nextEl: ".tab__next",
    },
    breakpoints:{
        1300:{
            slidesPerView: "5",
        },
        900:{
            slidesPerView: "3",
        },
        320:{
            slidesPerView: "1",
        }
    },
});
let reviewSlider8 = new Swiper('.tab__slider8', {
    wrapperClass: "tab__sliderwrapper8",
    slideClass: "tab__slide8",
    navigation:{
        prevEl: ".tab__prev",
        nextEl: ".tab__next",
    },
    breakpoints:{
        1300:{
            slidesPerView: "5",
        },
        900:{
            slidesPerView: "3",
        },
        320:{
            slidesPerView: "1",
        }
    },
});
reviewSlider3.controller.control = reviewSlider4;
reviewSlider4.controller.control = reviewSlider3;
reviewSlider2.controller.control = reviewSlider;
reviewSlider.controller.control = reviewSlider2;
reviewSlider6.controller.control = reviewSlider5;
reviewSlider5.controller.control = reviewSlider6;
reviewSlider7.controller.control = reviewSlider8;
reviewSlider8.controller.control = reviewSlider7;
