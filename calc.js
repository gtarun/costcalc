//Json data for calculations

var data = {
    "Questions": [
        {
            "question": "What platforms will your app run on?",
            "multi": 1,
            "data": {
                "IOS": {
                    "status": 1,
                    "icon": "",
                    "factor": 0.89
                },
                "Android": {
                    "status": 1,
                    "icon": "",
                    "factor": 0.45
                },
                "Windows": {
                    "status": 1,
                    "icon": "",
                    "factor": 0.45
                },
                "Blackberry": {
                    "status": 1,
                    "icon": "",
                    "factor": 0.45
                },
                "Web": {
                    "status": 1,
                    "icon": "",
                    "factor": 0.45
                }
            }
        },
        {
            "question": "How big is your app going to be?",
            "multi": 0,
            "data": {
                "Small": {
                    "status": 1,
                    "icon": "",
                    "factor": 0.89
                },
                "Medium": {
                    "status": 1,
                    "icon": "",
                    "factor": 0.45
                },
                "Large": {
                    "status": 1,
                    "icon": "",
                    "factor": 0.45
                }
            }
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
        $.each(data.Questions, function (index, value) {
            console.log("data : " + JSON.stringify(data.Questions[index]));
        });
        $("#zoneResult").children().each(function () {
            $(this).find("[id^='zone']").html("$0");
        });
    },


}