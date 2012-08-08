(function () {
    /*!
    * contentloaded.js
    *
    * Author: Diego Perini (diego.perini at gmail.com)
    * Summary: cross-browser wrapper for DOMContentLoaded
    * Updated: 20101020
    * License: MIT
    * Version: 1.2
    *
    * URL:
    * http://javascript.nwbox.com/ContentLoaded/
    * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
    *
    */
    var onReady = function(fn) {
        var done = false, top = true,

        doc = window.document, root = doc.documentElement,

        add = doc.addEventListener ? 'addEventListener' : 'attachEvent',
        rem = doc.addEventListener ? 'removeEventListener' : 'detachEvent',
        pre = doc.addEventListener ? '' : 'on',

        init = function(e) {
            if (e.type === 'readystatechange' && doc.readyState !== 'complete') return;
            (e.type == 'load' ? window : doc)[rem](pre + e.type, init, false);
            if (!done && (done = true)) fn.call(window, e.type || e);
        },

        poll = function() {
            try { root.doScroll('left'); } catch(e) { setTimeout(poll, 50); return; }
            init('poll');
        };

        if (doc.readyState === 'complete') fn.call(window, 'lazy');
        else {
            if (doc.createEventObject && root.doScroll) {
                try { top = !window.frameElement; } catch(e) { }
                if (top) poll();
            }
            doc[add](pre + 'DOMContentLoaded', init, false);
            doc[add](pre + 'readystatechange', init, false);
            window[add](pre + 'load', init, false);
        }
    };

    var injectCSS = function() {
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
    };


    var listener = function(e) {
        if (e.preventDefault){
            e.preventDefault();
        }
        var elem = e.currentTarget || e.srcElement; /* IE 8, see http://stackoverflow.com/questions/2642095 */
        var url = encodeURIComponent(elem.getAttribute("data-url")), // for IE 8 support, don't use elem.dataset
            title = encodeURIComponent(elem.getAttribute("data-title")),
            source = encodeURIComponent(elem.getAttribute("source")),
            via = encodeURIComponent(elem.getAttribute("via"));

        var windowUrl = "https://kippt.com/extensions/new?url="+ url +"&title="+ title +"&source="+ source +"&via="+ via;

        // IE 8 does not allow dash in window name, see http://stackoverflow.com/questions/710756
        window.open(windowUrl, "kippt_popup", "location=no,menubar=no,status=no,titlebar=no,scrollbars=no,width=420,height=192");
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

    onReady(function () {
        injectCSS();

        // Loading
        var buttons = findByClassName("kippt-save-button");
        for (var i = 0; i < buttons.length; i++) {
            var button = buttons[i];
            button.innerHTML = "<span>Save to Kippt</span>";

            // Handle click
            addEventListener(button, "click", listener);
        }
    });
}());
