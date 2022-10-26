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
