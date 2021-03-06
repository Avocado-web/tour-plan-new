$(document).ready(() => {
    const hotelSlider = new Swiper('.hotel-slider', {
        // Optional parameters
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.hotel-slider__button--next',
            prevEl: '.hotel-slider__button--prev',
        },
        keyboard: {
            enabled: true,
        },
        effect: "coverflow",
    });

    const reviewsSlider = new Swiper('.reviews-slider', {
        // Optional parameters
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.reviews-slider__button--next',
            prevEl: '.reviews-slider__button--prev',
        },
        keyboard: {
            enabled: true,
        },
    });


    var menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", function() {
        document
            .querySelector(".navbar-button")
            .classList.toggle("navbar-button--visible");
    });

    let modalButton = $("[data-toggle=modal]");
    let closeModalButton = $(".modal__close");
    let maskModal = $(".modal__overlay");
    modalButton.on("click", openModal);
    closeModalButton.on("click", closeModal);
    maskModal.on("click", closeModal);

    function openModal() {
        const modalOverlay = $(".modal__overlay");
        const modalDialog = $(".modal__dialog");
        modalOverlay.addClass("modal__overlay--visible");
        modalDialog.addClass("modal__dialog--visible");
    }

    function closeModal(event) {
        event.preventDefault();
        const modalOverlay = $(".modal__overlay");
        const modalDialog = $(".modal__dialog");
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
    }

    $(document).keyup(function(event) {
        if (event.key === "Escape" || event.keyCode === 27) {
            event.preventDefault();
            const modalOverlay = $(".modal__overlay");
            const modalDialog = $(".modal__dialog");
            modalOverlay.removeClass("modal__overlay--visible");
            modalDialog.removeClass("modal__dialog--visible");
        }
    });

    $(".form").each(function() {
        $(this).validate({
            errorClass: "invalid",
            rules: {
                phone: {
                    minlength: 18,
                },
            },
            messages: {
                name: {
                    required: "Please enter your name",
                },
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format name@domain.com",
                },
                phone: {
                    required: "Please, fill the number field",
                    minlength: "Please, fill full phone number",
                },
            },
        });
    });

    $(".phone").mask("+7 (999) 999-99-99");


    $("[data-toggle=modal]").mouseenter(function() {
        $("body").css("overflow", "hidden");
    }).mouseleave(function() {
        $("body").css("overflow", "visible");
    });

    AOS.init();
});