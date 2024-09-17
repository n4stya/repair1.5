let swiper;

function initSwiper() {
    if (window.innerWidth <= 767 && !swiper) {
        swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',

                renderBullet: function (index, className) {
                    return '<span class="' + className + '" style="margin: 0 6px;"></span>';
                },
            },
            slidesPerView: 'auto',
            spaceBetween: 0,
        });
    } else if (window.innerWidth > 767 && swiper) {
        swiper.destroy(true, true);
        swiper = null;
    }
}
window.addEventListener('resize', initSwiper);
initSwiper();

function showAll() {
    var allElements = document.querySelectorAll(".all");
    var hiddenElements = document.querySelectorAll(".hidden");
    var btn = document.getElementById("btn");

    if (window.innerWidth <= 1119) {
        allElements.forEach(function (element) {
            if (element.style.display === "none" || element.style.display === "") {
                element.style.display = "grid";
                btn.textContent = "Скрыть";
                btn.classList.add("rotate");
            } else {
                element.style.display = "none";
                btn.innerHTML = "Показать всe";
                btn.classList.remove("rotate");
            }
        });
    } else {
        hiddenElements.forEach(function (element) {
            if (element.style.display === "none" || element.style.display === "") {
                element.style.display = "grid";
                btn.textContent = "Скрыть";
                btn.classList.add("rotate");

            } else {
                element.style.display = "none";
                btn.innerHTML = "Показать всe";
                btn.classList.remove("rotate");
            }
        });
    }
}
document.getElementById("btn").addEventListener("onclick", showAll);