// For image carousel
const allImages = document.querySelectorAll(".slider-imgBox");
let index = 0;

setInterval(() => {
	Array.from(allImages).forEach((image, i) => {
		if (i === index) {
			image.setAttribute("data-visible", "true");
		} else {
			image.setAttribute("data-visible", "false");
		}
	});
	index += 1;
	if (index === 3) {
		index = 0;
	}
}, 2000);

// For accordions
const items = document.querySelectorAll(".accordion button");

function toggleAccordion()
{
	const itemToggle = this.getAttribute("aria-expanded");

	for (i = 0; i < items.length; i++)
	{
		items[i].setAttribute("aria-expanded", "false");
	}

	if (itemToggle == "false")
	{
		this.setAttribute("aria-expanded", "true");
	}
}

items.forEach((item) =>
	item.addEventListener("click", toggleAccordion)
);

// Navbar Animation on scroll
window.addEventListener("scroll", function ()
{
	const nav = document.querySelector("#navbar");
	nav.classList.toggle("sticky", window.scrollY > 0);
});
