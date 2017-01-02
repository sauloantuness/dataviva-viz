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

        // Codigo editado
        .tooltip({
            "value": [ "name", "value", "type"], //O "type" só é exibido se não estiver com "balança comercial" selecionado no grafico"
            "children": false
        })

        // link para documentacao: https://github.com/alexandersimoes/d3plus/wiki/Visualizations#tooltip


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

        .draw()
});