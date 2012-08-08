(function() {
    "use strict";
    
    function injectCSS() {
        var styleElement = document.createElement("style"),
            styleText = document.createTextNode(css);
        
        styleElement.appendChild(styleText);
        document.head.appendChild(styleElement);
    }
    
    function onButtonClick(e) {
        if (buttons.indexOf(e.target) !== -1) {
            e.preventDefault();
            
            var data = e.target.dataset;
            
            for (var key in e.target.dataset) {
                data[key] = encodeURIComponent(data[key]);
            }
            
            var windowURL = "https://kippt.com/extensions/new" +
                            "?url=" + data.url +
                            "&title=" + data.title +
                            "&source=" + data.source +
                            "&via=" + data.via;
            
            window.open(windowURL, "kippt-popup", popupFeatures);
        }
    }
    
    function addClickListeners() {
        buttons.forEach(function (btn) {
            btn.addEventListener("click", onButtonClick, false);
        });
    }
    
    var css = "\
    .kippt-save-button {\
        background: -webkit-linear-gradient(bottom, #f0f0f0, #fff);\
        background: -moz-linear-gradient(bottom, #f0f0f0, #fff);\
        background: -o-linear-gradient(bottom, #f0f0f0, #fff);\
        background: linear-gradient(bottom, #f0f0f0, #fff);\
        border: 1px solid #c0c0c0;\
        border-radius: 0 3px 3px 0;\
        box-sizing: border-box;\
        color: #404040;\
        display: inline-block;\
        font: bold 12px sans-serif;\
        height: 20px;\
        left: 18px;\
        line-height: 18px;\
        position: relative;\
        text-align: center;\
        text-decoration: none;\
        text-shadow: #fff 0 1px 0;\
        top: 0;\
        -webkit-user-select: none;\
        -moz-user-select: none;\
        -ms-user-select: none;\
        -o-user-select: none;\
        user-select: none;\
        width: 44px;\
    }\
    .kippt-save-button:active {\
        background: -webkit-linear-gradient(top, #f8f8f8, #fff);\
        background: -moz-linear-gradient(top, #f8f8f8, #fff);\
        background: -o-linear-gradient(top, #f8f8f8, #fff);\
        background: linear-gradient(top, #f8f8f8, #fff);\
    }\
    .kippt-save-button::before {\
        background: inherit;\
        border: inherit;\
        border-radius: 3px 0 0 3px;\
        border-right-color: #d9d9d9;\
        box-sizing: inherit;\
        content: 'k';\
        color: #dc3410;\
        display: inherit;\
        font-size: 14px;\
        height: inherit;\
        left: -19px;\
        top: -1px;\
        position: absolute;\
        width: 19px;\
    }\
    .kippt-save-button:hover {\
        border-color: #b6b6b6;\
    }";
    
    var popupFeatures = "location=no,menubar=no,status=no,titlebar=no," +
                        "scrollbars=no,width=420,height=192";
    
    var buttons = document.querySelectorAll(".kippt-save-button");
    buttons = [].slice.call(buttons);
    
    injectCSS();
    addClickListeners();
})();