window.addEventListener("DOMContentLoaded", () => {
	const mobileMenuBtn = document.querySelector("#burger-menu");
	const nav = document.querySelector(".nav__right");

	mobileMenuBtn.addEventListener("click", function() {
		nav.classList.toggle("active__nav");
		if (nav.classList.contains("active__nav")) {
			this.classList.add("close");
		} else {
			this.removeAttribute("class");
		}
	});
});