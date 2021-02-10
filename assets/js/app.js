"use strict";
var plugin_path = 'assets/plugins/';
var preloader = $(".preloader");
$(preloader).length > 0 && $(window).on("load", function () {
    $(preloader).fadeOut(1e3, function () {
        $(preloader).remove()
    });
});
var App = {
    main          : function () {
        "use strict";
        App.body_height();
        App.nav_bar();
        App.panel_elements();
        App.resize_nav();
        var _container = jQuery(".search__input");
        if (_container.length > 0) {
            App.search_box();
        }
        App.full_screen();
        App.to_top();
        App.office_sidebar();
        App.sign_in();
        App.equal_height();
        App.lazy_load();
        App.fancy_box();
        App.google_map();
        App.vector_map();
        App.show_swal();
        App.cookie_close();
        App.count_js();
        App.typeit_js();
        App.sidebar();
        App.icons();
    },
    body_height   : function () {
        "use strict";
        $("input").attr("autocomplete", "off");
        if ($('body').hasClass('fixed_footer')) {
            $('.navbar.navbar-default.footer').addClass('navbar-fixed-bottom');
        }

        if ($('body').hasClass('top_nav_fixed')) {
            $(document).scroll(function () {
                var y = $(this).scrollTop();
                if (y > 20) {
                    $('.navbar.navbar-default.navbar-fixed-top').addClass('bordered')
                } else {
                    $('.navbar.navbar-default.navbar-fixed-top').removeClass('bordered')
                }
            });
        }

        if ($('body').hasClass('fixed_menu')) {
            $(document).scroll(function () {
                var y = $(this).scrollTop();
                if (y > 35) {
                    $('#main_menu_bar .navbar-header').fadeIn(500, function () {
                    });
                } else {
                    $('#main_menu_bar .navbar-header').hide();
                }
            });
            $('#main_menu_bar').on('affixed.bs.affix', function () {
                $(this).next().css('margin-top', $(this).outerHeight());
                $('body').addClass('navbar-affixed-top');
            });

            $('#main_menu_bar').on('affixed-top.bs.affix', function () {
                $(this).next().css('margin-top', '');
                $('body').removeClass('navbar-affixed-top');
            });

            $('#main_menu_bar').affix({
                offset: {
                    top: $('#main_menu_bar').offset().top
                }
            });
        }


        var _container = jQuery(".page-container");
        if (_container.length > 0) {
            var pageContainerClass = 'page-container',
                bottomNavbarClass = 'navbar-fixed-bottom',
                bottomNavbar = $('.' + bottomNavbarClass).length && $('.' + bottomNavbarClass).outerHeight(),
                availableHeight = $(window).height() - $('.' + pageContainerClass).offset().top - bottomNavbar;
            $('.' + pageContainerClass).attr('style', 'min-height:' + availableHeight + 'px');
        }
    },
    nav_bar       : function () {
        "use strict";
        $(document).on('click', '.dropdown-content', function (e) {
            e.stopPropagation();
        });

        $('.navbar-nav .disabled a').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });

        $('.dropdown-content a[data-toggle="tab"]').on('click', function (e) {
            $(this).tab('show');
        });

        $('.navigation').find('li.active').parents('li').addClass('active');

        $('.navigation').find('li').not('.active, .category-title').has('ul').children('ul').addClass('hidden-ul');

        $('.navigation').find('li').has('ul').children('a').addClass('has-ul');

        $('.dropdown-menu:not(.dropdown-content), .dropdown-menu:not(.dropdown-content) .dropdown-submenu').has('li.active').addClass('active').parents('.navbar-nav .dropdown:not(.language-switch), .navbar-nav .dropup:not(.language-switch)').addClass('active');

        $('.dropdown-menu').find('.dropdown-submenu').not('.disabled').find('.dropdown-toggle').on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();

            $(this).parent().siblings().removeClass('open');

            $(this).parent().toggleClass('open');

            $(this).parents('.open').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-submenu.open').removeClass('open');
            });
        });
    },
    panel_elements: function () {
        "use strict";
        $('.panel .heading-elements .refresh_element').click(function (e) {
            e.preventDefault();
            var a = $(this).closest(".panel");
            if (!$(a).hasClass("panel-loading")) {
                var t = $(a).find(".panel-body").first();
                $(a).addClass("panel-loading"), $(t).prepend('<div class="panel-loader"><span class="loading_small"></span></div>'), setTimeout(function () {
                    $(a).removeClass("panel-loading"), $(a).find(".panel-loader").remove()
                }, 2000)
            }
        });

        $(".panel .heading-elements .fullscreen_element").on("click", function (e) {
            e.preventDefault();
            var a = $(this).closest(".panel");
            if (!$(a).hasClass("fullscreen")) {
                $(a).removeClass("close_fullscreen");
                $("body").css("overflow", "hidden");
                $(a).addClass("fullscreen");
            } else {
                $("body").css("overflow", "auto");
                $(a).removeClass("fullscreen").addClass("close_fullscreen");
            }
        });

        $('.panel .heading-elements .close_element').click(function (e) {
            e.preventDefault();
            var $panelClose = $(this).closest(".panel").parent();
            App.body_height();
            $panelClose.slideUp(150, function () {
                $(this).remove();
            });
        });

        $('.panel-collapsed').children('.panel-heading').nextAll().hide();
        $('.panel .heading-elements .collapse_element').click(function (e) {
            e.preventDefault();
            var $panelCollapse = $(this).closest('.panel-heading').nextAll();
            $(this).parents('.panel').toggleClass('panel-collapsed').css('height', 'auto');

            if ($(this).find('a').hasClass('up')) {
                $(this).find('a').removeClass('up').addClass('down');
            } else {
                $(this).find('a').removeClass('down').addClass('up');
                $('.equal_height').jQueryEqualHeight('.make_equal');
            }

            App.body_height();

            $panelCollapse.slideToggle(150);
        });
    },
    resize_nav    : function () {
        "use strict";
        $(window).on('resize', function () {
            setTimeout(function () {
                App.body_height();
                if ($(window).width() <= 768) {
                    $('.menu-list').getNiceScroll().remove();
                    $(".menu-list").removeAttr('style').removeAttr('tabindex');
                    $('.dropdown-submenu-hover').on('mouseenter touchstart', function () {
                        $(this).children('.dropdown-menu').addClass('show');
                    }).on('mouseleave touchend', function () {
                        $(this).children('.dropdown-menu').removeClass('show');
                    });
                } else {
                    $(".menu-list").niceScroll({
                        mousescrollstep: 100,
                        cursorcolor    : '#ccc',
                        cursorborder   : '',
                        cursorwidth    : 3,
                        hidecursordelay: 200,
                        autohidemode   : 'scroll',
                        railpadding    : {right: 0.5}
                    });
                    $('.page-header-content, .panel-heading, .panel-footer').removeClass('has-visible-elements');
                    $('.heading-elements').removeClass('visible-elements');
                    $('.dropdown-submenu').children('.dropdown-menu').removeClass('show');
                }
            }, 100);
        }).resize();
    },
    search_box    : function () {
        "use strict";
        var openCtrl = document.getElementById('btn-search'),
            closeCtrl = document.getElementById('btn-search-close'),
            searchContainer = document.querySelector('.search'),
            inputSearch = searchContainer.querySelector('.search__input');

        function init() {
            initEvents();
        }

        function initEvents() {
            openCtrl.addEventListener('click', openSearch);
            closeCtrl.addEventListener('click', closeSearch);
            document.addEventListener('keyup', function (ev) {
                // escape key.
                if (ev.keyCode == 27) {
                    closeSearch();
                }
            });
        }

        function openSearch() {
            searchContainer.classList.add('search--open');
            setTimeout(function () {
                inputSearch.focus();
            }, 0)
        }

        function closeSearch() {
            searchContainer.classList.remove('search--open');
            inputSearch.blur();
            inputSearch.value = '';
        }

        init();
    },
    full_screen   : function () {
        "use strict";

        function toggleFullScreenMode() {
            if ((document.fullScreenElement && document.fullScreenElement !== null) ||
                (!document.mozFullScreen && !document.webkitIsFullScreen)) {
                if (document.documentElement.requestFullScreen) {
                    document.documentElement.requestFullScreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullScreen) {
                    document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }
        }

        $("#toggleFullScreen").on("click", function () {
            toggleFullScreenMode();
        });
    },
    to_top        : function () {
        "use strict";
        var offset = 300,
            offset_opacity = 1200,
            scroll_top_duration = 500,
            $back_to_top = $('.back-to-top');

        $(window).scroll(function () {
            ($(this).scrollTop() > offset) ? $back_to_top.addClass('back-to-top-is-visible') : $back_to_top.removeClass('back-to-top-is-visible cd-fade-out');
            if ($(this).scrollTop() > offset_opacity) {
                $back_to_top.addClass('back-to-top-fade-out');
            }
        });

        $back_to_top.on('click', function (event) {
            event.preventDefault();
            $('body, html').animate({
                scrollTop: 0,
            }, scroll_top_duration);
        });
    },
    office_sidebar: function () {
        "use strict";

        function o365cs() {
            var bas = $('.o365cs-base');
            if ($(bas).attr('data-ispopup') == 0) {
                $(bas).css("display", "block");
                $(bas).attr('data-ispopup', 1);
                $(".sm-container").addClass("sm-menu-open");
            } else {
                $(bas).css("display", "none");
                $(bas).attr('data-ispopup', 0);
                $(".sm-container").removeClass("sm-menu-open");
            }
        }

        $(function () {
            var bas = $('.o365cs-base');
            $(".o365cs-base .o365cs-nav-closeButton").on("click", function () {
                $(bas).removeClass("slideInT").addClass("slideOutT");
                setTimeout(function () {
                    o365cs();
                }, 500)
            });
            $(".open_ms_menu").on("click", function () {
                $(bas).removeClass("slideOutT").addClass("slideInT");
                o365cs();
            });
        });
    },
    sign_in       : function () {
        "use strict";
        $(".open_login_modal").on("click", function () {
            $('#login_modal').modal('toggle')
        });
    },
    equal_height  : function () {
        App.includeScript(plugin_path + 'jquery-equal-height/jquery-equal-height.min.js', function () {
            $('.equal_height').jQueryEqualHeight('.make_equal');
            $(window).on('resize', function () {
                setTimeout(function () {
                    $('.equal_height').jQueryEqualHeight('.make_equal');
                }, 100);
            }).resize();
        });
    },
    lazy_load     : function () {
        App.includeScript(plugin_path + 'jquery.lazy/jquery.lazy.min.js', function () {
            $('.lazy').lazy();
        });
    },
    place_holder  : function (id, sentences, startOnFocus) {
        var startOnFocus = (typeof (startOnFocus) == "undefined") ? true : startOnFocus;
        var sentences = (typeof (sentences) == "undefined" || sentences == "") ? " " : sentences;
        superplaceholder({
            el       : document.querySelector('#' + id),
            sentences: sentences,//$(this).attr("superPlaceholder"),
            options  : {
                loop         : true,
                letterDelay  : 100, // milliseconds // delay between letters (in milliseconds)
                sentenceDelay: 1000, // delay between sentences (in milliseconds)
                startOnFocus : startOnFocus, //true, // should start on input focus. Set false to autostart
                shuffle      : false,	// Initially shuffle the passed sentences
                showCursor   : true, // Show cursor or not. Shows by default
                cursor       : '|' // String to show as cursor
            }
        })
    },
    includeScript : function (scriptName, callback) {
        var _arr = {};
        if (!_arr[ scriptName ]) {
            _arr[ scriptName ] = true;
            var body = document.getElementsByTagName('head')[ 0 ];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = scriptName;
            script.onload = callback;
            body.appendChild(script);
        } else if (callback) {
            callback();
        }
    },
    includeStyle  : function (scriptName, callback) {
        var _arrstyle = {};
        if (!_arrstyle[ scriptName ]) {
            _arrstyle[ scriptName ] = true;
            var body = document.getElementsByTagName('head')[ 0 ];
            var style = document.createElement('link');
            style.setAttribute('rel', 'stylesheet');
            style.setAttribute('href', scriptName);
            style.onload = callback;
            body.after(style);
        } else if (callback) {
            callback();
        }
    },
    fancy_box     : function () {
        var _container = jQuery("[data-fancybox]");
        if (_container.length > 0) {
            console.log(_container)
            App.includeStyle(plugin_path + 'fancybox/css/jquery.fancybox.min.css');
            App.includeScript(plugin_path + 'fancybox/js/jquery.fancybox.min.js', function () {

            });
        }
    },
    google_map    : function () {
        var _container = jQuery("#google-map");
        if (_container.length > 0) {
            var a = [ {
                featureType: "all",
                elementType: "all",
                stylers    : [ {invert_lightness: true}, {saturation: 15}, {lightness: 15}, {gamma: .8}, {hue: "#0072ff"} ]
            }, {featureType: "water", stylers: [ {visibility: "on"}, {color: "#0072ff"} ]} ];

            var t = {
                zoom            : 13,
                center          : new google.maps.LatLng(12.970, 77.600),
                mapTypeId       : google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true
            };

            var e;
            google.maps.event.addDomListener(window, "load", t);
            e = new google.maps.Map(document.getElementById("google-map"), t);
            e.setOptions({styles: a});
            $(window).on("resize", function () {
                google.maps.event.trigger(e, "resize")
            });
        }
    },
    vector_map    : function () {
        var _container = jQuery("#world-map");
        if (_container.length > 0) {
            var e = $(window).height();
            var mapData = {"AU": 760, "IN": 200, "RU": 300, "US": 2920, "BR": 550,};
            $("#world-map").vectorMap({
                map              : "world_mill_en",
                normalizeFunction: "polynomial",
                hoverOpacity     : .5,
                hoverColor       : false,
                markerStyle      : {initial: {fill: "rgba(0.5, 64,215,224)", stroke: "transparent", r: 4}},
                regionStyle      : {
                    initial : {
                        fill            : "rgba(0.9, 64,191,224)",
                        "fill-opacity"  : 0.5,
                        stroke          : "none",
                        "stroke-width"  : .4,
                        "stroke-opacity": 1
                    }, hover: {"fill-opacity": .8}, selected: {fill: "yellow"}, selectedHover: {}
                },
                series           : {
                    regions: [ {
                        values           : mapData,
                        scale            : [ "#4076e0", "#ea4335", "#fbbc05", "#34a853", "#f37070" ],
                        normalizeFunction: 'polynomial'
                    } ]
                },
                focusOn          : {x: .5, y: .5, scale: 0},
                backgroundColor  : "#FFFFFF",
                markers          : [
                    {latLng: [ 41.90, 12.45 ], name: 'Vatican City'},
                    {latLng: [ 43.73, 7.41 ], name: 'Monaco'},
                    {latLng: [ -0.52, 166.93 ], name: 'Nauru'},
                    {latLng: [ -8.51, 179.21 ], name: 'Tuvalu'},
                    {latLng: [ 43.93, 12.46 ], name: 'San Marino'},
                    {latLng: [ 47.14, 9.52 ], name: 'Liechtenstein'},
                    {latLng: [ 7.11, 171.06 ], name: 'Marshall Islands'},
                    {latLng: [ 17.3, -62.73 ], name: 'Saint Kitts and Nevis'},
                    {latLng: [ 3.2, 73.22 ], name: 'Maldives'},
                    {latLng: [ 35.88, 14.5 ], name: 'Malta'},
                    {latLng: [ 12.05, -61.75 ], name: 'Grenada'},
                    {latLng: [ 13.16, -61.23 ], name: 'Saint Vincent and the Grenadines'},
                    {latLng: [ 13.16, -59.55 ], name: 'Barbados'},
                    {latLng: [ 17.11, -61.85 ], name: 'Antigua and Barbuda'},
                    {latLng: [ -4.61, 55.45 ], name: 'Seychelles'},
                    {latLng: [ 7.35, 134.46 ], name: 'Palau'},
                    {latLng: [ 42.5, 1.51 ], name: 'Andorra'},
                    {latLng: [ 14.01, -60.98 ], name: 'Saint Lucia'},
                    {latLng: [ 6.91, 158.18 ], name: 'Federated States of Micronesia'},
                    {latLng: [ 1.3, 103.8 ], name: 'Singapore'},
                    {latLng: [ 1.46, 173.03 ], name: 'Kiribati'},
                    {latLng: [ -21.13, -175.2 ], name: 'Tonga'},
                    {latLng: [ 15.3, -61.38 ], name: 'Dominica'},
                    {latLng: [ -20.2, 57.5 ], name: 'Mauritius'},
                    {latLng: [ 26.02, 50.55 ], name: 'Bahrain'},
                    {latLng: [ 0.33, 6.73 ], name: 'São Tomé and Príncipe'}
                ]
            });
        }
    },
    show_swal     : function () {
        var _container = jQuery(".sweet_alert");
        if (_container.length > 0) {

            $("#basic_alert").on("click", function () {
                swal("Here's a message!");
            });
            $("#title-and-text").on("click", function () {
                swal("Here's a message!", "It's pretty, isn't it?");
            });
            $("#success-message").on("click", function () {
                swal("Good job!", "You clicked the button!", "success");
            });
            $("#warning-message-and-confirmation").on("click", function () {
                swal({
                    title             : "Are you sure?",
                    text              : "You will not be able to recover this imaginary file!",
                    type              : "warning",
                    showCancelButton  : true,
                    confirmButtonClass: "btn btn-info btn-fill",
                    confirmButtonText : "Yes, delete it!",
                    cancelButtonClass : "btn btn-danger btn-fill",
                    closeOnConfirm    : false,
                }, function () {
                    swal("Deleted!", "Your imaginary file has been deleted.", "success");
                });
            });
            $("#warning-message-and-cancel").on("click", function () {
                swal({
                    title            : "Are you sure?",
                    text             : "You will not be able to recover this imaginary file!",
                    type             : "warning",
                    showCancelButton : true,
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText : "No, cancel plx!",
                    closeOnConfirm   : false,
                    closeOnCancel    : false
                }, function (isConfirm) {
                    if (isConfirm) {
                        swal("Deleted!", "Your imaginary file has been deleted.", "success");
                    } else {
                        swal("Cancelled", "Your imaginary file is safe :)", "error");
                    }
                });
            });
            $("#custom-html").on("click", function () {
                swal({
                    title: 'HTML example',
                    html : 'You can use <b>bold text</b>, ' +
                        '<a href="javascript:void(0)">links</a> ' +
                        'and other HTML tags'
                });
            });
            $("#auto-close").on("click", function () {
                swal({
                    title            : "Auto close alert!",
                    text             : "I will close in 2 seconds.",
                    timer            : 2000,
                    showConfirmButton: false
                });
            });
        }
    },
    showCookie    : function () {
        if (!$.cookie('ppbox')) {
            $('#cookie_modal').modal('show');
            $('.pvr_cookie').show();
        } else {
            if (confirm("Cookie already Accepted. Do you want to show it again.?")) {
                $.removeCookie('ppbox', {path: '/'});
                $('#cookie_modal').modal('toggle');
                $('.pvr_cookie').show();
            }
        }
    },
    cookie_close  : function () {
        var _container = jQuery(".pvr_cookie");
        if (_container.length > 0) {

            if (!$.cookie('ppbox')) {
                $('#cookie_modal').modal('show');
            }

            if (!$.cookie('ppbox')) {
                $('.pvr_cookie').show();
            }

            $('#cookie_modal').on('hide.bs.modal', function (e) {
                if ($("#chkRemember").is(":checked")) {
                    $.cookie('ppbox', 'hideit', {expires: 2, path: '/'});
                }
            });

            $("#agree_cookie").on('click', function (e) {
                e.preventDefault();
                $('#cookie_modal').modal('hide');
            });

            $(".closeModal").on("click", function () {
                $(".pvr_cookie").addClass("animated fadeOutDown");
                $.cookie('ppbox', 'hideit', {expires: 2, path: '/'});
            });


            /***** Demo Purpose *****/
            App.showCookie();

            $(".col-lg-4 .feature").find("a").on("click", function () {
                var id = $(this).attr("id");
                $("#cookie_modal").removeClass("left_top left_bottom right_top right_bottom top_center bottom_center");
                $("#cookie_modal").addClass(id);
                App.showCookie();
            });

            $("#cookie_position_select").on("change", function () {
                $(".pvr_cookie").addClass("fadeInUp").removeClass("fadeOutDown");
                $("#cookie_position").removeClass("topLeft bottomLeft boxedTopLeft boxedTopRight boxedBottomLeft boxedBottomRight boxedCenterTop boxedCenterBottom");
                $("#cookie_position").addClass($(this).val());
            });

            $("#cookie_color_select").on("change", function () {
                $(".pvr_cookie").addClass("fadeInUp").removeClass("fadeOutDown");
                $("#cookie_color").removeClass("cookie_dark cookie_light bg-primary bg-success bg-danger bg-info bg-warning bg-secondary");
                $("#cookie_color").addClass($(this).val());
            });
        }
    },
    generateCount : function (e) {
        if (!$(e).attr("data-init")) {
            var a = $(e).attr("data-number");
            var id = $(e).attr("id");
            var options = {
                useEasing  : true,
                useGrouping: true,
                separator  : ',',
                decimal    : '.',
            };
            var demo = new CountUp(id, 0, parseInt(a, 10), 0, 2.5, options);
            if (!demo.error) {
                demo.start();
            } else {
                console.error(demo.error);
            }
        }
    },
    generateTypeit: function (e) {
        if ("[data-typeit=true]".length !== 0) {
            var a = $.trim($(e).text());
            var id = $(e).attr("id");
            $('#' + id).typeIt({
                whatToType: a,
                typeSpeed : 100,
                cursor    : true,
            });
        }
    },
    count_js      : function () {
        App.includeScript(plugin_path + 'countup/countUp.min.js', function () {
            $("[data-count=true]").each(function () {
                App.generateCount($(this))
            });
        });
    },
    typeit_js     : function () {
        App.includeScript(plugin_path + 'typeit/typeit.min.js', function () {
            $("[data-typeit=true]").each(function () {
                App.generateTypeit($(this));
            })
        });
    },
    sidebar       : function () {
        var mobile_menu_visible = 0,
            mobile_menu_initialized = false,
            toggle_initialized = false,
            $sidebar,
            isWindows,
            side_nav;
        side_nav = {
            sidebar_mini: false
        };
        var _container = jQuery(".sidebar");
        if (_container.length > 0) {
            if ($(window).width() <= 1024) {
                $('body').addClass('sidebar-mini');
            }

            $('#minimizeSidebar, #minimizeSidebar1').on("click", function () {
                if (side_nav.sidebar_mini === true) {
                    console.log(this)
                    $('body').removeClass('sidebar-mini');
                    setTimeout(function () {
                        side_nav.sidebar_mini = false;
                    }, 300);
                    if (isWindows) {
                        $($sidebar_wrapper).slimScroll({
                            height: $(window).height() + 'px',
                        });
                    }
                } else {
                    console.log(this)
                    $('.sidebar .collapse').collapse('hide').on('hidden.bs.collapse', function () {
                        $(this).css('height', 'auto');
                    });
                    if (isWindows) {
                        $('.slimScrollDiv').each(function () {
                            $(this).replaceWith($(this).children());
                        })
                    }
                    setTimeout(function () {
                        $('body').addClass('sidebar-mini');
                        $('.sidebar .collapse').css('height', 'auto');
                        side_nav.sidebar_mini = true;
                    }, 300);
                }
                var simulateWindowResize = setInterval(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 180);
                setTimeout(function () {
                    clearInterval(simulateWindowResize);
                }, 1000);
            });

            var $sidebar_wrapper = $('.sidebar-wrapper');
            $sidebar = $('.sidebar');
            var image_src = $sidebar.data('image');
            var sidebar_container;
            if (image_src !== undefined) {
                sidebar_container = '<div class="sidebar-background" style="background-image: url(' + image_src + ') "></div>';
                $sidebar.append(sidebar_container);
            } else if (mobile_menu_initialized === true) {
                $sidebar_wrapper.find('.navbar-form').remove();
                $sidebar_wrapper.find('.nav-mobile-menu').remove();
                mobile_menu_initialized = false;
            }

            $($sidebar_wrapper).slimScroll({
                height       : $(window).height() + 'px',
                color        : '#333333',
                size         : '4px',
                alwaysVisible: true
            });

            $(".sidebar .nav > .has-sub-menu > a").on("click", function () {
                var e = $(this).next(".sub-menu");
                $(e).hasClass("in") ? $(e).collapse('hide') : $(e).collapse('show');
                $(".sidebar .nav > li.has-sub-menu > .sub-menu").not(e).collapse('hide');
                $(e).on('show.bs.collapse', function () {
                    $(this).find(".collapse.show").collapse('hide');
                });
                return false;
            });


            var $sidebar_wrapper = $('.sidebar-wrapper');
            var nav_content;
            if (mobile_menu_initialized) {
                if ($(window).width() > 991) {
                    $sidebar_wrapper.find('.navbar-form').remove();
                    $sidebar_wrapper.find('.nav-mobile-menu').remove();
                    mobile_menu_initialized = false;
                }
            } else {
                var $navbar;
                $navbar = $('nav').find('.navbar-collapse').first().clone(true);
                nav_content = '';
                var mobile_menu_content;
                mobile_menu_content = '';
                $navbar.children('ul').each(function () {
                    var content_buff;
                    content_buff = $(this).html();
                    nav_content = nav_content + content_buff;
                });
                nav_content = '<ul class="nav nav-mobile-menu">' + nav_content + '</ul>';
                var $sidebar_nav;
                $sidebar_nav = $sidebar_wrapper.find(' > .nav');
                var $nav_content;
                $nav_content = $(nav_content);
                $nav_content.insertBefore($sidebar_nav);
                $(".sidebar-wrapper .dropdown .dropdown-menu > li > a").on("click", function (event) {
                    event.stopPropagation();
                });
                mobile_menu_initialized = true;
            }

            var $toggle;
            if (!toggle_initialized) {
                $toggle = $('.navbar-toggler');
                $toggle.on("click", function () {
                    var $layer;
                    if (mobile_menu_visible === 1) {
                        $('html').removeClass('nav-open');
                        $('.close-layer').remove();
                        setTimeout(function () {
                            $toggle.removeClass('toggled');
                        }, 400);
                        mobile_menu_visible = 0;
                    } else {
                        setTimeout(function () {
                            $toggle.addClass('toggled');
                        }, 430);
                        var main_panel_height;
                        main_panel_height = $('body').scrollHeight;
                        $layer = $('<div class="close-layer"></div>');
                        $layer.css('height', main_panel_height + 'px');
                        $layer.appendTo("body");
                        setTimeout(function () {
                            $layer.addClass('visible');
                        }, 100);
                        $layer.on("click", function () {
                            $('html').removeClass('nav-open');
                            mobile_menu_visible = 0;
                            $layer.removeClass('visible');
                            setTimeout(function () {
                                $layer.remove();
                                $toggle.removeClass('toggled');
                            }, 400);
                        });
                        $('html').addClass('nav-open');
                        mobile_menu_visible = 1;
                    }
                });
                toggle_initialized = true;
            }

            /***** PAGE CUSTOMIZER *****/
            $('body').on('click', '.template-options-btn', function (e) {
                e.preventDefault();
                $('.template-options-wrapper').toggleClass('show');
                var $layer;
                if ($('.template-options-wrapper').hasClass("show")) {
                    var main_panel_height;
                    main_panel_height = $('body').scrollHeight;
                    $layer = $('<div class="close_layer_theme"></div>');
                    $layer.css('height', main_panel_height + 'px');
                    $layer.appendTo("body");

                    $layer.on("click", function () {
                        $('.template-options-wrapper').toggleClass('show');
                        $layer.remove();
                    });
                }
            });
            /***** PAGE CUSTOMIZER *****/
            $('body').on("click", '#header, #page-container', function () {
                if ($(".template-options-wrapper").hasClass('show')) {
                    $(".template-options-wrapper").removeClass("show");
                    $("#theme_panel_icon").removeClass("ion-ios-close-outline").addClass("ion-ios-settings");
                }
            });

            /***** PAGE CUSTOMIZER *****/
            $("#minified_sidebar").on("change", function () {
                var $body = $('body');
                var $input = $(this);
                if (side_nav.sidebar_mini == true) {
                    $('body').removeClass('sidebar-mini');
                    side_nav.sidebar_mini = false;
                    if (isWindows) {
                        $('.sidebar .sidebar-wrapper').perfectScrollbar();
                    }
                } else {
                    $('.sidebar .collapse').collapse('hide').on('hidden.bs.collapse', function () {
                        $(this).css('height', 'auto');
                    });
                    if (isWindows) {
                        $('.sidebar .sidebar-wrapper').perfectScrollbar('destroy');
                    }
                    setTimeout(function () {
                        $('body').addClass('sidebar-mini');
                        $('.sidebar .collapse').css('height', 'auto');
                        side_nav.sidebar_mini = true;
                    }, 300);
                }
                // we simulate the window Resize so the charts will get updated in realtime.
                var simulateWindowResize = setInterval(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 180);
                // we stop the simulation of Window Resize after the animations are completed
                setTimeout(function () {
                    clearInterval(simulateWindowResize);
                }, 1000);
            });

            /***** PAGE CUSTOMIZER *****/
            var $sidebar_img_container = $sidebar.find('.sidebar-background');
            $("#background_image_sidebar").on("change", function () {
                var $input = $(this);
                var background_image = "";
                if ($input.is(':checked')) {
                    $sidebar_img_container.fadeIn('fast');
                    background_image = true;
                } else {
                    $sidebar_img_container.fadeOut('fast');
                    background_image = false;
                }
            });

            /***** PAGE CUSTOMIZER *****/
            $('.bg_imgs li').on("click", function () {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
                var new_image = $(this).find("a img").attr('src');
                if ($sidebar.length != 0) {
                    $sidebar.attr('data-image', new_image);
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                }
            });

            /***** PAGE CUSTOMIZER *****/
            $('.top-bar-color-selector').on("click", function () {
                $(this).siblings().removeClass('selected');
                $(this).addClass('selected');
                var new_color = $(this).data('color');
                if ($sidebar.length != 0) {
                    $sidebar.attr('data-color', new_color);
                }
            });

            /***** PAGE CUSTOMIZER *****/
            var classes = [];
            $.each($('[data-color].top-bar-color-selector'), function (i, d) {
                var new_color = $(d).data('color');
                classes.push(new_color)
            });
            var length = classes.length;
            $.each(classes, function (key, value) {
                /*setInterval(function () {
                    $sidebar.attr('data-color', classes[ Math.floor(Math.random() * length) ]);
                },2000)*/
            });
        }
    },
    icons         : function () {
        var classes = [ "user", "people", "user-female", "user-follow", "user-following", "user-unfollow", "login", "logout", "emotsmile", "phone", "call-end", "call-in", "call-out", "map", "location-pin", "direction", "directions", "compass", "layers", "menu", "list", "options-vertical", "options", "arrow-down", "arrow-left", "arrow-right", "arrow-up", "arrow-up-circle", "arrow-left-circle", "arrow-right-circle", "arrow-down-circle", "check", "clock", "plus", "minus", "close", "exclamation", "organization", "trophy", "screen-smartphone", "screen-desktop", "plane", "notebook", "mustache", "mouse", "magnet", "energy", "disc", "cursor", "cursor-move", "crop", "chemistry", "speedometer", "shield", "screen-tablet", "magic-wand", "hourglass", "graduation", "ghost", "game-controller", "fire", "eyeglass", "envelope-open", "envelope-letter", "bell", "badge", "anchor", "wallet", "vector", "speech", "puzzle", "printer", "present", "playlist", "pin", "picture", "handbag", "globe-alt", "globe", "folder-alt", "folder", "film", "feed", "drop", "drawer", "docs", "doc", "diamond", "cup", "calculator", "bubbles", "briefcase", "book-open", "basket-loaded", "basket", "bag", "action-undo", "action-redo", "wrench", "umbrella", "trash", "tag", "support", "frame", "size-fullscreen", "size-actual", "shuffle", "share-alt", "share", "rocket", "question", "pie-chart", "pencil", "note", "loop", "home", "grid", "graph", "microphone", "music-tone-alt", "music-tone", "earphones-alt", "earphones", "equalizer", "like", "dislike", "control-start", "control-rewind", "control-play", "control-pause", "control-forward", "control-end", "volume-1", "volume-2", "volume-off", "calendar", "bulb", "chart", "ban", "bubble", "camrecorder", "camera", "cloud-download", "cloud-upload", "envelope", "eye", "flag", "heart", "info", "key", "link", "lock", "lock-open", "magnifier", "magnifier-add", "magnifier-remove", "paper-clip", "paper-plane", "power", "refresh", "reload", "settings", "star", "symbol-female", "symbol-male", "target", "credit-card", "paypal", "social-tumblr", "social-twitter", "social-facebook", "social-instagram", "social-linkedin", "social-pinterest", "social-github", "social-google", "social-reddit", "social-skype", "social-dribbble", "social-behance", "social-foursqare", "social-soundcloud", "social-spotify", "social-stumbleupon", "social-youtube", "social-dropbox" ];

        //var classes = new Array('btn-success', 'btn-primary', 'btn-warning', "btn-danger", "btn-info");
        var length = classes.length;
        var links = $('.make_icon');
        $.each(links, function (key, value) {
            $(value).addClass("icons icon-" + classes[ Math.floor(Math.random() * length) ]);
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    $('body').addClass('no-transitions');
});

window.addEventListener('load', function () {
    $('body').removeClass('no-transitions');
    App.main();
});