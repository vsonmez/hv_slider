var data = [
    {
        img: "img/slider_01.jpg",
        text: "lipsum 1"
    },
    {
        img: "img/slider_02.jpg",
        text: "lipsum 2"
    },
    {
        img: "img/slider_03.jpg",
        text: "lipsum 3"
    },
    {
        img: "img/slider_04.jpg",
        text: "lipsum 4"
    },
    {
        img: "img/slider_05.jpg",
        text: "lipsum 5"
    }
];
window.addEventListener("load", function () {
    /*
    effects:
        fade
        slide
        zoom
        rotate
        flip
        light
        bounce
    */
    var mysldier_fade = new Slider({
        container: "slider_fade",
        effect: "fade",
        delay: 5000
    });
    mysldier_fade.setData(data);
    var mysldier_slide = new Slider({
        container: "slider_slide",
        effect: "slide",
        delay: 5000
    });
    mysldier_slide.setData(data);
    var mysldier_zoom = new Slider({
        container: "slider_zoom",
        effect: "zoom",
        delay: 5000
    });
    mysldier_zoom.setData(data);
    var mysldier_rotate = new Slider({
        container: "slider_rotate",
        effect: "rotate",
        delay: 5000
    });
    mysldier_rotate.setData(data);
    var mysldier_flip = new Slider({
        container: "slider_flip",
        effect: "flip",
        delay: 5000
    });
    mysldier_flip.setData(data);
    var mysldier = new Slider({
        container: "slider_light",
        effect: "light",
        delay: 5000
    });
    mysldier_bounce.setData(data);
    var mysldier = new Slider({
        container: "slider_bounce",
        effect: "bounce",
        delay: 5000
    });
    mysldier_bounce.setData(data);
});