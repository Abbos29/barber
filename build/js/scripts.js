// Custom Scripts
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
    menu.addEventListener("click", (event) => {
        if (event.target) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
    const nav = document.querySelector('nav')

    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
        nav.classList.add('fixed__nav')
    } else {
        nav.classList.remove('fixed__nav')
    }
}
window.addEventListener('scroll', fixedNav)








// SWIPER

const swiperSlider = new Swiper('.slider__swiper', {

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    initialSlide: 3,
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 1.3,
    spaceBetween: 20,
    loop: true,
    // autoHeight: true,


    breakpoints: {
        1450: {
            slidesPerView: 3.9,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,

        },
        768: {
            slidesPerView: 2,
        }
    }
});









// BUTTER JS


// butter.js

(function(root){
    var Butter = function() {

        var self = this;

        this.defaults = {
            wrapperId: 'butter',
            wrapperDamper: 0.07,
            cancelOnTouch: false
        }
        
        this.validateOptions = function(ops) {
            for (var prop in ops) {
                if (self.defaults.hasOwnProperty(prop)) {
                    Object.defineProperty(self.defaults, prop, {value: Object.getOwnPropertyDescriptor(ops, prop).value})
                }
            }
        }

        this.wrapperDamper;
        this.wrapperId;
        this.cancelOnTouch;
        this.wrapper;
        this.wrapperOffset = 0;
        this.animateId;
        this.resizing = false;
        this.active = false;
        this.wrapperHeight;
        this.bodyHeight;
    };

    Butter.prototype = {

        init: function(options) {
            if (options) {
                this.validateOptions(options);
            }

            this.active = true;
            this.resizing = false;
            this.wrapperDamper = this.defaults.wrapperDamper;
            this.wrapperId = this.defaults.wrapperId;
            this.cancelOnTouch = this.defaults.cancelOnTouch;

            this.wrapper = document.getElementById(this.wrapperId);
            this.wrapper.style.position = 'fixed';
            this.wrapper.style.width = '100%';

            this.wrapperHeight = this.wrapper.clientHeight;
            document.body.style.height = this.wrapperHeight + 'px';

            window.addEventListener('resize', this.resize.bind(this));
            if (this.cancelOnTouch) {
                window.addEventListener('touchstart', this.cancel.bind(this));
            }
            this.wrapperOffset = 0.0;
            this.animateId = window.requestAnimationFrame(this.animate.bind(this));

            // window.addEventListener('load', this.resize.bind(this));
        },

        wrapperUpdate: function() {
            var scrollY = (document.scrollingElement != undefined) ? document.scrollingElement.scrollTop : (document.documentElement.scrollTop || 0.0);
            this.wrapperOffset += (scrollY - this.wrapperOffset) * this.wrapperDamper;
            this.wrapper.style.transform = 'translate3d(0,' + (-this.wrapperOffset.toFixed(2)) + 'px, 0)';
        },

        checkResize: function() {
            if (this.wrapperHeight != this.wrapper.clientHeight) {
                this.resize();
            }
        },

        resize: function() {
            var self = this;
            if (!self.resizing) {
                self.resizing = true;
                window.cancelAnimationFrame(self.animateId);
                window.setTimeout(function() {
                    self.wrapperHeight = self.wrapper.clientHeight;
                    if (parseInt(document.body.style.height) != parseInt(self.wrapperHeight)) {
                        document.body.style.height = self.wrapperHeight + 'px';
                    }
                    self.animateId = window.requestAnimationFrame(self.animate.bind(self));
                    self.resizing = false;
                }, 150)
            }
        },

        animate: function() {
            this.checkResize();
            this.wrapperUpdate();
            this.animateId = window.requestAnimationFrame(this.animate.bind(this));
        },

        cancel: function() {
            if (this.active) {
                window.cancelAnimationFrame(this.animateId);

                window.removeEventListener('resize', this.resize);
                window.removeEventListener('touchstart', this.cancel);
                this.wrapper.removeAttribute('style');
                document.body.removeAttribute('style');

                this.active = false;
                this.wrapper = "";
                this.wrapperOffset = 0;
                this.resizing = true;
                this.animateId = "";
            }
        },
    };

    root.butter = new Butter();

})(this);


butter.init();






const like = document.querySelector('.like');
const mus = document.querySelector('.mus');
let clickCount = 0;

like.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 3) {
        mus.classList.toggle('open');
        // clickCount = 0; // Сбросить счетчик кликов после трех кликов
    }
});











