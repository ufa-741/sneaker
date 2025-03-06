
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const sneakers = document.querySelectorAll(".sneaker");

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();

        sneakers.forEach(sneaker => {
            const brand = sneaker.getAttribute("data-brand").toLowerCase();

            if (brand.includes(searchTerm) || searchTerm === "") {
                sneaker.style.display = "flex"; 
            } else {
                sneaker.style.display = "none"; 
            }
        });
    });
});






