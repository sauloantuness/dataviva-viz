var data = [];

$(document).ready(function(){
    ajaxQueue([
        "http://localhost:5000/rais/year/gender/cnae_section",
        "http://localhost:5000/metadata/cnae_sections"
    ], 

    function(responses){

        responses[0].data.forEach(function(item , index){
            data.push({
                "year": item[0],
                "gender": item[1] == "1" ? "Male" : "Female",
                "cnae_section": item[2],
                "average_monthly_wage": +item[5],
                "jobs": item[6]
            });
        });

        data.map(function(item){
            item.name = responses[1].cnae_sections[item.cnae_section].name_pt;
        });

        var visualization = d3plus.viz()
            .container("#viz")
            .type("radar")
            .data(data)
            .id(["gender", "name"])
            .color({
                "value": "gender",
                "tooltip": "name"
            })
            .size("average_monthly_wage")
            .time({
                "value": "year",
                "solo": []
            })
            .background("transparent")
            .draw();

    });
});

