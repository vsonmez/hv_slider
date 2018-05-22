<h1>HV Slider</h1>
<p><strong>A lightweight javascript slider created with <a href="https://github.com/daneden/animate.css/" target="_new">Animate.css</a> and <a href="https://github.com/mikeric/rivets" target="_new">RivetsJS</a></strong></p>
<p>It is a JavaScript plug-in that you can dynamically create a slider with JSON data and does not need any other library like jQuery.</p>
<h2>Usage</h2>
<b>Sample Data</b>
<code><pre>var data = [
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
    ];</pre></code>

<b>Creating Slider</b>
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
        delay: 5000
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