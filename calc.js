//Json data for calculations

var data = {
    "ZoneList": [
        {
            "name": "Zone2",
            "price": "30",
            "status": 1
        },
        {
            "name": "Zone2",
            "price": "30",
            "status": 1
        },
        {
            "name": "Zone3",
            "price": "40",
            "status": 1
        }

        ],

    "Questions": [
        {
            "question": "What platforms will your app run on?",
            "multi": 1,
            "data": [
                {
                    "status": 1,
                    "icon": "",
                    "factor": 0.89,
                    "text": "IOS"
                },
                {
                    "status": 1,
                    "icon": "",
                    "factor": 0.45,
                    "text": "Android"
                },
                {
                    "status": 1,
                    "icon": "",
                    "factor": 0.45,
                    "text": "Windows"
                },
                {
                    "status": 1,
                    "icon": "",
                    "factor": 0.45,
                    "text": "BlackBerry"
                },
                {
                    "status": 1,
                    "icon": "",
                    "factor": 0.45,
                    "text": "Web"
                }
            ]

        },
        {
            "question": "How big is your app going to be?",
            "multi": 0,
            "data": [
                {
                    "status": 1,
                    "icon": "",
                    "factor": 0.89,
                    "text": "Small"
                },
                {
                    "status": 1,
                    "icon": "",
                    "factor": 0.45,
                    "text": "Medium"
                },
                {
                    "status": 1,
                    "icon": "",
                    "factor": 0.45,
                    "text": "Large"
                }
            ]
        },
         {
            "question": "How will you handle user management?",
            "multi": 1,
            "data": [
                {
                    "status": 1,
                    "icon": "",
                    "factor": 0,
                    "text": "N/A"
                },
                {
                    "status": 1,
                    "icon": "",
                    "factor": 0.45,
                    "text": "Standard"
                },
                {
                    "status": 1,
                    "icon": "",
                    "factor": 0.45,
                    "text": "Social"
                },
                {
                    "status": 1,
                    "icon": "",
                    "factor": 0.45,
                    "text": "Enterprise"
                }
            ]
        }
        
    ]

}

    function _vpcalc(init) {
        console.log("API called ");
        var def = {
            Product: "VenturePact"
        };
        if (init) {
            if (window === this) {
                console.log("Windows");
                return new _vpcalc(init)
            }
            this.e = document.getElementById(init);
            return this;
        } else {
            return def;
        }

    }
_vpcalc.prototype = {
    renderData: function () {
        var questionData = "";
        $.each(data.Questions, function (index, value) {

            var heading = '<div class="heading" id="qHead' + index + '">' + data.Questions[index].question + '</div>';
            //To check if radio button needed or checkbox
            var optionList = "";

            var d = data.Questions[index].data;
            $.each(d, function (i, v) {
                if (d[i].status) {
                    if (data.Questions[index].multi) {
                        optionList += "<span class='chkbox' ><input type='checkbox' value='' name='Q" + i + "' /> </span>" + d[i].text;
                    } else {
                        optionList+= "<span class='radiobtn' ><input type='radio' name='Q" +i+ "' />" + d[i].text;
                    }
                }
            });



            questionData += heading + " " + optionList;
            console.log("data : " + JSON.stringify(data.Questions[index]));
        });
        $("#questionsContainer").html(questionData);
        var zonehtm = "";
        $.each(data.ZoneList, function (index, value) {
            if (data.ZoneList[index].status) {
                var name = '<span id="zoneHeading' + index + '">' + data.ZoneList[index].name + '</span>';
                var price = '<span id="zonePrice' + index + '">' + data.ZoneList[index].price + '</span>';

                zonehtm = zonehtm + "<div id= 'zonename" + index + "' title= 'This Zone include us and specific regions'>" + name + " <br />" + price + "</div>";

            }
        });
        $("#zoneResult").html(zonehtm);
    },


}