// ==UserScript==
// @name         ShinaBR2 Dark Mode
// @version      0.1
// @description  Dark Mode for ShinaBR2
// @author       Maple
// @match        https://shinabr2.com/ulala/
// @grant        none
// @updateURL    https://raw.githubusercontent.com/DrMaple/ShinaBR2-Dark-Theme/master/ShinaBR2DarkTheme.user.js
// @downloadURL  https://raw.githubusercontent.com/DrMaple/ShinaBR2-Dark-Theme/master/ShinaBR2DarkTheme.user.js
// ==/UserScript==

(function (window, undefined) {
    var css = [
        'body {',
		'	background-color: #252525 !important',
		'}',
        'body {',
		'	color: rgb(255 255 255 / 200%) !important',
		'}',
        '.jss13 {',
		'	background-color: #252525 !important',
		'}',
        '.MuiTypography-colorTextSecondary {',
		'	color: rgb(255 255 255) !important',
		'}',
        '.MuiTypography-colorTextPrimary {',
		'	color: rgb(255 255 255) !important',
		'}',
        '.MuiFormHelperText-root {',
		'	color: rgb(255 255 255) !important',
		'}',
        '.MuiInputBase-root {',
		'	color: rgb(255 255 255) !important',
		'}',
        '.MuiInput-underline:before {',
		'	border-bottom: 1px solid rgb(255 255 255) !important',
		'}',
        '.MuiFormLabel-root {',
		'	color: rgb(255 255 255) !important',
		'}',
        '.MuiPaper-root {',
		'	background-color: #171717 !important',
		'}',
        '.MuiPaper-root {',
		'	color: #ffffff !important',
		'}',
        '.MuiDialogTitle-root {',
		'	background-color: black !important',
		'}',
        '.MuiTypography-colorSecondary {',
		'	color: #ff72a4 !important',
		'}',
        '.MuiTypography-colorSecondary {',
		'	font-weight: bold !important',
		'}',
        '.MuiTypography-colorPrimary {',
		'	color: #899bff !important',
		'}',
        '.MuiTypography-colorPrimary {',
		'	font-weight: bold !important',
		'}'





    ].join('\n');
    addStyle(css);

    function addStyle(text) {
        var style = document.createElement('style');
        style.textContent = text;
        document.querySelector('head').appendChild(style);
    }
}) (window);