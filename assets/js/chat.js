var app = {
    main   : function () {
        "use strict";
        app.execute();
    },
    execute: function () {
        var _container = jQuery(".popup_chat");
        if (_container.length > 0) {
            var count = 0;
            var classes = [ "theme_1", "theme_2", "theme_3", "theme_4" ];
            var length = classes.length;
            $(function () {
                $('.app_chat_button, .pvr_chat_cnt .chat-close').on('click', function () {
                    $('.pvr_chat_cnt').toggleClass('active');
                    return false;
                });

                $('.message-input').on('keypress', function (e) {
                    if (e.which == 13) {
                        var val = ($(this).val() !== '') ? $(this).val() : "Lorem Ipsum is simply dummy text of the printing.";
                        $('.chat-messages').append('<div class="message self"><div class="message-content">' + val + '</div></div>');
                        $(this).val('');
                        setTimeout(function () {
                            $('.chat-messages').append('<div class="message"><div class="message-content">' + val + '</div></div>');
                            $messages_w.scrollTop($messages_w.prop("scrollHeight"));
                            $messages_w.perfectScrollbar('update');
                        }, 200)
                        var $messages_w = $('.pvr_chat_cnt .chat-messages');
                        $messages_w.scrollTop($messages_w.prop("scrollHeight"));
                        $messages_w.perfectScrollbar('update');
                        return false;
                    }
                });

                $('.pvr_chat_cnt .chat-messages').perfectScrollbar();
                App.place_holder("message-input", [ 'Type your message here...', 'Press Enter to Send Message...' ], false)

                $(".change_chat_theme").on('click', function () {
                    $(".chat-messages").removeAttr("class").addClass("chat-messages " + classes[ count ]);
                    if (parseInt(count, 10) === parseInt(length, 10) - 1) {
                        count = 0;
                    } else {
                        count = parseInt(count, 10) + 1;
                    }
                    var $messages_w = $('.pvr_chat_cnt .chat-messages');
                    $messages_w.scrollTop($messages_w.prop("scrollHeight"));
                    $messages_w.perfectScrollbar('update');
                });

                setTimeout(function () {
                    if (typeof index !== 'undefined' && index == 1) {
                        $('.pvr_chat_cnt').addClass('active')
                    }
                }, 2500)
            });
        }
    },
};
window.addEventListener('load', function () {
    app.main();
});