
/*
* Venture pact Cost calculator.
* Developed by Tarun Gupta
*/

//Json data for calculations

var data = {
    "ZoneList": [
        {
            "title": "This is the title for Zone Time",
            "name": "Zonetime ",
            "price": "30",
            "status": 1
        },
        {
            "title": "This is the title for Zone 2",
            "name": "Zone2",
            "price": "40",
            "status": 1
        },
        {
            "title": "This is the title for Zone 3",
            "name": "Zone3",
            "price": "50",
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

        //Render Question and thier options 
        var questionContainer = "";
        $.each(data.Questions, function (index, value) {
            var quedstionData = "<div class='questionDiv'>"
            var heading = '<div class="heading" id="qHead' + index + '">' + data.Questions[index].question + '</div>';
            //To check if radio button needed or checkbox
            var optionList = "";

            var d = data.Questions[index].data;
            $.each(d, function (i, v) {
                if (d[i].status) {
                    if (data.Questions[index].multi) {
                        optionList += "<span class='chkspan' ><input type='checkbox' value='" + d[i].factor + "' name='Q" + i + "' class='chkbox' /> </span>" + d[i].text;
                    } else {
                        optionList += "<span class='rdspan' ><input type='radio' name='Q" + index + "' value='" + d[i].factor + "' class='rdbutton'/>" + d[i].text;
                    }
                }
            });


            quedstionData = quedstionData + " " + heading + "<div class='optionlist'>" + optionList + "</div>";
            quedstionData += "</div>"; //end of the single question container
            questionContainer += quedstionData;
            console.log("data : " + JSON.stringify(data.Questions[index]));
        });
        $("#questionsContainer").html(questionContainer);

        // Render Zone and thier intial prices.
        var zonehtm = "";
        $.each(data.ZoneList, function (index, value) {

            //check for the status first
            if (data.ZoneList[index].status) {
                var name = '<span id="zoneHeading' + index + '">' + data.ZoneList[index].name + '</span>';
                var price = '<span id="zonePrice' + index + '">' + data.ZoneList[index].price + '</span>';

                zonehtm = zonehtm + "<div id= 'zonename" + index + "' title= '" + data.ZoneList[index].title + "'>" + name + " <br />" + price + "</div>";

            }
        });
        $("#zoneResult").html(zonehtm);
    },
    addToZone: function (el) {
        console.log("adding" + el);
        $("#zoneResult").find('[id^="zonename"]').each(function(index,value){
            var currentValue = parseInt($(this).find('[id^="zonePrice"').html());
            var newVal = (parseFloat(el)*100)* currentValue;
            $(this).find('[id^="zonePrice"').html(newVal);
            console.log("htlm "  +$(this).find('[id^="zonePrice"').html());
        });
    },
    removeFromZone: function (el) {
        console.log("removeing" + el);
        
    }



}