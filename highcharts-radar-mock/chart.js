//TEMA
Highcharts.theme = {
    colors: ['#3F51B5', '#F34336'],
    chart: {
        marginTop: 60
    }
}
Highcharts.setOptions(Highcharts.theme);

$(function () {

    Highcharts.chart('container', {

        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: 'Título',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: [
 "Processing Industries", 
 "Domestic Services", 
 "Construction", 
 "Trade", 
 "Information and Communication", 
 "Financial Activities", 
 "Real Estate Activities", 
 "Public Administration", 
 "Education", 
 "Other Services", 
 ],
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
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: [{
            name: 'Male',
            data: [43000, 19000, 60000, 35000, 17000, 10000],
            pointPlacement: 'on'
        }, {
            name: 'Female',
            data: [50000, 39000, 42000, 31000, 26000, 14000],
            pointPlacement: 'on'
        }]

    });
});