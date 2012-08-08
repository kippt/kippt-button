// Cleaned this up and made it as similar to the original jquery code as possible.
// I didn't test this in IE, but marked a couple places in the code where I wouldn't
// be surprised if IE effed it up. It does suck a lot.

window.onload = function(){ // ie
  // css
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

    // inject styles          
    var style_tag = document.createElement('style');
    style_tag.innerHTML = css;
    document.getElementsByTagName('head')[0].appendChild(style_tag); // ie
    
    // grab all the buttons, hide text and add click event
    var buttons = document.getElementsByClassName("kippt-save-button"); // ie
    for (var i = 0; i < buttons.length; i++) { 
        var button = buttons[i];
        // hide text
        button.innerHTML = '<span>Save to Kippt</span>';
        // add click event
        button.addEventListener('click', function(e){ // ie
            if (e.preventDefault()){ e.preventDefault(); }
            var url = button.getAttribute('data-url'), // ie
                title = button.getAttribute('data-title'),
                source = button.getAttribute('data-source'),
                via = button.getAttribute('data-via');
            var windowUrl = "https://kippt.com/extensions/new?url="+ url +"&title="+ title +"&source="+ source +"&via="+ via;
            window.open(windowUrl, "kippt-popup", "location=no,menubar=no,status=no,titlebar=no,scrollbars=no,width=420,height=192");
            return false;
        });
    }
}