function openMenu() {
    var width = $('#companyMenuList').css('width');
    if (width == '250px') {
        $('#companyMenuList').css('width', '0px');
    }
    else {
        $('#companyMenuList').css('width', '250px');
    }
}