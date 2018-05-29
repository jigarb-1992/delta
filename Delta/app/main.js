var webservice;
define(function (require) {
    webservice = require('./Service/service');
    var header = require('./Header/header');
    $('.header').html(header);
    
    var menu = require('./Menu/menu');
    $('.companyList').html(menu);


    var chart = require('./Chart/chart');
    $('.chart').html(chart);

    var dc = require('./Chart/chartController');
    dc.myChart();
});
