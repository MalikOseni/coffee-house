var swiper = new Swiper(".hero-slider", {
//   spaceBetween: 3,
    grabCursor: true,
    loop:true,
    centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".product-slider", {
	//   spaceBetween: 3,
	grabCursor: true,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
    clickable: true,
	},
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  }
});

const previewContainer = document.querySelector('.menu');
const previewBox = previewContainer.querySelectorAll('.menu-preview');

document.querySelectorAll('.products .slide').forEach(products => {
  products.onclick = () => {
    previewContainer.style.display = 'flex';
    let name = products.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('active');
      }
    })
  }
});

previewContainer.querySelector('#close-preview').onclick = () => {
  previewContainer.style.display = "none";
      previewBox.forEach(close => {
					close.classList.remove("active");
				}
			);
}
var swiper = new Swiper(".swiper-container", {
	spaceBetween: 30,
  grabCursor: true,
  autoHeight:true,
	loop: false,
	centeredSlides: false,
	// autoplay: {
	// 	delay: 3500,
	// 	disableOnInteraction: true,
	// },
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	},
);
var swiper = new Swiper(".blog-slider", {
	spaceBetween: 30,
	grabCursor: true,
	autoHeight: true,
	loop: true,
	centeredSlides: false,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		700: {
			slidesPerView: 2,
		},
		1000: {
			slidesPerView: 3,
		},
	},
});

// header 
const navbar = document.querySelector('.header .navbar');
const menuBar = document.querySelector('#menu-btn');
const header = document.querySelector('.header');
const menu_item = document.querySelectorAll(".header .navbar a");

menuBar.onclick = () => {
	menuBar.classList.toggle('fa-times');
	navbar.classList.toggle('active');
};
document.addEventListener("scroll", () => {
	let scroll_position = window.scrollY;
	if (scroll_position > 130) {
		header.style.backgroundColor = "#333";
	} else {
		header.style.backgroundColor = "transparent";
	}
});
menu_item.forEach((item) => {
	item.addEventListener("click", () => {
		menuBar.classList.toggle("fa-times");
		navbar.classList.toggle("active");
	});
});
