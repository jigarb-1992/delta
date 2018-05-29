define(function (require) {

    var header = () => {
        $('head').append('<link rel="stylesheet" href="app/Header/header.css" >');
        require('./headerController');
        var html = `<nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Delta</a>
                        <span class="btnMenu" onClick="openMenu()">&#9776;</span>
                    </div>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
                    </ul>
                    </div>
                </nav>`
        
        return html;
    }
    
    return header;
});

