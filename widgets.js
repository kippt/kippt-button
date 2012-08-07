$(function() {
    // CSS
    var css = ".kippt-save-button {\
                    background:url(http://addons.kippt.com/save-button/img/kippt-btn.png) no-repeat;\
                    height:20px;\
                    width:62px;\
                    display:block;\
                    position:relative;\
                    margin-top:5px;\
                }\
                .kippt-save-button:hover {\
                    background-position:0 -30px;\
                }\
                .kippt-save-button:active {\
                    background-position:0 -60px;\
                }\
                .kippt-save-button span {\
                    display: none;\
                }";

    // IE8 support, see http://www.xinotes.org/notes/note/964/
    if (document.createStyleSheet) {
        document.createStyleSheet().cssText = css;
    } else {
        var styleElement = document.createElement("style");
        var styleText = document.createTextNode(css);

        styleElement.appendChild(styleText);
        document.getElementsByTagName("head")[0].appendChild(styleElement);
    }
    
    var listener = function(e) {
        var elem = e.currentTarget;
        if (e.preventDefault){
            e.preventDefault();
        }
        var url = encodeURIComponent(elem.dataset.url),
            title = encodeURIComponent(elem.dataset.title),
            source = encodeURIComponent(elem.dataset.source),
            via = encodeURIComponent(elem.dataset.via);

        var windowUrl = "https://kippt.com/extensions/new?url="+ url +"&title="+ title +"&source="+ source +"&via="+ via;
        window.open(windowUrl, "kippt-popup", "location=no,menubar=no,status=no,titlebar=no,scrollbars=no,width=420,height=192");
        return false;
    };
    var addEventListener = function(element, type, callback) {
        if (element.addEventListener) {
            element.addEventListener(type, callback, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, callback);
        }
    };

    // IE 8 getElementsByClassName, see http://stackoverflow.com/questions/7410949
    var findByClassName = function getElementsByClassName(className) {
        if (document.getElementsByClassName) {
            return document.getElementsByClassName(className);
        } else {
            // IE 8
            return document.querySelectorAll('.' + className);
        }
    };

    // Loading
    var buttons = findByClassName("kippt-save-button");
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.innerHTML = "<span>Save to Kippt</span>";

        // Handle click
        addEventListener(button, "click", listener);
    }
});
