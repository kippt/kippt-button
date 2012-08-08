# kippt-button

Simple "Save to Kippt" button.

Button opens Kippt's extension page with specific parameters.

## Install

You can install the "Save to Kippt" button to any site without the code on this site. Include the following code:

```javascript
(function() {
    var s = document.createElement("script");
    s.src = "http://addons.kippt.com/widgets.js";
    document.head.appendChild(s);
})();
```

And format links the following way:

```html
<a href="https://kippt.com/save" class="kippt-save-button" data-url="https://kippt.com/karrisaarinen/" data-title="Karri Saarinen on Kippt" data-source="example.com">Save</a>
```

Attributes:

- _data-url_ - URL to save
- _data-title_ - (Optional) Title for the page
- _data-source_ - (Optional) Source, e.g. page domain
- _data-via_ - (Optional) Source clip URI if you want to reference another clip inside Kippt (e.g. /api/clips/1337/)

## TODO

- Add HTTPS enabled CDN