window.addEventListener("DOMContentLoaded", () => {
	const mobileMenuBtn = document.querySelector("#burger-menu");
	const nav = document.querySelector(".nav__right");
	const trigger = document.querySelectorAll(".lms__item__wrapper__trigger");
	const content = document.querySelectorAll(".lms__item__wrapper__content");

	mobileMenuBtn.addEventListener("click", function() {
		nav.classList.toggle("active__nav");
		if (nav.classList.contains("active__nav")) {
			this.classList.add("close");
		} else {
			this.removeAttribute("class");
		}
	});

	for (let i = 0; i < trigger.length; i++) {
		trigger[i].addEventListener("click", () => {
			for (let x = 0; x < content.length; x++) {
				content[x].style.display = "none";
				trigger[x].querySelector("svg").style.cssText = `transform: rotate(0deg)`;
			}

			trigger[i].querySelector("svg").style.cssText = `transform: rotate(45deg)`;
			content[i].style.display = "block";

			trigger[i].querySelector("svg").addEventListener("click", (e) => {
				e.stopPropagation();
				trigger[i].querySelector("svg").style.cssText = `transform: rotate(0deg)`;
				content[i].style.display = "none";
			});
		});
	}
});