var data = [];

$(document).ready(function(){
    ajaxQueue([
        "http://api.staging.dataviva.info/rais/year/gender/cnae",
        "http://api.staging.dataviva.info/metadata/ports"
    ], 

    function(responses){
        responses = [
            api,
            metadata
        ];

        responses[0].data.forEach(function(item , index){
            data.push({
                "year": item[0],
                "gender": item[1] == "1" ? "Male" : "Female",
                "cnae": item[2],
                "average_monthly_wage": +item[5]
            });
        });

        data.map(function(item){
            item.name = responses[1].industries[item.cnae].name_pt;
        });

        var visualization = d3plus.viz()
        .container("#viz")
        .type("radar")
        .data(data)
        .id(["gender", "name"])
        .color("gender",
            {"tooltip":("gender")})
        .size("average_monthly_wage")
        .time({"value": "year", "solo": []})
        .tooltip({"value": false})
        .format({
            "text": function(text, params) {
                if (params.key === "0") {
                    return "Female";
                }
                else if (params.key === "1") {
                    return "Male";
                }
                else {
                    return d3plus.string.title(text, params);
                }
            }
        })
        .background("transparent")
        .draw();

    });
});

