var sections = [];
var years = new Set();
var data = [];
var title = 'Economic Activity per Gender';
var chart;
var lang = 'en';

$(document).ready(function(){
    ajaxQueue([
        "http://api.staging.dataviva.info/rais/year/gender/cnae_section",
        "http://api.staging.dataviva.info/metadata/cnae_sections",
        "http://api.staging.dataviva.info/metadata/genders",
    ], 

    function(responses){
        var api = responses[0];
        var metadadosCnaeSections = responses[1];
        var metadadosGenders = responses[2];

        api.data.forEach(function(item, index){
            data.push({
                "year": item[0],
                "gender": item[1],
                "cnae_section": item[2],
                "average_monthly_wage": +item[5],
                "jobs": item[6]
            })
        });

        data.map(function(item){
            item.name = metadadosCnaeSections[item.cnae_section]['name_' + lang];
        });

        data.map(function(item){
            item.gender = metadadosGenders[item.gender]['name_' + lang];
        });
        
        for(var k in metadadosCnaeSections){
            sections.push(metadadosCnaeSections[k][['name_' + lang]]);
        }

        data.forEach(function(item, index){
            years.add(item.year);
        });

        createYearsButtons();
        load_viz();
    })
});

var createYearsButtons = function(){
    years = Array.from(years);
    years.sort();
    years.forEach(function(year, index){
        var inputButton = '<input type="radio" name="year" value="' + year + '" checked>' + year;
        $('#years').append(inputButton);
    });

    $('[name=year]').click(filterByYear);
}

var filterByYear = function(){

    var selectedYear = document.querySelector('input[name="year"]:checked').value;

    var dataFilteredByYear = data.filter(function(item){
        return item.year == selectedYear;
    });

    var dataFilteredByGenderMale = dataFilteredByYear.filter(function(item){
        return item.gender == 'Male';
    });

    var dataFilteredByGenderFemale = dataFilteredByYear.filter(function(item){
        return item.gender == 'Female';
    });

    var maleSeries = [];
    var femaleSeries = [];

    sections.forEach(function(section, index, array){
        var males_by_section = dataFilteredByGenderMale.filter(function(item){
            return item.name == section;
        });

        var females_by_section = dataFilteredByGenderFemale.filter(function(item){
            return item.name == section;
        });

        males_by_section = males_by_section.length ? males_by_section[0] : {jobs: 0};
        females_by_section = females_by_section.length ? females_by_section[0] : {jobs: 0};

        maleSeries.push(males_by_section.jobs);
        femaleSeries.push(females_by_section.jobs);
    });

    chart.series[0].setData(maleSeries);
    chart.series[1].setData(femaleSeries);
}

var load_viz = function(){

    Highcharts.theme = {
        colors: ['#3F51B5', '#F34336'],
        chart: {
            marginTop: 60
        }
    }
    Highcharts.setOptions(Highcharts.theme);

    chart = Highcharts.chart('container', {
        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: title
        },

        pane: {
            size: '80%'
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
            align: 'center',
            verticalAlign: 'bottom'
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
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

    filterByYear();
}
