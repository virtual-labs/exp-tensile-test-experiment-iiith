var state = [];

function setDefaultState() {
    var id = generateID();
    var baseState = {};
    baseState[ id ] = {
        status: "new",
        id    : id,
        title : "Buy New bike helmet."
    };
    syncState(baseState);
}

function generateID() {
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    return randLetter + Date.now();
}

function pushToState(title, status, id) {
    var baseState = getState();
    baseState[ id ] = {id: id, title: title, status: status};
    syncState(baseState);
}

function setToDone(id) {
    var baseState = getState();
    if (baseState[ id ].status === 'new') {
        baseState[ id ].status = 'done'
    } else {
        baseState[ id ].status = 'new';
    }

    syncState(baseState);
}

function deleteTodo(id) {
    var baseState = getState();
    delete baseState[ id ]
    syncState(baseState)
}

function resetState() {
    localStorage.setItem("state", null);
}

function syncState(state) {
    localStorage.setItem("state", JSON.stringify(state));
}

function getState() {
    return JSON.parse(localStorage.getItem("state"));
}

function addItem(text, status, id, noUpdate) {
    var id = id ? id : generateID();
    var c = status === "done" ? "danger" : "";
    var item =
        '<li data-id="' +
        id +
        '" class="animated flipInX ' +
        c +
        '"><div class="checkboxx"><span class="close"><i class="fa fa-times"></i></span><label><span class="checkbox-mask"></span><input type="checkbox" />' +
        text +
        "</label></div></li>";

    var isError = $(".form-control").hasClass("hidden");

    if (text === "") {
        $(".err")
            .removeClass("hidden")
            .addClass("animated bounceIn");
    } else {
        $(".err").addClass("hidden");
        $(".todo-list").append(item);
    }

    $(".refresh").removeClass("hidden");

    $(".no-items").addClass("hidden");

    setTimeout(function () {
        $(".todo-list li").removeClass("animated flipInX");
    }, 500);

    if (!noUpdate) {
        pushToState(text, "new", id);
    }
}

function refresh() {
    $(".todo-list li").each(function (i) {
        $(this)
            .delay(70 * i)
            .queue(function () {
                $(this).addClass("animated bounceOutLeft");
                $(this).dequeue();
            });
    });

    setTimeout(function () {
        $(".todo-list li").remove();
        $(".no-items").removeClass("hidden");
        $(".err").addClass("hidden");
    }, 800);
}

$(function () {
    var err = $(".err"),
        formControl = $(".form-control"),
        isError = formControl.hasClass("hidden");

    if (!isError) {
        formControl.blur(function () {
            err.addClass("hidden");
        });
    }

    $(".add-btn").on("click", function () {
        var itemVal = $(".form-control").val();
        addItem(itemVal);
        formControl.focus();
    });

    $(".refresh").on("click", refresh);

    $(".todo-list").on("click", 'input[type="checkbox"]', function () {
        var li = $(this)
            .parent()
            .parent()
            .parent();
        li.toggleClass("danger");
        li.toggleClass("animated flipInX");

        setToDone(li.data().id);

        setTimeout(function () {
            li.removeClass("animated flipInX");
        }, 500);
    });

    $(".todo-list").on("click", ".close", function () {
        var box = $(this)
            .parent()
            .parent();

        if ($(".todo-list li").length == 1) {
            box.removeClass("animated flipInX").addClass("animated                bounceOutLeft");
            setTimeout(function () {
                box.remove();
                $(".no-items").removeClass("hidden");
                $(".refresh").addClass("hidden");
            }, 500);
        } else {
            box.removeClass("animated flipInX").addClass("animated bounceOutLeft");
            setTimeout(function () {
                box.remove();
            }, 500);
        }

        deleteTodo(box.data().id)
    });

    $(".form-control").keypress(function (e) {
        if (e.which == 13) {
            var itemVal = $(".form-control").val();
            addItem(itemVal);
        }
    });
    $(".todo-list").sortable();
    $(".todo-list").disableSelection();
});

var todayContainer = document.querySelector(".today");


var d = new Date();


var weekday = new Array(7);
weekday[ 0 ] = "Sunday 😜";
weekday[ 1 ] = "Monday 💪😀";
weekday[ 2 ] = "Tuesday 😜";
weekday[ 3 ] = "Wednesday 😌☕️";
weekday[ 4 ] = "Thursday 🤗";
weekday[ 5 ] = "Friday 🍻";
weekday[ 6 ] = "Saturday 😴";


var n = weekday[ d.getDay() ];


var randomWordArray = Array(
    "Oh my, it's ",
    "Whoop, it's ",
    "Happy ",
    "Seems it's ",
    "Awesome, it's ",
    "Have a nice ",
    "Happy fabulous ",
    "Enjoy your "
);

var randomWord =
    randomWordArray[ Math.floor(Math.random() * randomWordArray.length) ];


todayContainer.innerHTML = randomWord + n;

$(document).ready(function () {
    var state = {
        "B1547380264566": {"status": "new", "id": "B1547380264566", "title": "Buy New bike helmet."},
        "W1547380279844": {"id": "W1547380279844", "title": "Candles?", "status": "new"},
        "W1547380279845": {"id": "W1547380279845", "title": "Get Movie tickets.", "status": "new"},
        "C1547380284093": {"id": "C1547380284093", "title": "Cute house plant?", "status": "new"},
        "U1547380287696": {"id": "U1547380287696", "title": "Drop earrings", "status": "new"},
        "M1547380291964": {"id": "M1547380291964", "title": "Bangles", "status": "new"},
        "S1547380296762": {"id": "S1547380296762", "title": "Scarf, or triple wear scarf?", "status": "done"},
        "D1547380300617": {"id": "D1547380300617", "title": "Picture frame", "status": "done"},
        "K1547380303823": {"id": "K1547380303823", "title": "Invite inspiration", "status": "done"},
        "U1547380307386": {"id": "U1547380307386", "title": "Surprise party for Kristen!", "status": "done"}
    };

    if (!state) {
        setDefaultState();
        state = getState();
    }

    Object.keys(state).forEach(function (todoKey) {
        var todo = state[ todoKey ];
        addItem(todo.title, todo.status, todo.id, true);
    });
});