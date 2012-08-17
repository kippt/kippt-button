$(function() {
    // CSS
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
    $("head").append("<style>"+css+"</style>");
    
    // Loading
    $(".kippt-save-button").each(function(i, elem){
        $(elem).html("<span>Save to Kippt</span>")
    });
    
    // Handle click
    $(".kippt-save-button").on("click", function(e){
        e.preventDefault();
        var elem = $(e.currentTarget);
        var url = encodeURIComponent(elem.data("url")),
            title= encodeURIComponent(elem.data("title")),
            source = encodeURIComponent(elem.data("source")),
            via = encodeURIComponent(elem.data("via"));
        
        var windowUrl = "https://kippt.com/extensions/new?url="+ url +"&title="+ title +"&source="+ source +"&via="+ via;
        window.open(windowUrl, "kippt-popup", "location=no,menubar=no,status=no,titlebar=no,scrollbars=no,width=420,height=192");
    });
});