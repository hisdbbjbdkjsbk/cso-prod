(function ($) {



  $(document).ready(function() {


    var i = 1;
setInterval(function () {


    $("#cf-img").toggleClass( "office" );



}, 7000);




            var removeMedia = function () {
              _.each([$video, $audio], function ($media) {
                if (!$media.length) return;
                $media[0].pause();
                $media[0].src = '';
                $media.children('source').prop('src', '');
                $media.remove().length = 0;
              });
            };


$(window).scroll(function () {

        if ($("#viewport").hasClass("desktop")) {

           $(".imgs").css("background-position","50% " + ($(this).scrollTop() / 2) + "px");

        }else {

        }
});




            $(window).scroll(function() {
                        var vyska = 200;
                        var vyskaDisclaimer = 50;
                      if($(window).scrollTop() >= vyska){
                         $("#arrow").addClass("scroll");

                      }


                          if($(window).scrollTop() < vyska){
                         $("#arrow").removeClass("scroll");
                      }

                      if($(window).scrollTop() >= vyskaDisclaimer){
                         $("#disclamer").addClass("scroll");
                          $("#legal").addClass("scroll");
                      }


                          if($(window).scrollTop() < vyskaDisclaimer){
                         $("#disclamer").removeClass("scroll");
                         $("#legal").removeClass("scroll");
                      }



             });




  $('#open-form-trigger').click(function() {
        $('#contact-address').addClass('hide');
        $('#cf').addClass('open');
        $('#map').addClass('contact-form-open');
$('#cf-img').addClass('cf');

    });


 $('#close-form-trigger').click(function() {
        $('#contact-address').removeClass('hide');
        $('#cf').removeClass('open');
        $('#map').removeClass('contact-form-open');
        $('#cf-img').removeClass('cf');
    });




    //let's create arrays
    var options = {

        //ASIA
        'asia': [{
            display: "Burma",
            value: "sunil"
        }, {
            display: "Cambodia",
            value: "sunil"
        }, {
            display: "Hong Kong / Macau",
            value: "sunil"
        }, {
            display: "India",
            value: "sunil"
        }, {
            display: "Indonesia",
            value: "sunil"
        }, {
            display: "Malaysia",
            value: "sunil"
        }, {
            display: "Maldives",
            value: "sunil"
        }, {
            display: "Mauritius",
            value: "sunil"
        }, {
            display: "Philippines",
            value: "sunil"
        }, {
            display: "Singapore",
            value: "sunil"
        }, {
            display: "Sri Lanka",
            value: "sunil"
        }, {
            display: "Thailand",
            value: "sunil"
        }, {
            display: "Vietnam",
            value: "sunil"
        }, {
            display: "Russian Federation",
            value: "elibra"
        }, {
            display: "Kazakhstan",
            value: "elibra"
        }, {
            display: "Turkey",
            value: "jeroboam"
        }, {
            display: "Armenia",
            value: "air"
        }, {}],


        //AFRICA
        'africa': [{
            display: "Morocco",
            value: "sunil"

        }],

        //EUROPE
        'europe': [{
            display: "France",
            value: "sunil"
        }, {
            display: "Monaco",
            value: "sunil"
        }, {
            display: "Netherlands",
            value: "sunil"
        }, {
            display: "Spain",
            value: "sunil"
        }, {
            display: "Ibiza",
            value: "sunil"
        }, {
            display: "United Kingdom",
            value: "sunil"
        }, {
            display: "Greece",
            value: "jeroboam"
        }, {
            display: "Switzerland",
            value: "oxe"
        }, {
            display: "Lichenstein",
            value: "oxe"
        }],


        //EUROPE
        'middleeast': [{
            display: "Kuwait",
            value: "globus"
        }, {
            display: "Qatar",
            value: "globus"
        }, {
            display: "Lebanon",
            value: "globus"
        }, {
            display: "United Arab Emirates",
            value: "equus"
        }, {
            display: "Iran",
            value: "pargam"
        }],



        //AUSTRALIA
        'australia': [{
            display: "Australia",
            value: "sunil"
        }],


        //NORTH USA
        'usa': [{
            display: "California",
            value: "vick"
        }, {
            display: "Nevada",
            value: "vick"
        }, {
            display: "Texas",
            value: "vick"
        }, {
            display: "Florida",
            value: "sunil"
        }, {
            display: "New York (state)",
            value: "sunil"
        }, {
            display: "Puerto Rico",
            value: "sunil"
        }],




    };


    $('#select-country').click(function() {
        $('#select-country').toggleClass('cs-active');

    });




    $('#follow').click(function() {



        $('#follow-menu').addClass('open');
        $('#main-menu').addClass('open');

        setTimeout(function() {


            hideFollow();
        }, 4000);

    });

    $('#close-follow').click(function() {
        $('#follow-menu').toggleClass('open');
        $('#main-menu').toggleClass('open');



    });

    function hideFollow() {

        $('#follow-menu').removeClass('open');
        $('#main-menu').removeClass('open');
    }

    $('#select-state').click(function() {
        $('#select-state').toggleClass('cs-active');

    });


    $('#country-list li').click(function() {
        $("#final_selection").removeClass("show");
        $('#select-state').removeClass("show");
        $('#select-state').removeClass('cs-active');
        $('#select-state').removeClass("asia");
        $('#select-state').removeClass("africa");
        $('#select-state').removeClass("europe");
        $('#select-state').removeClass("usa");
        $('#select-state').removeClass("middleeast");
        $('#select-state').removeClass("australia");
        $("#select-state-placeholder").html(""); //reset child options
        $("#select-state-placeholder").append("select your country");
        var currentCountrySelect = $(this).attr('data-value');
        var currentCountrySelectName = $(this).attr('data-name');
        var parent = $(this).attr('data-value');

        $('#country-list li').removeClass('cs-selected');

        $("#select-country-placeholder").html(""); //reset child options
        $(this).toggleClass('cs-selected');
        $("#select-country-placeholder").append("" + currentCountrySelectName + "");


        $('#select-state').addClass(currentCountrySelect);


        list(options[parent]);

    });



    $('#state-list li').click(function() {
        var currentStateSelect = $(this).attr('data-value');
        var currentStateSelectName = $(this).attr('data-name');
        var parentStateState = $(this).attr('data-value');
        $("#final_selection").removeClass("show");
        $('#state-list li').removeClass('cs-selected');

        $("#select-state-placeholder").html(""); //reset child options
        $(this).toggleClass('cs-selected');
        $("#select-state-placeholder").append("" + currentStateSelectName + "");

        showPartner(currentStateSelect);
        $("#final_selection").addClass("show");
    });



    function list(array_list) {
        $("#state-list").html(""); //reset child options

        $(array_list).each(function(i) { //populate child options
            $("#state-list").append("<li id=\"tst\" data-value=\"" + array_list[i].value + "\" data-name=\"" + array_list[i].display + "\"><span>" + array_list[i].display + "</span></li>");
        });
        $("#select-state").addClass("show");
    }




    //show partner contant info
    function showPartner(parent) {

        $("#final_selection ").html(""); //reset child options

        switch (parent) {
            case "sunil":
                var info = "" +
                    "<h3 class=\"white\">SMOKING COCKTAILS (ASIA) PTE. LTD.</h3>\n" +
                    "<p class=\"white name\">Mr. Sunil Chawla</p>\n" +
                    "<p class=\"white email\">smokingcocktails@gmail.com</p>\n" +
                    "<p class=\"white phone\">+420 723602612</p>\n" +
                    "<p class=\"white name\">Ms. Gabriela Krausova</p>\n" +
                    "<p class=\"white email\">gabriel.kraus@gmail.com</p>\n" +
                    "<p class=\"white phone\">+420 605802281</p>\n" +
                    "";
                break;


            case "elibra":
                var info = "" +
                    "<h3 class=\"white\">ART SMOKE</h3>\n" +
                    "<p class=\"white \">Elibra Ltd</p>\n" +
                    "<p class=\"white name\">Mr. Inan Izci</p>\n" +
                    "<p class=\"white email\">i.izci@elibra.com.tr</p>\n" +
                    "<p class=\"white phone\">+90 5322426143</p>\n" +
                    "";
                break;


            case "jeroboam":
                var info = "" +
                    "<h3 class=\"white\">JEROBOAM LTD.</h3>\n" +
                    "<p class=\"white name\">Pileas Konstantopoulos</p>\n" +
                    "<p class=\"white email\"> info@jeroboam.gr</p>\n" +
                    "<p class=\"white phone\">+30 6972378166</p>\n" +
                    "";
                break;


            case "oxe":
                var info = "" +
                    "<h3 class=\"white\">OXE GMBH</h3>\n" +
                    "<p class=\"white name\">Mr. Tanner Saner</p>\n" +
                    "<p class=\"white email\">tanner.saner@ifg-consulting.ch</p>\n" +
                    "<p class=\"white phone\">+41 788000070</p>\n" +
                    "";
                break;


            case "equus":
                var info = "" +
                    "<h3 class=\"white\">Equus Smoking Requisites Trading</h3>\n" +
                    "<p class=\"white name\">Mr. Ruslan Ozdo</p>\n" +
                    "<p class=\"white email\">ruslan@equussmoke.com</p>\n" +
                    "<p class=\"white phone\">+971 555535770</p>\n" +
                    "";
                break;


            case "globus":
                var info = "" +
                    "<h3 class=\"white\">GLOBUS Co. General Trading & Contracting</h3>\n" +
                    "<p class=\"white name\">Mr. Bashar Deeb</p>\n" +
                    "<p class=\"white email\">meduse.gcc@gmail.com</p>\n" +
                    "<p class=\"white phone\">+965 67050708</p>\n" +
                    "";
                break;

            case "pargam":
                var info = "" +
                    "<h3 class=\"white\">Pargam Tejarat Pars Inc.</h3>\n" +
                    "<p class=\"white name\">Mr. Mehrzad Jafarbegloo</p>\n" +
                    "<p class=\"white email\">mj@pargaminc.com</p>\n" +
                    "<p class=\"white phone\">+98 9120339812</p>\n" +
                    "";
                break;


            case "air":
                var info = "" +
                    "<h3 class=\"white\">Air Group Ltd</h3>\n" +
                    "<p class=\"white name\">Mr. Karen Ayrapetyan</p>\n" +
                    "<p class=\"white email\">airkaren@mail.ru</p>\n" +
                    "<p class=\"white phone\">+374 55520999</p>\n" +
                    "";
                break;


            case "vick":
                var info = "" +
                    "<h3 class=\"white\">T.M.S. International Corp.</h3>\n" +
                    "<p class=\"white name\">Mr. Vick Touzjian</p>\n" +
                    "<p class=\"white email\">vicktms@gmail.com</p>\n" +
                    "<p class=\"white phone\">+1 8187266911</p>\n" +
                    "";
                break;


            default:
                var info = "";

        }


        $("#final_selection").append("<div>" + info + "</div>");


    }

    $('#edit-submitted-country option:first').html('');


});
}(jQuery));

jQuery(document).ready(function($){
    if( $('.floating-labels').length > 0 ) floatLabels();

    function floatLabels() {
        const inputFields = $('.floating-labels input, .floating-labels select, .floating-labels textarea');
        inputFields.each(function(){
            const singleInput = $(this);
            //check if user is filling one of the form fields
            checkVal(singleInput);
            singleInput.on('change keyup', function(){
                checkVal(singleInput);
            });
        });
    }

    function checkVal(inputField) {
        const $label = inputField.parents('.webform-component:first').find('.cd-label, label');
        inputField.val() == '' ? $label.removeClass('float') : $label.addClass('float');
    }
});


/* page TRANSITION  -------------------------------------------------------------------------------------------------------------*/




/* page NEXT PAGE ANIMATION */
(function ($) {
$(document).ready(function() {



        $(".content-link").click(function(event) {

            event.preventDefault();
            linkLocation = this.href;



            $(".curtains").each(function() {
                $(this).removeClass('loaded');
                $(".curtains-logo1").removeClass('loaded');
                $(".curtains-logo2").removeClass('loaded');

                setTimeout(function() {
                    redirectPage();
                }, 800);


            });


            function redirectPage() {
                window.location = linkLocation;
            }

        });


    })
}(jQuery));
    /* page TRANSITION  -------------------------------------------------------------------------------------------------------------*/

/* rotace TEXTU  -------------------------------------------------------------------------------------------------------------*/
jQuery(function($) {



});

/* rotace TEXTU  -------------------------------------------------------------------------------------------------------------*/




/* Přechody stránek  -------------------------------------------------------------------------------------------------------------*/

jQuery(document).ready(function($) {




    $('.mobile-menu-trigger.mobile').click(function() {
        $('.mobile-menu-trigger.mobile span').toggleClass('active');
        $('.menu-items-holder').toggleClass('open');
    });


    //bullet navigation


    //variables
    var hijacking = $('body').data('hijacking'),
        animationType = $('body').data('animation'),
        delta = 0,
        scrollThreshold = 5,
        actual = 1,
        animating = false;

    //DOM elements
    var sectionsAvailable = $('.cd-section'),
        verticalNav = $('.cd-vertical-nav'),
        prevArrow = verticalNav.find('a.cd-prev');
    nextArrow = verticalNav.find('a.cd-next');


    $("#arrow").click(nextSection);




    if ($('.cd-section.visible').hasClass("section1")) {
        $("#cd-vertical-nav ul li").children().removeClass();
        $("#cd-vertical-nav ul li:nth-child(1) div").addClass('is-selected');
    }

    if ($('.cd-section.visible').hasClass("section2")) {
        $("#cd-vertical-nav ul li").children().removeClass();
        $("#cd-vertical-nav ul li:nth-child(2) div").addClass('is-selected');
    }

    if ($('.cd-section.visible').hasClass("section3")) {
        $("#cd-vertical-nav ul li").children().removeClass();
        $("#cd-vertical-nav ul li:nth-child(3) div").addClass('is-selected');
    }

    if ($('.cd-section.visible').hasClass("section4")) {
        $("#cd-vertical-nav ul li").children().removeClass();
        $("#cd-vertical-nav ul li:nth-child(4) div").addClass('is-selected');
    }

    if ($('.cd-section.visible').hasClass("section5")) {
        $("#cd-vertical-nav ul li").children().removeClass();
        $("#cd-vertical-nav ul li:nth-child(5) div").addClass('is-selected');
    }


    //check the media query and bind corresponding events
    var MQ = deviceType(),
        bindToggle = false;

    bindEvents(MQ, true);

    $(window).on('resize', function() {
        MQ = deviceType();
        bindEvents(MQ, bindToggle);
        if (MQ == 'mobile') { bindToggle = false; }
        if (MQ == 'desktop') { bindToggle = false; }
    });

    function bindEvents(MQ, bool) {

        if (MQ == 'desktop' && bool) {
            $('#viewport').removeClass();
            $('#viewport').addClass("desktop");
            //bind the animation to the window scroll event, arrows click and keyboard
            if (hijacking == 'on') {
                initHijacking();
                $(window).on('DOMMouseScroll mousewheel', scrollHijacking);
            } else {
                scrollAnimation();
                $(window).on('scroll', scrollAnimation);
            }
            prevArrow.on('click', prevSection);
            nextArrow.on('click', nextSection);

            $(document).on('keydown', function(event) {
                if ((event.which=='40' || event.which=='34') && !nextArrow.hasClass('inactive')) {
                    event.preventDefault();
                    nextSection();
                } else if ((event.which=='38' || event.which=='33') && (!prevArrow.hasClass('inactive') || (prevArrow.hasClass('inactive') && $(window).scrollTop() != sectionsAvailable.eq(0).offset().top))) {
                    event.preventDefault();
                    prevSection();
                }
            });
            //set navigation arrows visibility
            checkNavigation();
        } else if (MQ == 'mobile') {
            $('#viewport').removeClass();
            $('#viewport').addClass("mobile");
            //reset and unbind
            resetSectionStyle();
            $(window).off('DOMMouseScroll mousewheel', scrollHijacking);
            $(window).off('scroll', scrollAnimation);
            prevArrow.off('click', prevSection);
            nextArrow.off('click', nextSection);
            $(document).off('keydown');
        }
    }

    function scrollAnimation() {
        //normal scroll - use requestAnimationFrame (if defined) to optimize performance
        (!window.requestAnimationFrame) ? animateSection(): window.requestAnimationFrame(animateSection);
    }

    function animateSection() {
        var scrollTop = $(window).scrollTop(),
            windowHeight = $(window).height(),
            windowWidth = $(window).width();

        sectionsAvailable.each(function() {
            var actualBlock = $(this),
                offset = scrollTop - actualBlock.offset().top;

            //according to animation type and window scroll, define animation parameters
            var animationValues = setSectionAnimation(offset, windowHeight, animationType);

            transformSection(actualBlock.children('div'), animationValues[0], animationValues[1], animationValues[2], animationValues[3], animationValues[4]);
            (offset >= 0 && offset < windowHeight) ? actualBlock.addClass('visible'): actualBlock.removeClass('visible');
        });

        checkNavigation();
    }

    function transformSection(element, translateY, scaleValue, rotateXValue, opacityValue, boxShadow) {
        //transform sections - normal scroll
        element.velocity({
            translateY: translateY + 'vh',
            scale: scaleValue,
            rotateX: rotateXValue,
            opacity: opacityValue,
            boxShadowBlur: boxShadow + 'px',
            translateZ: 0,
        }, 0);
    }

    function initHijacking() {
        // initialize section style - scrollhijacking
        var visibleSection = sectionsAvailable.filter('.visible'),
            topSection = visibleSection.prevAll('.cd-section'),
            bottomSection = visibleSection.nextAll('.cd-section'),
            animationParams = selectAnimation(animationType, false),
            animationVisible = animationParams[0],
            animationTop = animationParams[1],
            animationBottom = animationParams[2];

        visibleSection.children('div').velocity(animationVisible, 1, function() {
            visibleSection.css('opacity', 1);
            topSection.css('opacity', 1);
            bottomSection.css('opacity', 1);
        });
        topSection.children('div').velocity(animationTop, 0);
        bottomSection.children('div').velocity(animationBottom, 0);
    }

    function scrollHijacking(event) {
        // on mouse scroll - check if animate section
        if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0) {
            delta--;
            (Math.abs(delta) >= scrollThreshold) && prevSection();
        } else {
            delta++;
            (delta >= scrollThreshold) && nextSection();
        }
        return false;
    }

    function prevSection(event) {
        //go to previous section
        typeof event !== 'undefined' && event.preventDefault();

        var visibleSection = sectionsAvailable.filter('.visible'),
            middleScroll = (hijacking == 'off' && $(window).scrollTop() != visibleSection.offset().top) ? true : false;
        visibleSection = middleScroll ? visibleSection.next('.cd-section') : visibleSection;

        var animationParams = selectAnimation(animationType, middleScroll, 'prev');
        unbindScroll(visibleSection.prev('.cd-section'), animationParams[3]);

        if (!animating && !visibleSection.is(":first-child")) {
            animating = true;
            visibleSection.removeClass('visible').children('div').velocity(animationParams[2], animationParams[3], animationParams[4])
                .end().prev('.cd-section').addClass('visible').children('div').velocity(animationParams[0], animationParams[3], animationParams[4], function() {
                    animating = false;
                    if (hijacking == 'off') $(window).on('scroll', scrollAnimation);
                });

            if ($('.cd-section.visible').hasClass("section1")) {
                $("#cd-vertical-nav ul li").children().removeClass();
                $("#cd-vertical-nav ul li:nth-child(1) div").addClass('is-selected');
            }

            if ($('.cd-section.visible').hasClass("section2")) {
                $("#cd-vertical-nav ul li").children().removeClass();
                $("#cd-vertical-nav ul li:nth-child(2) div").addClass('is-selected');
            }

            if ($('.cd-section.visible').hasClass("section3")) {
                $("#cd-vertical-nav ul li").children().removeClass();
                $("#cd-vertical-nav ul li:nth-child(3) div").addClass('is-selected');
            }

            if ($('.cd-section.visible').hasClass("section4")) {
                $("#cd-vertical-nav ul li").children().removeClass();
                $("#cd-vertical-nav ul li:nth-child(4) div").addClass('is-selected');
            }

            if ($('.cd-section.visible').hasClass("section5")) {
                $("#cd-vertical-nav ul li").children().removeClass();
                $("#cd-vertical-nav ul li:nth-child(5) div").addClass('is-selected');
            }


            if ($('.cd-section.visible').hasClass("section6")) {
                $("#cd-vertical-nav ul li").children().removeClass();
                $("#cd-vertical-nav ul li:nth-child(6) div").addClass('is-selected');
            }



            if ($('.cd-section.visible').hasClass("section7")) {
                $("#cd-vertical-nav ul li").children().removeClass();
                $("#cd-vertical-nav ul li:nth-child(7) div").addClass('is-selected');
            }

            if ($('.cd-section.visible').hasClass("section8")) {
                $("#cd-vertical-nav ul li").children().removeClass();
                $("#cd-vertical-nav ul li:nth-child(8) div").addClass('is-selected');
            }

            if ($('.cd-section.visible').hasClass("section9")) {
                $("#cd-vertical-nav ul li").children().removeClass();
                $("#cd-vertical-nav ul li:nth-child(9) div").addClass('is-selected');
            }

            if ($('.cd-section.visible').hasClass("section10")) {
                $("#cd-vertical-nav ul li").children().removeClass();
                $("#cd-vertical-nav ul li:nth-child(10) div").addClass('is-selected');
            }

            if ($('.cd-section.visible').hasClass("section11")) {
                $("#cd-vertical-nav ul li").children().removeClass();
                $("#cd-vertical-nav ul li:nth-child(11) div").addClass('is-selected');
            }


            //zmena barvy menu
            $("#header").removeClass();
            $("#cd-vertical-nav").removeClass();
            $('#arrow').removeClass();
            $('#disclamer').removeClass();
            if ($('.cd-section').hasClass("visible")) {

                $('.cd-section.visible').each(function(index) {
                    var classes = $(this).attr('class').split(" ");
                    for (var i in classes) {
                        $('#header').addClass("" + classes[1]);
                        $('#cd-vertical-nav').addClass("" + classes[1]);
                        $('#arrow').addClass("" + classes[1]);
                        $('#disclamer').addClass("" + classes[1]);
                    }
                });
            }
            //zmena barvy menu


            actual = actual - 1;
        }

        resetScroll();
    }

    function nextSection(event) {
        //go to next section
        typeof event !== 'undefined' && event.preventDefault();



        var visibleSection = sectionsAvailable.filter('.visible'),
            middleScroll = (hijacking == 'off' && $(window).scrollTop() != visibleSection.offset().top) ? true : false;

        var animationParams = selectAnimation(animationType, middleScroll, 'next');
        unbindScroll(visibleSection.next('.cd-section'), animationParams[3]);

        if (!animating && !visibleSection.is(":last-of-type")) {
            animating = true;

            visibleSection.removeClass('visible').children('div').velocity(animationParams[1], animationParams[3], animationParams[4])
                .end().next('.cd-section').addClass('visible ').children('div').velocity(animationParams[0], animationParams[3], animationParams[4], function() {

                    if ($('.cd-section.visible').hasClass("section1")) {
                        $("#cd-vertical-nav ul li").children().removeClass();
                        $("#cd-vertical-nav ul li:nth-child(1) div").addClass('is-selected');
                    }



                    if ($('.cd-section.visible').hasClass("section2")) {
                        $("#cd-vertical-nav ul li").children().removeClass();
                        $("#cd-vertical-nav ul li:nth-child(2) div").addClass('is-selected');
                    }

                    if ($('.cd-section.visible').hasClass("section3")) {
                        $("#cd-vertical-nav ul li").children().removeClass();
                        $("#cd-vertical-nav ul li:nth-child(3) div").addClass('is-selected');
                    }

                    if ($('.cd-section.visible').hasClass("section4")) {
                        $("#cd-vertical-nav ul li").children().removeClass();
                        $("#cd-vertical-nav ul li:nth-child(4) div").addClass('is-selected');
                    }

                    if ($('.cd-section.visible').hasClass("section5")) {
                        $("#cd-vertical-nav ul li").children().removeClass();
                        $("#cd-vertical-nav ul li:nth-child(5) div").addClass('is-selected');
                    }


                    if ($('.cd-section.visible').hasClass("section6")) {
                        $("#cd-vertical-nav ul li").children().removeClass();
                        $("#cd-vertical-nav ul li:nth-child(6) div").addClass('is-selected');
                    }

                    if ($('.cd-section.visible').hasClass("section7")) {
                        $("#cd-vertical-nav ul li").children().removeClass();
                        $("#cd-vertical-nav ul li:nth-child(7) div").addClass('is-selected');
                    }

                    if ($('.cd-section.visible').hasClass("section8")) {
                        $("#cd-vertical-nav ul li").children().removeClass();
                        $("#cd-vertical-nav ul li:nth-child(8) div").addClass('is-selected');
                    }

                    if ($('.cd-section.visible').hasClass("section9")) {
                        $("#cd-vertical-nav ul li").children().removeClass();
                        $("#cd-vertical-nav ul li:nth-child(9) div").addClass('is-selected');
                    }

                    if ($('.cd-section.visible').hasClass("section10")) {
                        $("#cd-vertical-nav ul li").children().removeClass();
                        $("#cd-vertical-nav ul li:nth-child(10) div").addClass('is-selected');
                    }

                    if ($('.cd-section.visible').hasClass("section11")) {
                        $("#cd-vertical-nav ul li").children().removeClass();
                        $("#cd-vertical-nav ul li:nth-child(11) div").addClass('is-selected');
                    }

                    //zmena barvy menu
                    $("#header").removeClass();
                    $("#cd-vertical-nav").removeClass();
                    $('#arrow').removeClass();
                    $('#disclamer').removeClass();
                    if ($('.cd-section').hasClass("visible")) {

                        $('.cd-section.visible').each(function(index) {
                            var classes = $(this).attr('class').split(" ");
                            for (var i in classes) {
                                $('#header').addClass("" + classes[1]);
                                $('#cd-vertical-nav').addClass("" + classes[1]);
                                $('#arrow').addClass("" + classes[1]);
                                $('#disclamer').addClass("" + classes[1]);

                                (sectionsAvailable.filter('.visible').is(':last-of-type')) ? $('#arrow').addClass('disable'): $('#arrow').removeClass('disable');


                            }
                        });
                    }
                    //zmena barvy menu

                    animating = false;

                    if (hijacking == 'off') $(window).on('scroll', scrollAnimation);
                });

            actual = actual + 1;
        }
        resetScroll();
    }

    function unbindScroll(section, time) {
        //if clicking on navigation - unbind scroll and animate using custom velocity animation
        if (hijacking == 'off') {
            $(window).off('scroll', scrollAnimation);
            (animationType == 'catch') ? $('body, html').scrollTop(section.offset().top): section.velocity("scroll", {
                duration: time
            });
        }
    }

    function resetScroll() {
        delta = 0;
        checkNavigation();
    }

    function checkNavigation() {
        //update navigation arrows visibility
        (sectionsAvailable.filter('.visible').is(':first-of-type')) ? prevArrow.addClass('inactive'): prevArrow.removeClass('inactive');
        (sectionsAvailable.filter('.visible').is(':last-of-type')) ? nextArrow.addClass('inactive'): nextArrow.removeClass('inactive');
    }

    function resetSectionStyle() {
        //on mobile - remove style applied with jQuery
        sectionsAvailable.children('div').each(function() {
            $(this).attr('style', '');
        });
    }

    function deviceType() {
        //detect if desktop/mobile
        return window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
    }

    function selectAnimation(animationName, middleScroll, direction) {
        // select section animation - scrollhijacking
        var animationVisible = 'translateNone',
            animationTop = 'translateUp',
            animationBottom = 'translateDown',
            easing = 'ease',
            animDuration = 800;

        switch (animationName) {
            case 'scaleDown':
                animationTop = 'scaleDown';
                easing = 'easeInCubic';
                break;
            case 'rotate':
                if (hijacking == 'off') {
                    animationTop = 'rotation.scroll';
                    animationBottom = 'translateNone';
                } else {
                    animationTop = 'rotation';
                    easing = 'easeInCubic';
                }
                break;
            case 'gallery':
                animDuration = 1500;
                if (middleScroll) {
                    animationTop = 'scaleDown.moveUp.scroll';
                    animationVisible = 'scaleUp.moveUp.scroll';
                    animationBottom = 'scaleDown.moveDown.scroll';
                } else {
                    animationVisible = (direction == 'next') ? 'scaleUp.moveUp' : 'scaleUp.moveDown';
                    animationTop = 'scaleDown.moveUp';
                    animationBottom = 'scaleDown.moveDown';
                }
                break;
            case 'catch':
                animationVisible = 'translateUp.delay';
                break;
            case 'opacity':
                animDuration = 700;
                animationTop = 'hide.scaleUp';
                animationBottom = 'hide.scaleDown';
                break;
            case 'fixed':
                animationTop = 'translateNone';
                easing = 'easeInCubic';
                break;
            case 'parallax':
                animationTop = 'translateUp.half';
                easing = 'easeInCubic';
                break;
        }

        return [animationVisible, animationTop, animationBottom, animDuration, easing];
    }

    function setSectionAnimation(sectionOffset, windowHeight, animationName) {
        // select section animation - normal scroll
        var scale = 1,
            translateY = 100,
            rotateX = '0deg',
            opacity = 1,
            boxShadowBlur = 0;

        if (sectionOffset >= -windowHeight && sectionOffset <= 0) {
            // section entering the viewport
            translateY = (-sectionOffset) * 100 / windowHeight;

            switch (animationName) {
                case 'scaleDown':
                    scale = 1;
                    opacity = 1;
                    break;
                case 'rotate':
                    translateY = 0;
                    break;
                case 'gallery':
                    if (sectionOffset >= -windowHeight && sectionOffset < -0.9 * windowHeight) {
                        scale = -sectionOffset / windowHeight;
                        translateY = (-sectionOffset) * 100 / windowHeight;
                        boxShadowBlur = 400 * (1 + sectionOffset / windowHeight);
                    } else if (sectionOffset >= -0.9 * windowHeight && sectionOffset < -0.1 * windowHeight) {
                        scale = 0.9;
                        translateY = -(9 / 8) * (sectionOffset + 0.1 * windowHeight) * 100 / windowHeight;
                        boxShadowBlur = 40;
                    } else {
                        scale = 1 + sectionOffset / windowHeight;
                        translateY = 0;
                        boxShadowBlur = -400 * sectionOffset / windowHeight;
                    }
                    break;
                case 'catch':
                    if (sectionOffset >= -windowHeight && sectionOffset < -0.75 * windowHeight) {
                        translateY = 100;
                        boxShadowBlur = (1 + sectionOffset / windowHeight) * 160;
                    } else {
                        translateY = -(10 / 7.5) * sectionOffset * 100 / windowHeight;
                        boxShadowBlur = -160 * sectionOffset / (3 * windowHeight);
                    }
                    break;
                case 'opacity':
                    translateY = 0;
                    scale = (sectionOffset + 5 * windowHeight) * 0.2 / windowHeight;
                    opacity = (sectionOffset + windowHeight) / windowHeight;
                    break;
            }

        } else if (sectionOffset > 0 && sectionOffset <= windowHeight) {
            //section leaving the viewport - still has the '.visible' class
            translateY = (-sectionOffset) * 100 / windowHeight;

            switch (animationName) {
                case 'scaleDown':
                    scale = (1 - (sectionOffset * 0.3 / windowHeight)).toFixed(5);
                    opacity = (1 - (sectionOffset / windowHeight)).toFixed(5);
                    translateY = 0;
                    boxShadowBlur = 40 * (sectionOffset / windowHeight);

                    break;
                case 'rotate':
                    opacity = (1 - (sectionOffset / windowHeight)).toFixed(5);
                    rotateX = sectionOffset * 90 / windowHeight + 'deg';
                    translateY = 0;
                    break;
                case 'gallery':
                    if (sectionOffset >= 0 && sectionOffset < 0.1 * windowHeight) {
                        scale = (windowHeight - sectionOffset) / windowHeight;
                        translateY = -(sectionOffset / windowHeight) * 100;
                        boxShadowBlur = 400 * sectionOffset / windowHeight;
                    } else if (sectionOffset >= 0.1 * windowHeight && sectionOffset < 0.9 * windowHeight) {
                        scale = 0.9;
                        translateY = -(9 / 8) * (sectionOffset - 0.1 * windowHeight / 9) * 100 / windowHeight;
                        boxShadowBlur = 40;
                    } else {
                        scale = sectionOffset / windowHeight;
                        translateY = -100;
                        boxShadowBlur = 400 * (1 - sectionOffset / windowHeight);
                    }
                    break;
                case 'catch':
                    if (sectionOffset >= 0 && sectionOffset < windowHeight / 2) {
                        boxShadowBlur = sectionOffset * 80 / windowHeight;
                    } else {
                        boxShadowBlur = 80 * (1 - sectionOffset / windowHeight);
                    }
                    break;
                case 'opacity':
                    translateY = 0;
                    scale = (sectionOffset + 5 * windowHeight) * 0.2 / windowHeight;
                    opacity = (windowHeight - sectionOffset) / windowHeight;
                    break;
                case 'fixed':
                    translateY = 0;
                    break;
                case 'parallax':
                    translateY = (-sectionOffset) * 30 / windowHeight;
                    break;

            }

        } else if (sectionOffset < -windowHeight) {
            //section not yet visible
            translateY = 100;

            switch (animationName) {
                case 'scaleDown':
                    scale = 1;
                    opacity = 1;
                    break;
                case 'gallery':
                    scale = 1;
                    break;
                case 'opacity':
                    translateY = 0;
                    scale = 0.8;
                    opacity = 0;
                    break;
            }

        } else {
            //section not visible anymore
            translateY = -100;

            switch (animationName) {
                case 'scaleDown':
                    scale = 0;
                    opacity = 0.7;
                    translateY = 0;
                    break;
                case 'rotate':
                    translateY = 0;
                    rotateX = '90deg';
                    break;
                case 'gallery':
                    scale = 1;
                    break;
                case 'opacity':
                    translateY = 0;
                    scale = 1.2;
                    opacity = 0;
                    break;
                case 'fixed':
                    translateY = 0;
                    break;
                case 'parallax':
                    translateY = -50;
                    break;
            }
        }

        return [translateY, scale, rotateX, opacity, boxShadowBlur];
    }
});

/* Custom effects registration - feature available in the Velocity UI pack */
//none
(function ($) {
$.Velocity
    .RegisterEffect("translateUp", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '-100%'
            }, 1]
        ]
    });
$.Velocity
    .RegisterEffect("translateDown", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '100%'
            }, 1]
        ]
    });
$.Velocity
    .RegisterEffect("translateNone", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '0',
                opacity: '1',
                scale: '1',
                rotateX: '0',
                boxShadowBlur: '0'
            }, 1]
        ]
    });

//scale down
$.Velocity
    .RegisterEffect("scaleDown", {
        defaultDuration: 1,
        calls: [
            [{
                opacity: '0',
                scale: '0.7',
                boxShadowBlur: '150px'
            }, 1]
        ]
    });
//rotation
$.Velocity
    .RegisterEffect("rotation", {
        defaultDuration: 1,
        calls: [
            [{
                opacity: '0',
                rotateX: '90',
                translateY: '-100%'
            }, 1]
        ]
    });
$.Velocity
    .RegisterEffect("rotation.scroll", {
        defaultDuration: 1,
        calls: [
            [{
                opacity: '0',
                rotateX: '90',
                translateY: '0'
            }, 1]
        ]
    });
//gallery
$.Velocity
    .RegisterEffect("scaleDown.moveUp", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '-10%',
                scale: '0.9',
                boxShadowBlur: '40px'
            }, 0.20],
            [{
                translateY: '-100%'
            }, 0.60],
            [{
                translateY: '-100%',
                scale: '1',
                boxShadowBlur: '0'
            }, 0.20]
        ]
    });
$.Velocity
    .RegisterEffect("scaleDown.moveUp.scroll", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '-100%',
                scale: '0.9',
                boxShadowBlur: '40px'
            }, 0.60],
            [{
                translateY: '-100%',
                scale: '1',
                boxShadowBlur: '0'
            }, 0.40]
        ]
    });
$.Velocity
    .RegisterEffect("scaleUp.moveUp", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '90%',
                scale: '0.9',
                boxShadowBlur: '40px'
            }, 0.20],
            [{
                translateY: '0%'
            }, 0.60],
            [{
                translateY: '0%',
                scale: '1',
                boxShadowBlur: '0'
            }, 0.20]
        ]
    });
$.Velocity
    .RegisterEffect("scaleUp.moveUp.scroll", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '0%',
                scale: '0.9',
                boxShadowBlur: '40px'
            }, 0.60],
            [{
                translateY: '0%',
                scale: '1',
                boxShadowBlur: '0'
            }, 0.40]
        ]
    });
$.Velocity
    .RegisterEffect("scaleDown.moveDown", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '10%',
                scale: '0.9',
                boxShadowBlur: '40px'
            }, 0.20],
            [{
                translateY: '100%'
            }, 0.60],
            [{
                translateY: '100%',
                scale: '1',
                boxShadowBlur: '0'
            }, 0.20]
        ]
    });
$.Velocity
    .RegisterEffect("scaleDown.moveDown.scroll", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '100%',
                scale: '0.9',
                boxShadowBlur: '40px'
            }, 0.60],
            [{
                translateY: '100%',
                scale: '1',
                boxShadowBlur: '0'
            }, 0.40]
        ]
    });
$.Velocity
    .RegisterEffect("scaleUp.moveDown", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '-90%',
                scale: '0.9',
                boxShadowBlur: '40px'
            }, 0.20],
            [{
                translateY: '0%'
            }, 0.60],
            [{
                translateY: '0%',
                scale: '1',
                boxShadowBlur: '0'
            }, 0.20]
        ]
    });
//catch up
$.Velocity
    .RegisterEffect("translateUp.delay", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '0%'
            }, 0.8, {
                delay: 100
            }],
        ]
    });
//opacity
$.Velocity
    .RegisterEffect("hide.scaleUp", {
        defaultDuration: 1,
        calls: [
            [{
                opacity: '0',
                scale: '1.2'
            }, 1]
        ]
    });
$.Velocity
    .RegisterEffect("hide.scaleDown", {
        defaultDuration: 1,
        calls: [
            [{
                opacity: '0',
                scale: '0.8'
            }, 1]
        ]
    });
//parallax
$.Velocity
    .RegisterEffect("translateUp.half", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '-30%'
            }, 1]
        ]
    });
}(jQuery));

/* Přechody stránek  -------------------------------------------------------------------------------------------------------------*/


/* page WHEN LOAD ANIMATION */
(function ($) {

$(window).bind('resize', function(e)
{

});




window.onload = function() {
    //	$("#curtain1" ).addClass('loaded');
    //	$("#curtain2" ).addClass('loaded');
    $(".curtains").addClass('loaded');

      $(".curtains-logo-anim").addClass('ready');

    $(".curtains-logo-anim").addClass('loaded');

    $(".curtains-logo1").addClass('loaded');
    $(".curtains-logo2").addClass('loaded');

    document.body.className += ' loaded'


setTimeout(function(){
  $(".scroll-down").addClass("show");
}, 2000);

$('.curtains-logo-anim').delay( 250 ).fadeOut(200);



         $("#mobile-slide").addClass("bg-img img1");
         function spinner($element) {

        if ($("#spinner").hasClass("worldwide")) {
            var timer = 2500;
        } else {
            var timer = 3100;
        }




        var words = [];

        var list = $('li', $element);
        list.each(function() {
            words.push($(this).text());
        });

        list.remove();

        var $ss = $('#spinner-show');

        var i = 0,
            i_next = 1;
            imgno = 2;

        $('.next em', $ss).text(words[i_next]);

        $ss.width($('.current').width());

        setInterval(function() {


                if ($("body").hasClass("products")) {  var max = 4; }
                if ($("body").hasClass("home")) {  var max = 6; }
                if ($("body").hasClass("experience")) {  var max = 6; }
                if ($("body").hasClass("worldwide")) {  var max = 6; }
                if ($("body").hasClass("meduse-contact")) {  var max = 2; }


                 if ($("#viewport").hasClass("mobile")) {

                        $("#mobile-slide").removeClass();

                        $("#mobile-slide").addClass("bg-img img" + imgno );

                        if (imgno == max)
                        {
                            imgno = 1;

                        }
                        else {
                            imgno++;

                        }
                    }







            $ss.addClass('swap');
            i = i_next;
            i_next++;

            if (i_next >= words.length) {

                //i_next = 0;
                return;
            }

            $ss.width($('.next em').width());
            setTimeout(function() {
                $('.next em', $ss).text(words[i_next]);
                $('.current', $ss).text(words[i]);

                $ss.removeClass('swap');
                console.log('swap!');

            }, 600);
        }, timer);
    }

    if ($('#spinner').length) {
        spinner($('#spinner'));
    }


};
}(jQuery));
