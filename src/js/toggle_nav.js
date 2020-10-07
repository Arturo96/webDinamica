const toggleNav = () => {
	const d = document,
		header = d.getElementById("header"),
		headerBtn = d.getElementById("headerBtn"),
		main = d.getElementById("main");

	addEventListener("resize", e => {
		if(matchMedia('(min-width: 45em)').matches && header.classList.contains("is-active")) {
			header.classList.remove("is-active");
		}
	})

	d.addEventListener("click", e => {
		if (e.target.matches(".header--btn, .header--btn *")) {
			e.preventDefault();
			header.classList.toggle("is-active");
			headerBtn.classList.toggle("is-active");
			main.classList.toggle("is-active");
		}

	});

};

export default toggleNav;
