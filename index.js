//
document.querySelectorAll(".faq-header").forEach((button) => {
	button.addEventListener("click", () => {
		const card = button.parentElement;
		const body = card.querySelector(".faq-body");

		// Toggle Active Class
		const isOpen = card.classList.contains("active");

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
