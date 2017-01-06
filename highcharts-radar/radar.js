var sections = [
    "Não definido",
    "Agropecuária",
    "Indústrias Extrativas",
    "Indústrias de Transformação",
    "Eletricidade e Gás",
    "Saneamento Básico",
    "Construção",
    "Comércio",
    "Transporte e correio",
    "Alojamento e Alimentação",
    "Informação e Comunicação",
    "Atividades Financeiras",
    "Atividades Imobiliárias",
    "Serviços Especializados",
    "Atividades Administrativas",
    "Administração Pública",
    "Educação",
    "Saúde e serviços sociais",
    "Artes, Cultura e Recreação",
    "Outros Serviços",
    "Serviços Domésticos",
    "Organismos Internacionais",
    "Não Declarado"
];

var data = [];
var title = 'Economic Activity per Gender';
var chart;

$(document).ready(function(){
    ajaxQueue([
        "http://localhost:5000/rais/year/gender/cnae_section",
        "http://localhost:5000/metadata/cnae_sections"
    ], 

    function(responses){
        responses[1].data.forEach(function(item, index){
            data.push({
                "year": item[0],
                "gender": item[1] == "1" ? "Male" : "Female",
                "cnae_section": item[2],
                "average_monthly_wage": +item[5],
                "jobs": item[6]
            })
        });

        data.map(function(item){
            item.name = responses[0].cnae_sections[item.cnae_section].name_pt;
        });


        load_viz()
    })
});

var select_by_year = function(){

    var year = document.querySelector('input[name="mychart"]:checked').value;

    var filtered_data_by_year = data.filter(function(item){
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

    sections.forEach(function(section, index, array){

        var males_by_section = male_data.filter(function(item){
            return item.name == section;
        });

        var females_by_section = female_data.filter(function(item){
            return item.name == section;
        });

        males_by_section = males_by_section.length ? males_by_section[0] : {jobs: 0};
        females_by_section = females_by_section.length ? females_by_section[0] : {jobs: 0};

        male_series.push(males_by_section.jobs);
        female_series.push(females_by_section.jobs);
    });

    chart.series[0].setData(male_series);
    chart.series[1].setData(female_series);
}

var load_viz = function(){

    chart = Highcharts.chart('container', {
        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: title,
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
            categories: sections,
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
            data: [],
            pointPlacement: 'on'
        }, {
            name: 'Female',
            data: [],
            pointPlacement: 'on'
        }]
    });

    select_by_year();
}



