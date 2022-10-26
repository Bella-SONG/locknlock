let observedElements = document.querySelectorAll(".show");

const options = {
	threshold: 0.4,
};

const inViewCallback = entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add("inview");
		}
	});
};
let observer = new IntersectionObserver(inViewCallback, options);

observedElements.forEach(element => {
	let dataDelay = element.getAttribute("data-delay");

	element.style.transitionDelay = dataDelay + "ms";
	observer.observe(element);
});
