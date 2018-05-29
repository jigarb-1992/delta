define(function (require) {

    var menu = () => {
        $('head').append('<link rel="stylesheet" href="app/Menu/menu.css" >');
        require('./menuController');
        
        var html = `<div id="companyMenuList" class="sidenav"></div>`

        return html;
    }

    return menu;
});


