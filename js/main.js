//pc 검색화면
let gnbSrch = document.getElementById("btnSrch"); //a
let srchMenu = document.getElementById("srchWrap"); //div
let theIcon = document.getElementById("srchIcon"); //srch버튼i
let theIcon2 = document.getElementById("srchClose"); //x버튼i
let scrBlur = document.getElementById("blurFilter"); //backdrop filter
let flag = true;
let flag2 = true;

gnbSrch.onclick = function () {
	if (flag) {
		//열려라
		srchMenu.style.display = "block";
		scrBlur.classList.add("on");
		document.body.classList.add("noscroll");
		flag = false; //flag=0;
	} else if (flag !== true) {
		srchMenu.style.display = "none";
		scrBlur.classList.remove("on");
		document.body.classList.remove("noscroll");
		flag = true;
	}
};
theIcon2.onclick = function () {
	if (flag2) {
		srchMenu.style.display = "none";
		scrBlur.classList.remove("on");
		document.body.classList.remove("noscroll");
		flag = true;
	}
};

//배경 blur 클릭시 효과 (주메뉴, 검색메뉴 다 사라지게)
scrBlur.onclick = function () {
	if (flag2) {
		srchMenu.style.display = "none";
		scrBlur.classList.remove("on");
		document.body.classList.remove("noscroll");
		mobNav.classList.remove("on");
		navTitle.classList.remove("on");
		flag = true;
	}
};
//버튼2누르면 왼쪽으로 1920px, 슬라이드애니메이션효과(드래그효과) 미완미완!!
//버튼2누르면 왼쪽으로 1920px, 애니메이션효과
function slideBtn() {
	let slide = document.getElementById("slideBtn");
	let btn = slide.getElementsByTagName("button");

	let btn1 = document.getElementById("btn1");
	let btn2 = document.getElementById("btn2");
	let btn3 = document.getElementById("btn3");

	btn2.addEventListener("click", function () {
		document.getElementById("slideWrap").style.transform = "translate(-100vw)";
		document.getElementById("slideWrap").style.transition =
			"transform 0.2s ease 0s";
		btn2.classList.add("on");
		btn1.classList.remove("on");
		btn3.classList.remove("on");
	});
	btn3.addEventListener("click", function () {
		document.getElementById("slideWrap").style.transform = "translate(-200vw)";
		btn3.classList.add("on");
		btn1.classList.remove("on");
		btn2.classList.remove("on");
	});
	btn1.addEventListener("click", function () {
		document.getElementById("slideWrap").style.transform = "translate(0)";
		btn1.classList.add("on");
		btn2.classList.remove("on");
		btn3.classList.remove("on");
	});
}

window.addEventListener("load", slideBtn, false);

//언어선택 효과

let korBtn = document.getElementById("korBtn"),
	engBtn = document.getElementById("lngEng"),
	hdInner = document.getElementById("hdInner");

korBtn.addEventListener("click", function () {
	if (flag) {
		this.classList.add("turn");
		engBtn.style.display = "block";
		hdInner.classList.add("bg_fff");

		flag = false;
	} else {
		this.classList.remove("turn");
		engBtn.style.display = "none";
		hdInner.classList.remove("bg_fff");

		flag = true;
	}
});

//주메뉴 밑에 하위 li hover 시 backdrop filter blur

function scrBlurOpen() {
	const gnb = document.getElementById("gnb");

	console.log(gnb);
	gnb.addEventListener("mousemove", function () {
		scrBlur.classList.add("on");
	});
	gnb.addEventListener("mouseout", function () {
		scrBlur.classList.remove("on");
	});
}
window.addEventListener("load", scrBlurOpen, false);

//footer toggle 클릭시 ul 보이게/안보이게
//footer toggle 클릭시 회전
const familySite = document.querySelector(".toggle_family");
const familyList = document.querySelector("ul.familySites");
const familyToggle = document.querySelector(".footer_toggle");

familyToggle.addEventListener("click", function toggle() {
	this.classList.toggle("turn");
	familyList.classList.toggle("on");
	familySite.classList.toggle("on");
	addr.classList.remove("on");
});

//모바일 mobile copyright줄 누르면 화면열림
const copyRight = document.querySelector("button.copy");
const addr = document.querySelector(".address");
copyRight.addEventListener("click", function () {
	this.classList.toggle("turn");
	addr.classList.toggle("on");
	familyList.classList.remove("on");
});
//top버튼
const btnTop = document.querySelector(".btn_top");
btnTop.addEventListener("click", function (e) {
	e.preventDefault();
	window.scroll({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});

//lounge슬라이드 이미지
const slide = {
	wrap: document.querySelector(".slide2_wrap"),
	list: document.querySelector(".slide2_wrap"),
	img: document.querySelectorAll(".slide2 img"),
	btnNext: document.querySelector(".slide_next"),
	btnPrev: document.querySelector(".slide_pre"),
	width: 1130,
	margin: 60,
	num: document.querySelector(".slide_num.on"),
};
const slideBarTotal = document.querySelector(".slide_bar"),
	slideCount = Object.values(slide.img).length;
slide.wrap.style.width = (slide.width + slide.margin) * slideCount;
let currentIdx = 0;

const slideBar = document.querySelector(".bar_black");
const slideBarWidth = 320;
slideBar.style.width = slideBarWidth * slideCount;

//슬라이드, 슬라이드바, 숫자
function moveSlide(num) {
	slide.wrap.style.left = -num * 1190 + "px";
	slideBar.style.width = `${num * 320 + 320}px`;
	slide.num.innerHTML = num + 1;
	currentIdx = num;

	if (slideBarTotal.offsetWidth !== 960) {
		slideBar.style.width = `${num * 26 + 26}vw`;
	}
}
//클릭했을때 이미지 이상 넘어가지않게 + 버튼 on/off
slide.btnPrev.addEventListener("click", function () {
	if (currentIdx !== 0) {
		moveSlide(currentIdx - 1);
		this.classList.add("on");
		slide.btnNext.classList.remove("on");
	}
	if (currentIdx < 1) {
		this.classList.remove("on");
		slide.btnNext.classList.add("on");
	}
});
slide.btnNext.addEventListener("click", function () {
	if (currentIdx !== slideCount - 1) {
		moveSlide(currentIdx + 1);
		this.classList.add("on");
		slide.btnPrev.classList.remove("on");
	}
	if (currentIdx == slideCount - 1) {
		this.classList.remove("on");
		slide.btnPrev.classList.add("on");
	}
});

//mobile 주메뉴

//mobile 주메뉴 열고닫기 toggle
const mobBtn = document.querySelector(".mobBtn > button");
const mobNav = document.querySelector("nav.mob");
const navTitle = document.querySelector(".mobile_menu > h1");
mobBtn.addEventListener("click", () => {
	mobNav.classList.toggle("on");
	navTitle.classList.toggle("on");
	scrBlur.classList.toggle("on");
	document.body.classList.toggle("noscroll");
});

//mobile 주메뉴 닫기버튼
const navClose = document.querySelector(".btn_srch_close.mobile");
navClose.addEventListener("click", function () {
	mobNav.classList.remove("on");
	navTitle.classList.remove("on");
	scrBlur.classList.remove("on");
	document.body.classList.remove("noscroll");
});

//mobile 주메뉴 2depth 아코디언
const navLi = document.querySelectorAll("nav.mob > ul > li");
const navLiA = document.querySelectorAll("nav.mob > ul > li > a");
const subNavLi = document.querySelectorAll(".mob ul li > div > ul > li");

navLiA.forEach(item => {
	item.addEventListener("click", menuAction);
}, false);

function menuAction(item) {
	cur = item.currentTarget;
	parent = cur.parentElement;
	child = parent.children;
	num = Array.from(child).indexOf(cur);
	navLi.forEach(item => {
		item.classList.remove("on");
		item.classList.remove("turn");
	});
	parent.classList.add("on");
	parent.classList.add("turn");

	if (parent.classList.contains("on")) {
		cur.addEventListener(
			"click",
			function () {
				parent.classList.toggle("on");
				parent.classList.toggle("turn");
			},
			false
		);
	}
}

subNavLi.forEach(function (item) {
	item.addEventListener("click", subNavOpen);
});
function subNavOpen(item) {
	item.preventDefault();
	subNavLi.forEach(item => {
		item.classList.remove("on");
		item.classList.remove("turn");
	});
	this.classList.add("on");
	this.classList.add("turn");

	if (this.classList.contains("on")) {
		this.addEventListener(
			"click",
			function () {
				this.classList.toggle("on");
				this.classList.toggle("turn");
			},
			false
		);
	}
}

//mobile footer sitemap
const siteLi = document.querySelectorAll(".sitemap > ul > li");

siteLi.forEach(function (item) {
	item.addEventListener("click", siteOpen);
});
function siteOpen(item) {
	item.preventDefault();
	siteLi.forEach(item => {
		item.classList.remove("on");
		item.classList.remove("turn");
	});
	this.classList.add("on");
	this.classList.add("turn");
	if (this.classList.contains("on")) {
		this.addEventListener(
			"click",
			function () {
				this.classList.toggle("on");
				this.classList.toggle("turn");
			},
			false
		);
	}
}

// //슬라이더 드래그
// let slider = document.querySelector(".main_visual");
// let innerslider = document.querySelector(".slide_wrap");
// let pressed = false;
// let startx;
// let x;

// slider.addEventListener("mousedown", e => {
// 	pressed = true;
// 	startx = e.offsetX - innerslider.offsetLeft;
// });

// window.addEventListener("mouseup", () => {
// 	pressed = false;
// });
// slider.addEventListener("mousemove", e => {
// 	if (!pressed) return;
// 	e.preventDefault();
// 	x = e.offsetX;

// 	innerslider.style.left = `${x - startx}px`;
// 	checkboundary();
// });
// function checkboundary() {
// 	let outer = slider.getBoundingClientRect();
// 	let inner = innerslider.getBoundingClientRect();

// 	if (parseInt(innerslider.style.left) > 0) {
// 		innerslider.style.left = "100vw";
// 	} else if (inner.rignt < outer.right) {
// 		innerslider.style.left = "-100vw";
// 	}
// }
