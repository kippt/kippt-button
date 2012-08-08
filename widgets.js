(function() {
    "use strict";
    
    var css = "\
    .kippt-save-button {\
        background: url(http://addons.kippt.com/save-button/img/kippt-btn.png)\
                    no-repeat;\
        height: 20px;\
        width: 62px;\
        display: block;\
        position: relative;\
        margin-top: 5px;\
    }\
    .kippt-save-button:hover {\
        background-position: 0 -30px;\
    }\
    .kippt-save-button:active {\
        background-position: 0 -60px;\
    }";
    
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
    
    var popupFeatures = "location=no,menubar=no,status=no,titlebar=no," +
                        "scrollbars=no,width=420,height=192";
    
    var buttons = document.querySelectorAll(".kippt-save-button");
    buttons = [].slice.call(buttons);
    
    injectCSS();
    addClickListeners();
})();