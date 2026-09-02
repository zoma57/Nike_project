function changeMainColor (colorName) {
    let html = document.querySelector("html"),
        newColor = getComputedStyle(html).getPropertyValue(`--${colorName}-color`);

    html.style.setProperty('--main-color', newColor);
}

function updateImg (imgName, imgEle, commonName) {
    let currentSrc = imgEle.src,
        currentSrcArr = currentSrc.split('/');
    currentSrcArr[currentSrcArr.length - 1] = `${imgName}-${commonName}.png`;

    let newSrc = currentSrcArr.join('/');

    imgEle.setAttribute('src', newSrc);
}

function checkScrolledNav () {
    if (window.scrollY > 10) {
        navEle.classList.add("scrolled");
    } else {
        navEle.classList.remove("scrolled");
    }
}

function updateNavLink (sectionId) {
    let section  = document.querySelector(`#${sectionId}`);
        if (!section) return;
            let sectionTop = section.offsetTop,
            sectionHeight = section.clientHeight,
            sectionBottom = sectionTop + sectionHeight;

        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionBottom - 100) {
            let sectionId = section.getAttribute('id'),
                navLinkOfSection = document.querySelector(`a[href="#${sectionId}"]`),
                currentNavLink = navEle.querySelector(".nav-link.active");

                currentNavLink.classList.remove('active')
                navLinkOfSection.classList.add('active')
        }
}