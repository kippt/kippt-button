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
            
            var data = e.target.dataset,
                popupURL = "https://kippt.com/extensions/new?";
            
            for (var key in data) {
                if (USED_DATA.indexOf(key) !== -1) {
                    popupURL += key + "=" + encodeURIComponent(data[key]) + "&";
                }
            }
            
            window.open(popupURL, "kippt-popup", POPUP_FEATURES);
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
        font: bold 12px Arial, sans-serif;\
        left: 18px;\
        line-height: 18px;\
        position: relative;\
        text-align: center;\
        text-decoration: none;\
        text-shadow: #fff 0 1px 0;\
        -webkit-user-select: none;\
        -moz-user-select: none;\
        -ms-user-select: none;\
        -o-user-select: none;\
        user-select: none;\
        width: 42px;\
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
        content: 'k';\
        color: #dc3410;\
        font-size: 14px;\
        left: -21px;\
        top: -1px;\
        position: absolute;\
        width: 19px;\
    }\
    .kippt-save-button:hover {\
        border-color: #b6b6b6;\
    }";
    
    var USED_DATA = ["url", "title", "source", "via"],
        POPUP_FEATURES = "location=no,menubar=no,status=no,titlebar=no," +
                         "scrollbars=no,width=420,height=192";
    
    var buttons = document.querySelectorAll(".kippt-save-button");
    buttons = [].slice.call(buttons);
    
    injectCSS();
    addClickListeners();
})();
