$(document).ready(function () {
    //getJsonData('file.json');
    //loadDataToListView();

    getListView('file2.json', '#listView_dessert');

});

//---------------------------------------------------

var dataJSON;

function getJsonData(url, id) {
    $.getJSON(url, function (data) {
        dataJSON = data;

        var index = id;
        var name = dataJSON[index].name;
        $('.header>h1').text(name);

        var urlImage = dataJSON[index].url;
        $('.photos-container>img').attr('src', urlImage);
        $('.photos-container>img').attr('alt', name);
        document.title = name;

        var time = dataJSON[index].time;
        var level = dataJSON[index].level;
        var portions = dataJSON[index].portions;
        $("#s1 p").text(time);
        $("#s2 p").text(level);
        $("#s3 p").text(portions);

        var gradients = dataJSON[index].gradients;
        $("#two .components").html('<fieldset data-role="controlgroup"><h3 class="ui-bar ui-bar-a ui-corner-all">Składniki:</h3></fieldset>');
        $.each(gradients, function (gradient, quantity) {
            $("fieldset").append('<input type="checkbox" name="' + quantity + '" id="id' + gradient + '"><label for="id' + gradient + '">' + gradient + ' : ' + quantity + '</label>');
        });
        $("#two .components").trigger('create');

        var nextId = 1;
        $("#add").click(function () {
            nextId++;
            var nick = $('#nick').val();
            var mess = $('#tag').val();
            var content = "<div data-role='collapsible' id='set" + nextId + "'><h3>" + nick + "</h3><p>" + mess + "</p></div>";
            $("#set").append(content).collapsibleset("refresh");
        });

        var recipe = dataJSON[index].recipe;
        $("#three #recipeContent p").text(recipe);

        var tips = dataJSON[index].tips;
        $.each(tips, function (index, value) {
            $("#four .listView").append("<li><h2>" + index + "</h2><p>" + value + "</p></li>");
        })
        $("#four .listView").trigger('create');


        window.location.href = 'index2.html#one';
    });
}

function run(id) {
    getJsonData('file2.json', id);
}


function getListView(setUrl, where) {
    $.ajax({
        url: setUrl,
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function (data) {
            var items = [];

            $.each(data, function (index, value) {
                // items.push("<li class='ui-li-has-thumb'>")
                items.push("<a rel='external' onclick=run(" + index + ") class='ui-btn ui-btn-icon-right ui-icon-carat-r'>");
                items.push("<img src='" + value.url + "'>");
                items.push("<h2>" + value.name + "</h2>");
                items.push("<p>" + value.author + "</p>");
                items.push("</a>");
                // items.push("</li>");
            });



            $("<li/>", {
                "class": "ui-li-has-thumb",
                html: items.join("")
            }).appendTo(where);
        }
    });
}