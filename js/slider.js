var Slider = function (options) {
    this.options = options;
    this.container = document.getElementById(this.options.container);
    this.container.classList.add("slider");
};
Slider.prototype.setData = function(data){
    this.data = data;
    this.render();
};
Slider.prototype.switchSlide = function(activeitem){
    for (var i = 0; i < this.data.length; i++) {
        this.data[i].active = false;
        this.data[i].deactive = true;
    }
    this.data[activeitem].active = true;
    this.data[activeitem].deactive = false;
};
Slider.prototype.autoRun = function(){
    this.activeitem = 0;
    var self = this;
    function startTimer() {
        self.timer = setInterval(function () {
            self.activeitem += 1;
            if (self.activeitem === self.data.length) {
                self.activeitem = 0;
            }
            self.switchSlide(self.activeitem);
        }, self.options.delay);
    }
    this.container.addEventListener("mouseover", function () {
        clearInterval(self.timer);
    });
    this.container.addEventListener("mouseleave", function () {
        startTimer();
    });
    startTimer();
};
Slider.prototype.controlPanelHTML = function(){
    var controlPanel = document.createElement("ul");
    controlPanel.classList.add("slider_control_panel");
    this.container.appendChild(controlPanel);
    var link = document.createElement("li");
    link.setAttribute("rv-each-data", "data");
    link.setAttribute("rv-on-click", "controller.clickEvent");
    link.setAttribute("rv-class-active", "data.active");
    controlPanel.appendChild(link);
};
Slider.prototype.render = function(){
    var list = document.createElement("ul");
    var self = this;
    list.id = "slider_list";
    list.classList.add("slider_list");
    this.container.appendChild(list);
    var li = document.createElement("li");
    li.classList.add("animated", "slider_item");
    li.setAttribute("rv-each-data", "data");
    li.setAttribute("rv-on-click","controller.itemClickEvent");
    li.setAttribute("rv-class-active", "data.active");
    switch (this.options.effect) {
        case "fade":
            li.setAttribute("rv-class-" + this.options.effect + "in", "data.active");
            li.setAttribute("rv-class-" + this.options.effect + "out", "data.deactive");
            break;
        case "slide":
            li.setAttribute("rv-class-" + this.options.effect + "inleft", "data.active");
            li.setAttribute("rv-class-" + this.options.effect + "outright", "data.deactive");
            break;
        case "rotate":
            li.setAttribute("rv-class-" + this.options.effect + "indownleft", "data.active");
            li.setAttribute("rv-class-" + this.options.effect + "outdownright", "data.deactive");
            break;
        case "flip":
            li.setAttribute("rv-class-" + this.options.effect + "inx", "data.active");
            li.setAttribute("rv-class-" + this.options.effect + "outx", "data.deactive");
            break;
        case "light":
            li.setAttribute("rv-class-" + this.options.effect + "speedin", "data.active");
            li.setAttribute("rv-class-" + this.options.effect + "speedout", "data.deactive");
            break;
        case "bounce":
            li.setAttribute("rv-class-" + this.options.effect + "indown", "data.active");
            li.setAttribute("rv-class-" + this.options.effect + "outdown", "data.deactive");
            break;
        case "zoom":
            li.setAttribute("rv-class-" + this.options.effect + "inleft", "data.active");
            li.setAttribute("rv-class-" + this.options.effect + "outright", "data.deactive");
            break;
        default:
            li.setAttribute("rv-class-fadein", "data.active");
            li.setAttribute("rv-class-fadeout", "data.deactive");
            break;
    }
    list.appendChild(li);
    var img = document.createElement("img");
    img.setAttribute("rv-src", "data.img");
    li.appendChild(img);
    var text = document.createElement("span");
    text.setAttribute("rv-text", "data.text");
    text.classList.add("slider_item_text", "animated");
    li.appendChild(text);
    this.controlPanelHTML();
    var controller = {
        clickEvent: function(event, binding) {
            self.switchSlide(binding.index);
            self.activeitem = parseInt(binding.index);
        },
        itemClickEvent: function (event, binding) {
            if (self.options.callbackFN && self.options.callbackFN instanceof Function) {
                self.options.callbackFN(binding.data);
            }
        }
    };
    rivets.bind(document.getElementById(this.container.id), {
        data: self.data, 
        controller: controller
    });
    for (var i = 0; i < list.children.length; i++) {
        list.children[i].style.zIndex = list.children.length - i;
    }
    this.container.children[1].children[0].classList.add("active");
    this.autoRun();
};
