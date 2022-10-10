// =====Trend Slider====
$('.comment').slick({
    centerMode: false,
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                variableWidth: true,
                centerPadding: '40px',
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                variableWidth: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]

});