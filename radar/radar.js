    var visualization = d3plus.viz()
    .container("#viz")
    .data(sample_data)
    .id(["gender", "cbo"])
    .color("gender")
    .size("employee_count")
    .type("radar")
    .time({"value": "year", "solo": 2009})


    .ui([{
                    "label" : "Agregação",
                    "type" : "drop",
                    "value" : [
                        {"Todos": "all"},
                        {"Comercio": "comercio"},
                        {"Administração Pública": "administracao_publica"},
                        {"Indústrias de Transformação": "industrias_de_transformacao"},
                        {"Atividades Administrativas": "atividades_administrativas"},
                        {"Construção": "construcao"},
                        {"Transporte e correio": "transporte_correio"},
                        {"Saúde e Serviços Sociais": "saude_servicos_socias"},
                        {"Educação": "educacao"},
                        {"Alojamento e Alimentação": "alojamento_alimentacao"},
                        {"Agropecuária": "agropecuaria"},
                        {"Outros Serviços": "outros_servicos"},
                        {"Serviços Especializados": "servicos_especializados"},
                        {"Atividades Financeiras": "atividades_financeiras"},
                        {"Informação e Comunicação": "informacao_comunicacao"},
                        {"Saneamento Básico": "saneamento_basico"},
                        {"Indústrias Extrativas": "industrias_extrativas"},
                        {"Artes, Cultura e Recreação": "artes_cultura_recreacao"},
                        {"Atividades Imobiliárias": "atividades_imobiliarias"},
                        {"Eletricidade e Gás": "eletricidade_gas"},
                        {"Serviços Domésticos": "servicos_domesticos"},
                        {"Organismos Internacionais": "organismos_internacionais"}
                    ],
                    "method" : function(value, viz){                        
                        if(value == "all"){
                            viz.data(sample_data)
                            .id({
                                "value": ["gender", "cbo"],
                                "solo" : []
                            }).depth(0).draw();

                        }
                        else if(value == "comercio"){
                            viz.data(sample_data_comercio)
                            .time({"value": "year", "solo": 2010})
                            .color("gender")
                            .id({
                                "value": ["gender", "cbo"],
                                "solo" : []
                            })
                            .draw();
                        }
                        else if(value == "administracao_publica"){
                           viz.data(sample_data_administracao_publica)
                           .time({"value": "year", "solo": 2010})
                           .color("gender")
                           .id({
                                "value": ["gender", "cbo"],
                                "solo" : []
                            })
                            .draw();
                        }
                        else if(value == "industrias_de_transformacao"){
                            
                        }
                        else if(value == "atividades_administrativas"){
                            
                        }
                        else if(value == "construcao"){
                            
                        }
                        else if(value == "transporte_correio"){
                            
                        }
                        else if(value == "saude_servicos_socias"){
                            
                        }
                        else if(value == "educacao"){
                            
                        }
                        else if(value == "alojamento_alimentacao"){
                            
                        }
                        else if(value == "agropecuaria"){
                            
                        }
                        else if(value == "outros_servicos"){
                            
                        }
                        else if(value == "servicos_especializados"){
                            
                        }
                        else if(value == "atividades_financeiras"){
                            
                        }
                        else if(value == "informacao_comunicacao"){
                            
                        }
                        else if(value == "saneamento_basico"){
                            
                        }
                        else if(value == "industrias_extrativas"){
                            
                        }
                        else if(value == "artes_cultura_recreacao"){
                            
                        }
                        else if(value == "atividades_imobiliarias"){
                            
                        }
                        else if(value == "eletricidade_gas"){
                            
                        }
                        else if(value == "servicos_domesticos"){
                            
                        }
                        else{
                            
                        }

                    }
           }])

    .background("transparent")
    // .title({
    //     "font": {"align": "left"},
    //     "padding": 5,
    //     "sub": {"font": {"align": "left"}},
    //     "total": {"font": {"align": "left"}}
    // })
    // .title("Balança Comercial dos Soja no Brasil (Jan 2000-Mar 2016)")
    // .title({
    //     "sub": "Baseado nos Estados Produtores."
    // })
    .draw();
