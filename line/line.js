$(document).ready(function(){

    var params = {
        title: "Titulo",
        subtitle: "Subtitulo"
    }

    var balance_kg = function(items){
        var sum = 0;

        if(items.length == 1)
            return items[0].kg;

        items.forEach(function(elem, index, array){
            if(elem.type == "export")
                sum += elem.kg;
            else
                sum -= elem.kg;
        });

        return sum;
    }
     var balance_value = function(items){
        var sum = 0;

        if(items.length == 1)
            return items[0].value;

        items.forEach(function(elem, index, array){
            if(elem.type == "export")
                sum += elem.value;
            else
                sum -= elem.value;
        });

        return sum;
    }

    var visualization = d3plus.viz()
        .container("#viz")
        .data(data)
        .type("line")
        .text("name")
        .color("port")
        .id(["port", "type"])
        .background("transparent")
        .aggs({
            "kg": balance_kg,
            "value": balance_value
        })
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
        .tooltip({
             "value": [ "name", "type"], //O "type" só é exibido se não estiver com "balança comercial" selecionado no grafico"
             "children": true
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
                        if(value == "both"){
                            viz.id({
                                "value": ["port", "type"],
                                "solo" : [],
                            })
                            .depth(0)
                            .draw();
                        }
                        else {
                            viz.id({
                                "value": ["port", "type"],
                                "solo" : [value]
                            }).depth(1)
                            .draw();
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