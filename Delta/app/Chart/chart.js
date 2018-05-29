define(function (require) {

    var chart = () => {
        $('head').append('<link rel="stylesheet" href="app/Chart/chart.css" >');
        
        
        var html = `<canvas id="myChart" width="400" height="400"></canvas>`

        return html;
    }

    return chart;
});