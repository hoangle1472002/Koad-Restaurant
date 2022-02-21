const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const nav = $('.nav');
//Nav__list--small
const navListBtn = $('.nav__list--small--btn');
const navOptionListSmall = $('.nav__option--small--list');
const backBtn = $('.back--btn');
navListBtn.onclick = function() {
    navOptionListSmall.style.right = '100%';
}
backBtn.onclick = function() {
    navOptionListSmall.style.right = '-450px';
}

//Scroll Nav
var preScrollPos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if(currentScrollPos > preScrollPos) {
        nav.style.top = -73.6 +'px';
    }
    else if(currentScrollPos < preScrollPos) 
    {
        nav.style.top = 0 +'px';
    }
    preScrollPos = currentScrollPos;
}

//Slide image
const introMenu = $('.intro__menu');
const cmtList = $('.cmt__list');
const introMenuItem = $('.intro__menu--item');
const introMenuItemLength =$$('.intro__menu--item').length;
const introMenuItemWidth = introMenuItem.offsetWidth;
const cmtDot = $('.cmt--dot');
const cmtItem = $('.cmt__item');
const cmtItems = $$('.cmt__item');

const cmtItemWidth = cmtItem.offsetWidth;  
const cmtDots = $$('.cmt--dot');
const preBtn = $('.intro__preBtn');
const nextBtn = $('.intro__nextBtn');
const menuDotItems = $$('.menu__dot--item');
let position = 0;
let index = 0;

nextBtn.onclick = function()
{
    handleSlideImage(1);
};

preBtn.onclick = function()
{
    handleSlideImage(-1);
};
[...cmtDots].forEach((item)=>
    item.addEventListener('click',function(e)
    {
        const cmtDot = parseInt(e.target.dataset.index);
        index = cmtDot;
        position = -1 * index * (cmtItemWidth + 30);
        cmtList.style = `transform : translateX(${position}px)`;
       $('.cmt--dot.active').classList.remove('active');
        item.classList.add('active');

    })
);
[...menuDotItems].forEach( (item)=>
    item.addEventListener('click',function(e)
    {
        const menuDotIndex  = parseInt(e.target.dataset.index);
        index = menuDotIndex;
        position = -1 * index * (introMenuItemWidth +30);
        introMenu.style = `transform : translateX(${position}px)`;
       $('.menu__dot--item.active').classList.remove('active');
        item.classList.add('active');

    })
)

function handleSlideImage(direction)
{
    if(direction === 1)
    {
        if(index >= introMenuItemLength - 2 - 1) {
            index = introMenuItemLength - 2 - 1;
            return;
        };
        position =position - ( introMenuItemWidth + 30 ); // - them cho margin 2ben 15
        introMenu.style = `transform : translateX(${position}px)`;
        index++;
    }
    else if(direction === -1)
    {
        if(index <= 0) {
            index = 0;
            return;
        }; 
        
        position =position + ( introMenuItemWidth + 30 ); // + them cho margin 2ben 15
        introMenu.style = `transform : translateX(${position}px)`;
        index--;
    }
    $('.menu__dot--item.active').classList.remove('active');
    menuDotItems[index].classList.add('active');

}


//Gallery image
const galleryClose = $('.gallery__close');
const galleryNext = $('.gallery__next');
const galleryPre = $('.gallery__pre');
const galleryImageCmt = $$('.down__cmt--img')
const galleryImage = $('.gallery__img');
const gallery = $('.gallery');
var galleryIndex = 0;
function galleryShow() {
    if(galleryIndex == 0)
        {
            galleryPre.classList.add('hide');
        }
    else{
        galleryPre.classList.remove('hide');
        }
    if(galleryIndex == galleryImageCmt.length -1)
        {
            galleryNext.classList.add('hide');
        }
    else{
        galleryNext.classList.remove('hide');
        }
    galleryImage.src = galleryImageCmt[galleryIndex].src;
    gallery.classList.add('gallery--show');
}
galleryImageCmt.forEach((item,index) => {
    item.onclick = function () {
        galleryIndex = index;
        galleryShow();
    }
})

document.addEventListener('keydown',function (e) {
    if(e.keyCode == 27)
    {
       gallery.classList.remove('gallery--show');
    }
})

galleryClose.onclick = function () {
    gallery.classList.remove('gallery--show');
}

galleryNext.onclick = function () {
    if(galleryIndex < galleryImageCmt.length - 1)
    {
        galleryIndex++;
        galleryShow();
    }
}
galleryPre.onclick = function () {
    if(galleryIndex > 0)
    {
        galleryIndex--
        galleryShow();
    }
}
