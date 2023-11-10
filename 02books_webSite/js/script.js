// search

const searchButton = document.getElementById('search_button');
const searchClose = document.getElementById('search_close');
const searchContent = document.getElementById('search_content');


if(searchButton){
    searchButton.addEventListener('click',()=>{
        searchContent.classList.add('show_search')
    })
}

if(searchClose){
    searchClose.addEventListener('click',()=>{
        searchContent.classList.remove('show_search')
    })
}

// login

const loginButton = document.getElementById('login_button');
const loginClose = document.getElementById('login_close');
const loginContent = document.getElementById('login_content');


if(loginButton){
    loginButton.addEventListener('click',()=>{
        loginContent.classList.add('show_login')
    })
}

if(loginClose){
    loginClose.addEventListener('click',()=>{
        loginContent.classList.remove('show_login')
    })
}


// add Shdow header
const shadowHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow_header'):
                        header.classList.remove('shadow_header')
}

window.addEventListener('scroll',shadowHeader)




// home silder

let swiperHome = new Swiper('.home_swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',
    
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },

    breakpoints:{
        1220:{
            spaceBetween:-32,
        }
    }
  });

//   featured swiper

let swiperFeatured = new Swiper('.featured_swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',
    
    navigation : {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev',
    },

    breakpoints:{
        1150:{
            slidesPerView : 4,
            centeredSlides : false,
        }
    }
  });

//   new swiper

let swipernew = new Swiper('.new_swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView:'auto',

    breakpoints:{
        1150:{
            slidesPerView : 3,
        }
    }
  });

//   testimonial

let swiperTestimonial = new Swiper('.testimonial_swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',
    

    breakpoints:{
        1150:{
            slidesPerView : 3,
            centeredSlides : false,
        }
    }
  });


// show scroll up

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll_up');
    this.scrollY >= 350 ? scrollUp.classList.add('show_scroll'):
                            scrollUp.classList.remove('show_scroll');
}

window.addEventListener('scroll',scrollUp);


// scroll scrtion active link

const sections = document.querySelectorAll('testimonial')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive);


// theme 

const themeButton = document.getElementById('theme_button')
const darkTheme = 'dark_theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})