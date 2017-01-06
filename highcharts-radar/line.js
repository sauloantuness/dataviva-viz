var categories = ['Comércio', 'Administração Pública', 'Indústrias de Transformação', 'Atividades Administrativas',
    'Construção', 'Transporte e correio', 'Saúde e Serviços Sociais', 'Educação', 'Alojamento e Alimentação',
     'Agropecuária', 'Outros Serviços', 'Serviços Especializados', 'Atividades Financeiras', 'Informação e Comunicação',
     'Saneamento Básico', 'Indústrias Extrativas', 'Artes, Cultura e Recreação', 'Atividades Imobiliárias', 'Eletricidade e Gás',
     'Serviços Domésticos', 'Organismos Internacionais'
];


var select_by_year = function(){

    var year = document.querySelector('input[name="mychart"]:checked').value;

    var filtered_data_by_year = sample_data.filter(function(item){
        return item.year == year;
    })

    var male_data = filtered_data_by_year.filter(function(item){
        return item.gender == 'Male';
    })

    var female_data = filtered_data_by_year.filter(function(item){
        return item.gender == 'Female';
    })

    var male_series = [];
    var female_series = [];

    categories.forEach(function(category, index, array){

        var males_by_category = male_data.filter(function(item){
            return item.cbo == category;
        })[0];

        var females_by_category = female_data.filter(function(item){
            return item.cbo == category;
        })[0];

        male_series.push(males_by_category.employee_count);

        female_series.push(females_by_category.employee_count);
    });

    chart.series[0].setData(male_series);
    chart.series[1].setData(female_series);
}



var chart = Highcharts.chart('container', {

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

        rangeSelector: {
                button: [{
                    type: 'year',
                    count: 1,
                    text: '1y'
                }],
            selected: 3
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

        exporting: {
            buttons: {
                customButton: {
                    text: '2009',
                    onclick: select_by_year
                },
               anotherButton: {
                    text: 'Filter by year',
                    onclick: function () {
                        alert('You pressed the button');
                    }
                }
            }
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