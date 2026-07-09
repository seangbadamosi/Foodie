//
document.querySelectorAll(".faq-header").forEach((button) => {
	button.addEventListener("click", () => {
		const card = button.parentElement;
		const body = card.querySelector(".faq-body");

		// Toggle Active Class
		const isOpen = card.classList.contains("");

		// Close all other cards (optional, remove if you want multiple open)
		document.querySelectorAll(".faq-card").forEach((otherCard) => {
			otherCard.classList.remove("active");
			otherCard.querySelector(".faq-body").style.maxHeight = null;
		});

		if (!isOpen) {
			card.classList.add("active");
			body.style.maxHeight = body.scrollHeight + "px";
		}
	});
});

// for side nav
const sidenav = document.querySelector(".sidenav");
const trigger = document.querySelector(".sidenav-trigger");

// CREATE OVERLAY
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

// OPEN SIDENAV
trigger.addEventListener("click", (e) => {
	e.preventDefault();

	sidenav.classList.add("active");
	overlay.classList.add("active");
});

// CLOSE SIDENAV
overlay.addEventListener("click", () => {
	sidenav.classList.remove("active");
	overlay.classList.remove("active");
});

// for zooming image
// const image = document.querySelector(".food-img");
// const lightbox = document.querySelector(".lightbox");

// image.addEventListener("click", () => {
// 	lightbox.classList.add("active");
// });

// lightbox.addEventListener("click", () => {
// 	lightbox.classList.remove("active");
// });

// document.addEventListener("keydown", (e) => {
// 	if (e.key === "Escape") {
// 		lightbox.classList.remove("active");
// 	}
// });

// for zooming images
const images = document.querySelectorAll(".zoomable");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

images.forEach((image) => {
	image.addEventListener("click", () => {
		lightboxImg.src = image.src;
		lightbox.classList.add("active");
	});
});

lightbox.addEventListener("click", () => {
	lightbox.classList.remove("active");
});
