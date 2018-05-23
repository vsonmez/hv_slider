<h1>HV Slider</h1>
<p><strong>A lightweight pure javascript slider created with <a href="https://github.com/daneden/animate.css/" target="_blank">Animate.css</a> and <a href="https://github.com/mikeric/rivets" target="_blank">RivetsJS</a></strong></p>
<p>It is a JavaScript plug-in that you can dynamically create a slider with JSON data and does not need any other library like jQuery.</p>
<p><a href="https://vsonmez.github.io/hv_slider/" target="_blank">Demo Page</a></p>
<h2>Usage</h2>
<b>Sample Data</b>
<i>main.js</i>
<pre>
var data = [
    {
        img: "img/slider_01.jpg",
        text: "lipsum 1",
        mySpecialData: "lorem"
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
</pre>
<p>You can add as many attributes as you want to the data field. Within the click event, for each item, the data you specify is returned.  Like "mySpecialData" in the first object of the array.</p>
<h3>Creating Slider</h3>
<i>main.js</i>
<pre>
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
        delay: 5000,
        callbackFN : function (data) {
            console.log(data);
        },
        maxWidth: 800,
        maxHeight: 450
    });
    mysldier.setData(data);
});
</pre>
<ul>
    <li><b>container :</b> is the id attribute of the slider element in html.</li>
    <li><b>delay :</b> specifies transition times between slider animations.</li>
    <li><b>effect :</b> specifies the effect to use in the slider transitions:
        <ul>
            <li>fade</li>
            <li>slide</li>
            <li>zoom</li>
            <li>rotate</li>
            <li>flip</li>
            <li>light</li>
            <li>bounce</li>
        </ul>
    </li>
    <li>
        <b>callbackFN :</b> callbackFN is the event declaration that you want triggered when the objects in the slider are clicked. The HV Slider sends data to the callbackFN for the clicked item.
    </li>
    <li>
        <b>maxWidth :</b> Maximum width for slider (default: 800 - numeric)
        <b>maxHeight :</b> maximum height for slider (default: 450 - numeric)
    </li>
</ul>
<i>index.html</i>
<pre>
&lt<span>!DOCTYPE html</span>&gt
&lt<span>html</span>&gt
    &lt<span>head</span>&gt
        &lt<span>meta charset="utf-8"</span>/&gt
        &lt<span>title</span>&gt&lt/title</span>&gt
        &lt<span>link rel="stylesheet" type="text/css" href="./css/animate.css"</span>/&gt
        &lt<span>link rel="stylesheet" type="text/css" href="./css/main.css"</span>/&gt
    &lt<span>/head</span>&gt
    &lt<span>body</span>&gt
      &lt<span>div id="slider"</span>&gt&lt/div</span>&gt
      &lt<span>script type="text/javascript" src="./js/rivets.js"</span>&gt&lt/script</span>&gt
      &lt<span>script type="text/javascript" src="./js/slider.js"</span>&gt&lt/script</span>&gt
      &lt<span>script type="text/javascript" src="./js/main.js"</span>&gt&lt/script</span>&gt
    &lt<span>/body</span>&gt
&lt<span>/html</span>&gt
</pre>
<h2>Version 0.1.1</h2>
<ul>
    <li><a href="https://github.com/vsonmez/hv_slider/issues/1">Click Event</a> added</li>
</ul>
<h2>Version 0.1.2</h2>
<ul>
    <li><a href="https://github.com/vsonmez/hv_slider/issues/2">Responsive Feature</a> added</li>
</ul>