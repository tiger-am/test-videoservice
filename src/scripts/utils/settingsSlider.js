export const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 870,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 615,
            settings: {
                slidesToShow: 1,
            },
        },

    ]
};
