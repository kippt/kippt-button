function kipptReady(f){/in/.test(document.readyState)?setTimeout('kipptReady('+f+')',9):f()} // Ready function based on http://dustindiaz.com/smallest-domready-ever
kipptReady(function() {
    function saveToKippt(e) {
        var url = e.getAttribute("data-url");
        var title = e.getAttribute("data-title");
        var source = e.getAttribute("data-source");
        var via = e.getAttribute("data-via");    
        var windowUrl = "https://kippt.com/extensions/new?url="+ url +"&title="+ title +"&source="+ source +"&via="+ via;
        window.open(windowUrl, "_blank", "location=no,menubar=no,status=no,titlebar=no,scrollbars=no,width=420,height=192");
        return false;
    }
    
    var css = ".kippt-save-button {\
                    background:url(https://s3.amazonaws.com/addons.kippt.com/save-button/img/kippt-btn.png) no-repeat;\
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
        
    var cssDiv = document.createElement('div');
    cssDiv.innerHTML = "<p>&nbsp;</p><style type='text/css'>" + css + "</style>";
    document.getElementsByTagName("head")[0].appendChild(cssDiv.childNodes[1]);
        
    var links = document.getElementsByTagName("a");
    for (var i = links.length - 1; i >= 0; i--) {
        if(links[i].className === "kippt-save-button") {
            links[i].innerHTML = "<span>Save to Kippt</span>";
            links[i].onclick = function() {
                saveToKippt(this);
                return false;
            };
        }
    };    
});
