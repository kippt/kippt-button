# kippt-button

Simple "Save to Kippt" button.

Button opens Kippt's extension page with specific parameters.

## Install

You can install "Save to Kippt" button to any site without the code on this site. Include the following file:

    <script>(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="http://addons.kippt.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","kippt-wjs"));</script>

And format links the following way:

    <a href="https://kippt.com/save" class="kippt-save-button" data-url="https://kippt.com/karrisaarinen/" data-title="Karri Saarinen on Kippt" data-source="example.com">Save to Kippt</a>

Attributes:

- _data-url_ - URL to save
- _data-title_ - (Optional) Title for the page
- _data-source_ - (Optional) Source, e.g. page domain
- _data-via_ - (Optional) Source clip URI if you want to reference another clip inside Kippt (e.g. /api/clips/1337/)

## Requirements

- jQuery / Zepto

## TODO

- Remove $ dependency
- Add HTTPS enabled CDN