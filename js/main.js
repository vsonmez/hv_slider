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
        delay: 5000,
        callbackFN : function (data) {
            console.log(data);
        }
    });
    mysldier_fade.setData(data1);
    var mysldier_slide = new Slider({
        container: "slider_slide",
        effect: "slide",
        delay: 5000,
        callbackFN : function (data) {
            console.log(data);
        }
    });
    mysldier_slide.setData(data2);
    var mysldier_zoom = new Slider({
        container: "slider_zoom",
        effect: "zoom",
        delay: 5000,
        callbackFN : function (data) {
            console.log(data);
        }
    });
    mysldier_zoom.setData(data3);
    var mysldier_rotate = new Slider({
        container: "slider_rotate",
        effect: "rotate",
        delay: 5000,
        callbackFN : function (data) {
            console.log(data);
        }
    });
    mysldier_rotate.setData(data4);
    var mysldier_flip = new Slider({
        container: "slider_flip",
        effect: "flip",
        delay: 5000,
        callbackFN : function (data) {
            console.log(data);
        }
    });
    mysldier_flip.setData(data5);
    var mysldier_light = new Slider({
        container: "slider_light",
        effect: "light",
        delay: 5000,
        callbackFN : function (data) {
            console.log(data);
        }
    });
    mysldier_light.setData(data6);
    var mysldier_bounce = new Slider({
        container: "slider_bounce",
        effect: "bounce",
        delay: 5000,
        callbackFN : function (data) {
            console.log(data);
        }
    });
    mysldier_bounce.setData(data7);
});