$(document).ready(function(){

    var params = {
        title: "Titulo",
        subtitle: "Subtitulo"
    }
    var visualization = d3plus.viz()
        .container("#viz")
        .data(data)
        .type("line")
        .text("name")
        .color("port")
        .id(["port", "type"])
        .background("transparent")
        .shape({"interpolate": "monotone"})
        .x("year")
        .y({
            "value": "kg",
            "label": {
                "value": "Eixo Y",
                "font": {
                    "size": 20
                }
            }
        })
        .title({
            "font": {"align": "left"},
            "padding": 5,
            "sub": {"font": {"align": "left"}},
            "total": {"font": {"align": "left"}}
        })
        .title(params.title)
        .title({
            "sub": params.subtitle
        })

        .ui([
                {
                    "label": "Escala",
                    "type": "drop",
                    "value": [
                        {"Linear": "linear"},
                        {"Log": "log"}
                    ],
                    "method": function(value, viz){
                        viz.y({
                            "scale": value
                        }).draw();
                    }
                },
                {
                    "label" : "Agregação",
                    "type" : "drop",
                    "value" : [
                        {"Balança Comercial": "both"},
                        {"Exportação": "export"},
                        {"Importação": "import"}
                    ],
                    "method" : function(value, viz){
                        if(value == "Both"){
                            viz.id({
                                "value": ["port", "type"],
                                "solo" : []
                            }).depth(0).draw();
                        }
                        else {
                            viz.id({
                                "value": ["port", "type"],
                                "solo" : [value]
                            }).depth(1).draw();
                        }
                    }
                  },
                {
                    "method" : "y",
                    "value"  : [ "value" , "kg" ]
                }
        ])
        .time({
            "value": "year"
        })

        .tooltip({
            "value": {
                "importação" : function (obj) {
                    // console.log(obj.type);
                    if (obj.type[1].type === "import" )
                        return obj.type[1].value;
                    else 
                        return null;
                },
                "Exportação" : function (obj) {
                    if (obj.type[0].type === "export" )
                        return obj.type[0].value;
                    else 
                        return null;
                }
            },
            "children": 0,
            "html": function () {
                console.log("html");
            },
            "extent" : false
        })


        .draw()
});