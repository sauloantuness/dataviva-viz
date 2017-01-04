  var sample_data = [
    {"year": 2009, "gender": "Female", "cbo": "Comércio", "employee_count": 4},
    {"year": 2009, "gender": "Female", "cbo": "Administração Pública", "employee_count": 7},
    {"year": 2009, "gender": "Female", "cbo": "Indústrias de Transformação", "employee_count": 2},
    {"year": 2009, "gender": "Female", "cbo": "Atividades Administrativas", "employee_count": 4},
    {"year": 2009, "gender": "Female", "cbo": "Construção", "employee_count": 7},
    {"year": 2009, "gender": "Female", "cbo": "Transporte e correio", "employee_count": 2},
    {"year": 2009, "gender": "Female", "cbo": "Saúde e Serviços Sociais", "employee_count": 4},
    {"year": 2009, "gender": "Female", "cbo": "Educação", "employee_count": 7},
    {"year": 2009, "gender": "Female", "cbo": "Alojamento e Alimentação", "employee_count": 2},
    {"year": 2009, "gender": "Female", "cbo": "Agropecuária", "employee_count": 4},
    {"year": 2009, "gender": "Female", "cbo": "Outros Serviços", "employee_count": 7},
    {"year": 2009, "gender": "Female", "cbo": "Serviços Especializados", "employee_count": 2},
    {"year": 2009, "gender": "Female", "cbo": "Atividades Financeiras", "employee_count": 4},
    {"year": 2009, "gender": "Female", "cbo": "Informação e Comunicação", "employee_count": 7},
    {"year": 2009, "gender": "Female", "cbo": "Saneamento Básico", "employee_count": 2},
    {"year": 2009, "gender": "Female", "cbo": "Indústrias Extrativas", "employee_count": 4},
    {"year": 2009, "gender": "Female", "cbo": "Artes, Cultura e Recreação", "employee_count": 7},
    {"year": 2009, "gender": "Female", "cbo": "Atividades Imobiliárias", "employee_count": 2},
    {"year": 2009, "gender": "Female", "cbo": "Eletricidade e Gás", "employee_count": 4},
    {"year": 2009, "gender": "Female", "cbo": "Serviços Domésticos", "employee_count": 7},
    {"year": 2009, "gender": "Female", "cbo": "Organismos Internacionais", "employee_count": 2},

    {"year": 2009, "gender": "Male", "cbo": "Comércio", "employee_count": 6},
    {"year": 2009, "gender": "Male", "cbo": "Administração Pública", "employee_count": 3},
    {"year": 2009, "gender": "Male", "cbo": "Indústrias de Transformação", "employee_count": 8},
    {"year": 2009, "gender": "Male", "cbo": "Atividades Administrativas", "employee_count": 6},
    {"year": 2009, "gender": "Male", "cbo": "Construção", "employee_count": 3},
    {"year": 2009, "gender": "Male", "cbo": "Transporte e correio", "employee_count": 8},
    {"year": 2009, "gender": "Male", "cbo": "Saúde e Serviços Sociais", "employee_count": 6},
    {"year": 2009, "gender": "Male", "cbo": "Educação", "employee_count": 3},
    {"year": 2009, "gender": "Male", "cbo": "Alojamento e Alimentação", "employee_count": 8},
    {"year": 2009, "gender": "Male", "cbo": "Agropecuária", "employee_count": 6},
    {"year": 2009, "gender": "Male", "cbo": "Outros Serviços", "employee_count": 3},
    {"year": 2009, "gender": "Male", "cbo": "Serviços Especializados", "employee_count": 8},
    {"year": 2009, "gender": "Male", "cbo": "Atividades Financeiras", "employee_count": 6},
    {"year": 2009, "gender": "Male", "cbo": "Informação e Comunicação", "employee_count": 3},
    {"year": 2009, "gender": "Male", "cbo": "Saneamento Básico", "employee_count": 8},
    {"year": 2009, "gender": "Male", "cbo": "Indústrias Extrativas", "employee_count": 6},
    {"year": 2009, "gender": "Male", "cbo": "Artes, Cultura e Recreação", "employee_count": 3},
    {"year": 2009, "gender": "Male", "cbo": "Atividades Imobiliárias", "employee_count": 8},
    {"year": 2009, "gender": "Male", "cbo": "Eletricidade e Gás", "employee_count": 6},
    {"year": 2009, "gender": "Male", "cbo": "Serviços Domésticos", "employee_count": 3},
    {"year": 2009, "gender": "Male", "cbo": "Organismos Internacionais", "employee_count": 8},

    {"year": 2010, "gender": "Female", "cbo": "Comércio", "employee_count": 5},
    {"year": 2010, "gender": "Female", "cbo": "Administração Pública", "employee_count": 8},
    {"year": 2010, "gender": "Female", "cbo": "Indústrias de Transformação", "employee_count": 3},
    {"year": 2010, "gender": "Female", "cbo": "Atividades Administrativas", "employee_count": 5},
    {"year": 2010, "gender": "Female", "cbo": "Construção", "employee_count": 8},
    {"year": 2010, "gender": "Female", "cbo": "Transporte e correio", "employee_count": 3},
    {"year": 2010, "gender": "Female", "cbo": "Saúde e Serviços Sociais", "employee_count": 5},
    {"year": 2010, "gender": "Female", "cbo": "Educação", "employee_count": 8},
    {"year": 2010, "gender": "Female", "cbo": "Alojamento e Alimentação", "employee_count": 3},
    {"year": 2010, "gender": "Female", "cbo": "Agropecuária", "employee_count": 5},
    {"year": 2010, "gender": "Female", "cbo": "Outros Serviços", "employee_count": 8},
    {"year": 2010, "gender": "Female", "cbo": "Serviços Especializados", "employee_count": 3},
    {"year": 2010, "gender": "Female", "cbo": "Atividades Financeiras", "employee_count": 5},
    {"year": 2010, "gender": "Female", "cbo": "Informação e Comunicação", "employee_count": 8},
    {"year": 2010, "gender": "Female", "cbo": "Saneamento Básico", "employee_count": 3},
    {"year": 2010, "gender": "Female", "cbo": "Indústrias Extrativas", "employee_count": 5},
    {"year": 2010, "gender": "Female", "cbo": "Artes, Cultura e Recreação", "employee_count": 8},
    {"year": 2010, "gender": "Female", "cbo": "Atividades Imobiliárias", "employee_count": 3},
    {"year": 2010, "gender": "Female", "cbo": "Eletricidade e Gás", "employee_count": 5},
    {"year": 2010, "gender": "Female", "cbo": "Serviços Domésticos", "employee_count": 8},
    {"year": 2010, "gender": "Female", "cbo": "Organismos Internacionais", "employee_count": 3},

    {"year": 2010, "gender": "Male", "cbo": "Comércio", "employee_count": 7},
    {"year": 2010, "gender": "Male", "cbo": "Administração Pública", "employee_count": 4},
    {"year": 2010, "gender": "Male", "cbo": "Indústrias de Transformação", "employee_count": 9},
    {"year": 2010, "gender": "Male", "cbo": "Atividades Administrativas", "employee_count": 7},
    {"year": 2010, "gender": "Male", "cbo": "Construção", "employee_count": 4},
    {"year": 2010, "gender": "Male", "cbo": "Transporte e correio", "employee_count": 9},
    {"year": 2010, "gender": "Male", "cbo": "Saúde e Serviços Sociais", "employee_count": 7},
    {"year": 2010, "gender": "Male", "cbo": "Educação", "employee_count": 4},
    {"year": 2010, "gender": "Male", "cbo": "Alojamento e Alimentação", "employee_count": 9},
    {"year": 2010, "gender": "Male", "cbo": "Agropecuária", "employee_count": 7},
    {"year": 2010, "gender": "Male", "cbo": "Outros Serviços", "employee_count": 4},
    {"year": 2010, "gender": "Male", "cbo": "Serviços Especializados", "employee_count": 9},
    {"year": 2010, "gender": "Male", "cbo": "Atividades Financeiras", "employee_count": 7},
    {"year": 2010, "gender": "Male", "cbo": "Informação e Comunicação", "employee_count": 4},
    {"year": 2010, "gender": "Male", "cbo": "Saneamento Básico", "employee_count": 9},
    {"year": 2010, "gender": "Male", "cbo": "Indústrias Extrativas", "employee_count": 7},
    {"year": 2010, "gender": "Male", "cbo": "Artes, Cultura e Recreação", "employee_count": 4},
    {"year": 2010, "gender": "Male", "cbo": "Atividades Imobiliárias", "employee_count": 9},
    {"year": 2010, "gender": "Male", "cbo": "Eletricidade e Gás", "employee_count": 7},
    {"year": 2010, "gender": "Male", "cbo": "Serviços Domésticos", "employee_count": 4},
    {"year": 2010, "gender": "Male", "cbo": "Organismos Internacionais", "employee_count": 9},

    {"year": 2011, "gender": "Female", "cbo": "Comércio", "employee_count": 6},
    {"year": 2011, "gender": "Female", "cbo": "Administração Pública", "employee_count": 9},
    {"year": 2011, "gender": "Female", "cbo": "Indústrias de Transformação", "employee_count": 4},
    {"year": 2011, "gender": "Female", "cbo": "Atividades Administrativas", "employee_count": 6},
    {"year": 2011, "gender": "Female", "cbo": "Construção", "employee_count": 9},
    {"year": 2011, "gender": "Female", "cbo": "Transporte e correio", "employee_count": 4},
    {"year": 2011, "gender": "Female", "cbo": "Saúde e Serviços Sociais", "employee_count": 6},
    {"year": 2011, "gender": "Female", "cbo": "Educação", "employee_count": 9},
    {"year": 2011, "gender": "Female", "cbo": "Alojamento e Alimentação", "employee_count": 4},
    {"year": 2011, "gender": "Female", "cbo": "Agropecuária", "employee_count": 6},
    {"year": 2011, "gender": "Female", "cbo": "Outros Serviços", "employee_count": 9},
    {"year": 2011, "gender": "Female", "cbo": "Serviços Especializados", "employee_count": 4},
    {"year": 2011, "gender": "Female", "cbo": "Atividades Financeiras", "employee_count": 6},
    {"year": 2011, "gender": "Female", "cbo": "Informação e Comunicação", "employee_count": 9},
    {"year": 2011, "gender": "Female", "cbo": "Saneamento Básico", "employee_count": 4},
    {"year": 2011, "gender": "Female", "cbo": "Indústrias Extrativas", "employee_count": 6},
    {"year": 2011, "gender": "Female", "cbo": "Artes, Cultura e Recreação", "employee_count": 9},
    {"year": 2011, "gender": "Female", "cbo": "Atividades Imobiliárias", "employee_count": 4},
    {"year": 2011, "gender": "Female", "cbo": "Eletricidade e Gás", "employee_count": 6},
    {"year": 2011, "gender": "Female", "cbo": "Serviços Domésticos", "employee_count": 9},
    {"year": 2011, "gender": "Female", "cbo": "Organismos Internacionais", "employee_count": 4},

    {"year": 2011, "gender": "Male", "cbo": "Comércio", "employee_count": 8},
    {"year": 2011, "gender": "Male", "cbo": "Administração Pública", "employee_count": 5},
    {"year": 2011, "gender": "Male", "cbo": "Indústrias de Transformação", "employee_count": 8},
    {"year": 2011, "gender": "Male", "cbo": "Atividades Administrativas", "employee_count": 8},
    {"year": 2011, "gender": "Male", "cbo": "Construção", "employee_count": 5},
    {"year": 2011, "gender": "Male", "cbo": "Transporte e correio", "employee_count": 8},
    {"year": 2011, "gender": "Male", "cbo": "Saúde e Serviços Sociais", "employee_count": 8},
    {"year": 2011, "gender": "Male", "cbo": "Educação", "employee_count": 5},
    {"year": 2011, "gender": "Male", "cbo": "Alojamento e Alimentação", "employee_count": 8},
    {"year": 2011, "gender": "Male", "cbo": "Agropecuária", "employee_count": 8},
    {"year": 2011, "gender": "Male", "cbo": "Outros Serviços", "employee_count": 5},
    {"year": 2011, "gender": "Male", "cbo": "Serviços Especializados", "employee_count": 8},
    {"year": 2011, "gender": "Male", "cbo": "Atividades Financeiras", "employee_count": 8},
    {"year": 2011, "gender": "Male", "cbo": "Informação e Comunicação", "employee_count": 5},
    {"year": 2011, "gender": "Male", "cbo": "Saneamento Básico", "employee_count": 8},
    {"year": 2011, "gender": "Male", "cbo": "Indústrias Extrativas", "employee_count": 8},
    {"year": 2011, "gender": "Male", "cbo": "Artes, Cultura e Recreação", "employee_count": 5},
    {"year": 2011, "gender": "Male", "cbo": "Atividades Imobiliárias", "employee_count": 8},
    {"year": 2011, "gender": "Male", "cbo": "Eletricidade e Gás", "employee_count": 8},
    {"year": 2011, "gender": "Male", "cbo": "Serviços Domésticos", "employee_count": 5},
    {"year": 2011, "gender": "Male", "cbo": "Organismos Internacionais", "employee_count": 8},
  ];

  var sample_data_comercio = [
        {"gender": "Female", "cbo": "Comercio varejista", "employee_count":30},
        {"gender": "Female", "cbo": "Comercio atacadista", "employee_count":21},
        {"gender": "Female", "cbo": "Comercio de Automotores", "employee_count":8},

        {"gender": "Male", "cbo": "Comercio varejista", "employee_count":8},
        {"gender": "Male", "cbo": "Comercio atacadista", "employee_count":21},
        {"gender": "Male", "cbo": "Comercio de Automotores", "employee_count":30}
    ];
   
  var visualization = d3plus.viz()
    .container("#viz")
    .data(sample_data)
    .id(["gender", "cbo"])
    .color("gender")
    .size("employee_count")
    .type("radar")
    .tooltip({"stacked": true})
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
                            .id({
                                "value": ["gender", "cbo"],
                                "solo" : []
                            })
                            .draw();
                        }
                        else if(value == "administracao_publica"){
                            
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
