<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <META HTTP-EQUIV="CACHE-CONTROL" CONTENT="PUBLIC">
    <link rel="stylesheet" href="css/jquery.mobile-1.4.5.min.css" />
</head>

<body>

    <div data-role="page" data-theme="a" data-add-back-btn="true">
        <div data-role="">
            <div data-role="header" data-add-back-btn="true" data-position="fixed">
                <h1><?php echo $_GET["id"] ?></h1>
                <a href="index.php" class="ui-btn ui-shadow ui-corner-all ui-icon-home ui-btn-icon-notext ui-btn-inline ui-btn-right"></a>
            </div>
        </div>
    </div>


 



    <!-- skrypty -->
    <script src="js/jquery-1.11.1.min.js"></script>
    <script src="js/jquery.mobile-1.4.5.min.js"></script>

    <script>
        $( document ).ready(function() {
            
        });
    </script>

    <script>
        var dataJSON;

        function getJsonData(url) {
            $.getJSON(url, function(data) {
                dataJSON = data;
                console.log(dataJSON);
            });
        }

        function loadDataToListView() {
            $.each(dataJSON, function (index, value) {
                alert(index + " " + value);
            });
        }
        
        function getFile(setUrl, setClass, where) {
            $.ajax({
                url: setUrl,
                dataType: 'json',
                type: 'get',
                cache: false,
                success: function (data) {
                    var items = [];
                    $.each(data, function (index, value) {
                        items.push("<td id='" + index + "'>" + value + "</td>");
                    });

                    $("<tr>", {
                        "class": setClass,
                        html: items.join("")
                    }).appendTo(where);
                }
            });
        }

        function getFile2(setUrl, setClass, where) {
            $.ajax({
                url: setUrl,
                dataType: 'json',
                type: 'get',
                cache: false,
                success: function (data) {
                    var items = [];

                    $.each(data, function (index, value) {
                        items.push("<tr id='" + index + "'>");
                        items.push("<td>" + value.id + "</td>");
                        items.push("<td>" + value.tytul + "</td>");
                        items.push("<td>" + value.wydawnictwo + "</td>");
                        items.push("<td>" + value.autorzy.tab1 + "</td>");
                        items.push("<td>" + value.autorzy.tab2 + "</td>");
                        items.push("</tr>");
                    });

                    $("<tbody/>", {
                        "class": setClass,
                        html: items.join("")
                    }).appendTo(where);
                }
            });

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
                        items.push("<a href='"+ value.name +".html' class='ui-btn ui-btn-icon-right ui-icon-carat-r'>");
                        items.push("<img src='" + value.url + "'>");
                        items.push("<h2>" + value.name + "</h2>");
                        items.push("<p>" + value.author + "</p>");
                        items.push("</a>");
                    });

                    $("<li/>", {
                        "class": "ui-li-has-thumb ui-last-child",
                        html: items.join("")
                    }).appendTo(where);
                }
            });

        }
    </script>
</body>

</html>