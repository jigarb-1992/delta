$('#companyMenuList').ready(function () {
    var companyListService = webservice.getRequest('http://tech-jigar:8000/app/Service/data.txt', false);

    companyListService.then(function (data) {
        var companyList = "";
        var companyName = data.split(',');
        $(companyName).each(function (key, value) {
            companyList += `<a onClick='changeCompany("` + value + `")'>` + value + `</a>`;
        })
        $('#companyMenuList').append(companyList);
    });
})



function changeCompany(companyName) {
    alert(companyName);
}