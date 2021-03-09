// silence

document.addEventListener("DOMContentLoaded", function () {
	const select_menu = document.querySelector(".filter");

	select_menu.addEventListener("change", function (e) {
		const movie_type = e.target.value;

		const active_movies = document.querySelectorAll(".item.active");

		active_movies.forEach(function (item) {
			item.classList.remove("active");
		});

		const individual_movies = document.querySelectorAll(`.item.${movie_type}`);
		individual_movies.forEach(function (item) {
			item.classList.add("active");

		});
	});
});