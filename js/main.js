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
    var mysldier = new Slider({
        container: "slider",
        effect: "zoom",
        delay: 5000
    });
    mysldier.setData(data);
});