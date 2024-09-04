// смена цвета картинки
jQuery(document).ready(function($){
$("div.botton1>span:nth-child(1)").click(function(){
 var varColor = ["green", "red", "blueviolet", "yellow"];
 var hasClass;
 for (var i = 0; i <=3; i++){
  if (hasClass = $(".container>div>div").hasClass(varColor[i])){
   $(".container>div>div").removeClass(varColor[i]);
  }
 }
   $(".container>div>div").addClass("green");
   });
   
   $("div.botton1>span:nth-child(2)").click(function(){
 var varColor = ["green", "red", "blueviolet", "yellow"];
 var hasClass;
 for (var i = 0; i <=3; i++){
  if (hasClass = $(".container>div>div").hasClass(varColor[i])){
   $(".container>div>div").removeClass(varColor[i]);
  }
 }
   $(".container>div>div").addClass("red");
   });
   
   $("div.botton1>span:nth-child(3)").click(function(){
 var varColor = ["green", "red", "blueviolet", "yellow"];
 var hasClass;
 for (var i = 0; i <=3; i++){
  if (hasClass = $(".container>div>div").hasClass(varColor[i])){
   $(".container>div>div").removeClass(varColor[i]);
  }
 }
   $(".container>div>div").addClass("blueviolet");
   });
   
   $("div.botton1>span:nth-child(4)").click(function(){
 var varColor = ["green", "red", "blueviolet", "yellow"];
 var hasClass;
 for (var i = 0; i <=3; i++){
  if (hasClass = $(".container>div>div").hasClass(varColor[i])){
   $(".container>div>div").removeClass(varColor[i]);
  }
 }
   $(".container>div>div").addClass("yellow");
   });
});
//3Д вращение
window.onload = init;

    var product;
    function init(){

      product1 = $('.product1').ThreeSixty({
        totalFrames: 52,
        endFrame: 30,
        currentFrame: 1,
        autoRotate:true,
        imgList: '.threesixty_images',
        progress: '.spinner',
        imagePath:'img/car/',
        filePrefix: '',
        ext: '.png',
        height: 447,
        width: 1000,
        navigation: true,
        disableSpin: false
      });
$('.custom_play').bind(function(e) {
      car.play(1);
    });
    }
	
//текст
(function($) {
  var s,
  spanizeLetters = {
    settings: {
      letters: $('.js-spanize'),
    },
    init: function() {
      s = this.settings;
      this.bindEvents();
    },
    bindEvents: function(){
      s.letters.html(function (i, el) {
        //spanizeLetters.joinChars();
        var spanizer = $.trim(el).split("");
        return '<span>' + spanizer.join('</span><span>') + '</span>';
      });
    },
  };
  spanizeLetters.init();
})(jQuery);