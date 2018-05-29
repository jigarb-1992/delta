define(function () {
    var post = (url, data, isAsync) => {
        $.ajaxSetup({ async: isAsync })
            return $.post(url, data);
    }

    var get = (url, isAsync) => {
        $.ajaxSetup({ async: isAsync })
        return $.get(url);
    }

    return {
        postRequest: (url, data, isAsync) => { post(url, data, isAsync); },
        getRequest: (url, isAsync) => { return get(url, isAsync); }
    };
});
