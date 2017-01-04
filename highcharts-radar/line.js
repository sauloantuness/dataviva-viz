Highcharts.chart('container', {

        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: 'Gender per Economy Activict',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Comércio', 'Administração Pública', 'Indústrias de Transformação', 'Atividades Administrativas',
                    'Construção', 'Transporte e correio', 'Saúde e Serviços Sociais', 'Educação', 'Alojamento e Alimentação',
                     'Agropecuária', 'Outros Serviços', 'Serviços Especializados', 'Atividades Financeiras', 'Informação e Comunicação',
                     'Saneamento Básico', 'Indústrias Extrativas', 'Artes, Cultura e Recreação', 'Atividades Imobiliárias', 'Eletricidade e Gás',
                     'Serviços Domésticos', 'Organismos Internacionais'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: [{
            name: 'Male',
            data: [4, 7, 2, 4, 7, 2, 4, 7, 2, 4, 7, 2, 4, 7,
                    2, 4, 7, 2, 4, 7, 2],
            pointPlacement: 'on'
        }, {
            name: 'Female',
            data: [6, 3, 8, 6, 3, 8, 6, 3, 8, 6, 3, 8, 6, 3, 8,
                    6, 3, 8, 6, 3, 8],
            pointPlacement: 'on'
        }]

    });