<h1>HV Slider</h1>
<strong>A lightweight javascript slider created with <a href="https://github.com/daneden/animate.css/" target="_new">Animate.css</a> and <a href="https://github.com/mikeric/rivets" target="_new">RivetsJS</a></strong>

<p>It is a JavaScript plug-in that you can dynamically create a slider with JSON data. It does not need any other library like jQuery. It was created using only RivetsJS and Animate.css.</p>
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
<code><pre>
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
    </pre></code>
<i>index.html</i>
<code><pre>
        &lt!DOCTYPE html&gt
        &lthtml&gt
        &lthead&gt
            &ltmeta charset="utf-8"&gt
            &lttitle&gt&lt/title&gt
            &ltlink rel="stylesheet" type="text/css" href="./css/animate.css"&gt
            &ltlink rel="stylesheet" type="text/css" href="./css/main.css"&gt
        &lt/head&gt
        &ltbody&gt
            &ltdiv id="slider"&gt&lt/div&gt
          &ltscript type="text/javascript" src="./js/rivets.js"&gt&lt/script&gt
          &ltscript type="text/javascript" src="./js/slider.js"&gt&lt/script&gt
          &ltscript type="text/javascript" src="./js/main.js"&gt&lt/script&gt
        &lt/body&gt
        &lt/html&gt
</pre></code>