var searchOption = {baidu: {url: "https://www.baidu.com/s?ie=UTF-8&wd="}, google: {url: "https://www.google.com/search?ie=UTF-8&q="}};

$(document).keyup(function (event) {
    if (event.keyCode === 13) {
        event.keyCode
        $("#open").trigger("click");
    }
});

$(document).ready(function () {
    $("#open_select").append("<option value='baidu'>百度</option>");
    $("#open_select").append("<option value='google'>Google</option>");
    chrome.storage.sync.get(function (res) {
        $("#open_select").val(res.searchOption);
    });
    $("#open_input").focus();
});

$("#open_select").on('change', function () {
    chrome.storage.sync.set({searchOption: $("#open_select").val()});
});

var open_btn = document.getElementById('open');
open_btn.addEventListener('click', function () {
    chrome.storage.sync.get(function (res) {
        chrome.tabs.create({url: searchOption[res.searchOption].url + $("#open_input")[0].value});
    });
}, false);
