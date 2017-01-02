var data = []


ajaxQueue([
        "http://localhost:5000/secex/ports/type/year/?product=0901&states=11",
        "http://localhost:5000/metadata/ports"
    ], 
    function(responses){
        responses[0].data.forEach(function(item , index){
            data.push({
                "port": item[0],
                "type": item[1],
                "year": item[2],
                "value": item[3],
                "kg": item[4]
            });
        });

        data.map(function(item){
            item.name = responses[1].ports[item.port];
        });

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
                    "value": "asdsd",
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
            .title("Balança Comercial dos Soja no Brasil (Jan 2000-Mar 2016)")
            .title({
                "sub": "Baseado nos Estados Produtores."
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
                            {"Both": "Both"},
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
            .format({
                  "text": function(text, params) {
                    
                    if (text === "usd") {
                      return "Trade Value";
                    }
                    else {
                      return d3plus.string.title(text, params);
                    }
                    
                  },
                  "number": function(number, params) {
                    
                    var formatted = d3plus.number.format(number, params);
                    
                    if (params.key === "value") {
                      return "$" + formatted + " USD";
                    }
                    else {
                      return formatted;
                    }
                    
                  }
                })
            .time({
                "value": "year"
            })

            .draw()
    }
);


