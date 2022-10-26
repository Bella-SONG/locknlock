//주메뉴 검색창 클릭으로 띄우기

//토글키 - 하나의 키에 두가지 기능이 있는것 - 이지만, 여기서는 아이콘을 아예 다르게 원래 넣었기 때문에 조금 다르게 작성되었다.
//window.onload안넣으면 작동안됨
function srchLoad() {
	let gnbSrch = document.getElementById("btnSrch"); //a
	let srchMenu = document.getElementById("srchWrap"); //div
	let theIcon = document.getElementById("srchIcon"); //srch버튼i
	let theIcon2 = document.getElementById("srchClose"); //x버튼i
	let scrBlur = document.getElementById("blurFilter"); //x버튼i
	let flag = true;
	let flag2 = true;
	//한버튼으로 이미지 전환이아니라 이미 아이콘이 두개가 있엇음에, flag, flag2로 변수를 두개로 해봄.

	gnbSrch.onclick = function () {
		if (flag) {
			//열려라
			srchMenu.style.display = "block";
			scrBlur.style.display = "block";

			flag = false; //flag=0;
		}
		theIcon2.onclick = scrBlur.onclick = function () {
			if (flag2) {
				srchMenu.style.display = "none";
				scrBlur.style.display = "none";
				flag = true;
				//여기해서 이해는 안가는데 발견한 신기한점 flag=true를 꼭 해야 반복이 가능하다.
				//변수 flag2를 따로만들어주고, 마지막에 flag=true;로 해서 끝내야 제대로 작동을 하는 것을 발견, true를 false로 바꾼다던지 마지막에 flag를 flag2로 바꾼다던지 하면 안됨 - 한번은 켯다 껏다가 되는데 반복이 안되는 상황이 발생.
			}
		};
	};
}
window.addEventListener("load", srchLoad, false);
function slideBtn() {
	let slide = document.getElementById("slideBtn"); //ul
	let btn = slide.getElementsByTagName("button");
	let arr = Array.prototype.slice.call(btn);

	let btn1 = (arr[0] = document.getElementById("btn1"));
	let btn2 = (arr[1] = document.getElementById("btn2"));
	let btn3 = (arr[2] = document.getElementById("btn3"));

	function slideOnclick1() {
		document.getElementById("slideWrap").style.transform = "translate(0)";
		document.getElementById("slideWrap").style.transition =
			"transform 0.2s ease 0s";
		arr[0].classList.add("on");
		arr[1].classList.remove("on");
		arr[2].classList.remove("on");
	}
	function slideOnclick2() {
		document.getElementById("slideWrap").style.transform = "translate(-100vw)";
		document.getElementById("slideWrap").style.transition =
			"transform 0.2s ease 0s";
		arr[1].classList.add("on");
		arr[0].classList.remove("on");
		arr[2].classList.remove("on");
	}
	function slideOnclick3() {
		document.getElementById("slideWrap").style.transform = "translate(-200vw)";
		document.getElementById("slideWrap").style.transition =
			"transform 0.2s ease 0s";
		arr[2].classList.add("on");
		arr[0].classList.remove("on");
		arr[1].classList.remove("on");
	}
	arr[0].addEventListener("click", slideOnclick1);
	arr[1].addEventListener("click", slideOnclick2);
	arr[2].addEventListener("click", slideOnclick3);
}

window.addEventListener("load", slideBtn, false);
//버튼2누르면 왼쪽으로 1920px, 애니메이션효과
function slideBtn() {
	let slide = document.getElementById("slideBtn");
	let btn = slide.getElementsByTagName("button");
	let arr = Array.prototype.slice.call(btn);
	let btn1 = document.getElementById("btn1");
	let btn2 = document.getElementById("btn2");
	let btn3 = document.getElementById("btn3");

	btn[1].addEventListener("click", function () {
		document.getElementById("slideWrap").style.transform = "translate(-100vw)";
		document.getElementById("slideWrap").style.transition =
			"transform 0.2s ease 0s";
		btn2.classList.add("on");
		btn1.classList.remove("on");
		btn3.classList.remove("on");
	});
	btn[2].addEventListener("click", function () {
		document.getElementById("slideWrap").style.transform = "translate(-200vw)";
		btn3.classList.add("on");
		btn1.classList.remove("on");
		btn2.classList.remove("on");
	});
	btn[0].addEventListener("click", function () {
		document.getElementById("slideWrap").style.transform = "translate(0)";
		btn1.classList.add("on");
		btn2.classList.remove("on");
		btn3.classList.remove("on");
	});
}

window.addEventListener("load", slideBtn, false);

//언어선택 효과
function lngLoad() {
	let korBtn = document.getElementById("korBtn"),
		arrIcon = document.getElementById("arrIcon"),
		engBtn = document.getElementById("lngEng"),
		hdInner = document.getElementById("hdInner"),
		x = document.getElementsByClassName("b"),
		flag3 = true;

	console.log(x);
	korBtn.onclick = function () {
		if (flag3) {
			engBtn.style.display = "block";
			arrIcon.style.transform = "rotate(-180deg)";
			hdInner.classList.add("bg_fff");
			var i;
			for (i = 0; i < x.length; i++) {
				x[i].classList.add("txt_black");
			}

			flag3 = false;
		} else {
			engBtn.style.display = "none";
			arrIcon.style.transform = "rotate(0)";
			hdInner.classList.remove("bg_fff");
			var i;
			for (i = 0; i < x.length; i++) {
				x[i].classList.remove("txt_black");
			}

			flag3 = true;
		}
	};
}
window.addEventListener("load", lngLoad, false);

//클릭했을때 이미지 이상 넘어가지않게 + 버튼 on/off
btnPrev.addEventListener("click", function () {
	if (currentIdx !== 0) {
		moveSlide(currentIdx - 1);
		this.classList.add("on");
		btnNext.classList.remove("on");
	}
	if (currentIdx < 1) {
		this.classList.remove("on");
		btnNext.classList.add("on");
	}
});
btnNext.addEventListener("click", function () {
	if (currentIdx !== slideCount - 1) {
		moveSlide(currentIdx + 1);
		this.classList.add("on");
		btnPrev.classList.remove("on");
	}
	if (currentIdx == slideCount - 1) {
		this.classList.remove("on");
		btnPrev.classList.add("on");
	}
});

//lounge슬라이드 이미지
const slides = document.querySelector(".slide2_wrap");
const slideLi = document.querySelectorAll(".slide2");
const slideImg = document.querySelectorAll(".slide2 img");
const btnNext = document.querySelector(".slide_next");
const btnPrev = document.querySelector(".slide_pre");
const slideCount = slideImg.length;
let currentIdx = 0;
const slideWidth = 1130;
const slideMargin = 60;
slides.style.width = (slideWidth + slideMargin) * slideCount;

const slideBar = document.querySelector(".bar_black");
const slideBarWidth = 320;
slideBar.style.width = slideBarWidth * slideCount;
function moveSlide(num) {
	slides.style.left = -num * 1190 + "px";
	slideBar.style.width = `${num * 320 + 320}px`;
	currentIdx = num;
}
//클릭했을때 이미지 이상 넘어가지않게 + 버튼 on/off
btnPrev.addEventListener("click", function () {
	if (currentIdx !== 0) {
		moveSlide(currentIdx - 1);
		this.classList.add("on");
		btnNext.classList.remove("on");
	}
	if (currentIdx < 1) {
		this.classList.remove("on");
		btnNext.classList.add("on");
	}
});
btnNext.addEventListener("click", function () {
	if (currentIdx !== slideCount - 1) {
		moveSlide(currentIdx + 1);
		this.classList.add("on");
		btnPrev.classList.remove("on");
	}
	if (currentIdx == slideCount - 1) {
		this.classList.remove("on");
		btnPrev.classList.add("on");
	}
});

//mobile footer sitemap 방법1
// const siteLi = document.querySelectorAll(".sitemap > ul > li");
// const sitesub = document.querySelectorAll("	.sitemap > ul > li > div > ul > li");
// siteLi.forEach(function (item) {
// 	item.addEventListener("click", siteOpen);
// });
// function siteOpen(item) {
// 	item.preventDefault();
// 	siteLi.forEach(item => {
// 		item.classList.remove("on");
// 	});
// 	this.classList.toggle("on");
// }

// //mobile footer sitemap 방법2
const siteLi = document.querySelectorAll(".sitemap > ul > li");
const sitesub = document.querySelectorAll("	.sitemap > ul > li > div > ul > li");
siteLi.forEach(function (item) {
	item.addEventListener("click", siteOpen);
});

function close() {
	for (i = 0; i < siteLi.length; i++) {
		siteLi[i].classList.remove("on");
	}
}
function siteOpen(item) {
	item.preventDefault();
	close();
	this.classList.toggle("on");
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
	});
	this.classList.toggle("on");
	if (this.classList.contains("on")) {
		this.addEventListener(
			"click",
			function () {
				this.classList.toggle("on");
			},
			false
		);
	}
}
const subNavLi = document.querySelectorAll(".mob ul li > div > ul > li");

subNavLi.forEach(function (item) {
	item.addEventListener("click", subNavOpen);
});
function subNavOpen(item) {
	item.preventDefault();
	subNavLi.forEach(item => {
		item.classList.remove("on");
	});
	this.classList.toggle("on");

	if (this.classList.contains("on")) {
		this.addEventListener(
			"click",
			function () {
				this.classList.toggle("on");
			},
			false
		);
	}
}

//mobile 주메뉴 열고닫기 toggle
const mobBtn = document.querySelector(".mobBtn > button");
const mobNav = document.querySelector("nav.mob");
const navTitle = document.querySelector(".mobile_menu > h1");
mobBtn.addEventListener("click", () => {
	mobNav.classList.toggle("on");
	navTitle.classList.toggle("on");
	scrBlur.classList.toggle("on");
	document.body.classList.toggle("noscroll");
	if (!mobNav.classList.contains("on")) {
		subNavLi.forEach(item => {
			item.classList.remove("on");
		});
		navLi.forEach(item => {
			item.classList.remove("on");
		});
	}
});

//mobile 주메뉴 닫기버튼
const navClose = document.querySelector(".btn_srch_close.mobile");
navClose.addEventListener("click", function () {
	mobNav.classList.remove("on");
	navTitle.classList.remove("on");
	scrBlur.classList.remove("on");
	document.body.classList.remove("noscroll");
	subNavLi.forEach(item => {
		item.classList.remove("on");
	});
});
