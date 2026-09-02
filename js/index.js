let scCarousel = document.querySelector("#SC-Carousel"),
    nextCarousel = scCarousel.querySelector(".next"),
    prevCarousel = scCarousel.querySelector(".prev"),
    logoEle = document.querySelector("#Logo"),
    correctImgs = document.querySelectorAll(".title img"),
    navEle = document.querySelector("nav.navbar"),
    navLinks = navEle.querySelectorAll(".nav-link"),
    sections = document.querySelectorAll("section, header"),
    loadingPageELe = document.querySelector(".loadingPage");

    checkScrolledNav ();

    nextCarousel.addEventListener("click" , function () {
        let currentSlide = scCarousel.querySelector(".sc-Carousel-item.active"),
            newSlide = currentSlide.nextElementSibling ?? scCarousel.querySelector(".sc-Carousel-item:first-child"),
            currentName = newSlide.dataset.colorName;

            currentSlide.classList.remove("active");
            newSlide.classList.add("active");

            changeMainColor(currentName);
            updateImg(currentName, logoEle, 'logo');
            correctImgs.forEach(function (correctImgs) {
            updateImg(currentName, correctImgs, 'correct');
            });
        });
    prevCarousel.addEventListener("click" , function () {
        let currentSlide = scCarousel.querySelector(".sc-Carousel-item.active"),
            newSlide = currentSlide.previousElementSibling ?? scCarousel.querySelector(".sc-Carousel-item:last-child"),
            currentName = newSlide.dataset.colorName;


            currentSlide.classList.remove("active");
            newSlide.classList.add("active");

            changeMainColor(currentName);
            updateImg(currentName, logoEle, 'logo');
            correctImgs.forEach(function (correctImgs) {
            updateImg(currentName, correctImgs, 'correct');
            });
    });

    window.addEventListener("scroll", function() {
        checkScrolledNav ();

        sections.forEach(function(section) {
            updateNavLink(section.id);
        });

    });

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(e) {
            e.preventDefault();
            let currentNavLink = navEle.querySelector(".nav-link.active"),
                currentId = navLink.getAttribute("href"),
                currentSection = document.querySelector(currentId),
                topOfSection = currentSection.offsetTop;

            currentNavLink.classList.remove('active');
            navLink.classList.add('active');

            window.scrollTo(0, topOfSection - navEle.clientHeight);
        });
    });

    window.addEventListener("DOMContentLoaded" , function () {
        loadingPageELe.classList.add('hide');
        setTimeout(function () {
        loadingPageELe.classList.add('d-none');
        }, 1000);
    });