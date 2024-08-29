# Tigron Datetimepicker extension
This in an extension to the [Eonasdan tempus-dominus](https://github.com/Eonasdan/tempus-dominus)
plugin.

## Description

This extension allows the user to add 1 new parameter: 'postFormat'. The
extension will create a hidden input field that contains the selected datetime
in the format set in 'postFormat'.
This makes it easier to parse the datetime after POST.

	tigronDatetimepicker('.datepicker', {
		localization: {
			format: 'dd/MM/yyyy'
		},
		'postFormat': 'YYYY-MM-DD HH:mm'
	});

All other options remain the same. Please check the [Eonasdan Datetimepicker manual](https://getdatepicker.com/)
for more instructions

## Installation

Installation with bower:

  `bower install tigron-datetimepicker`

include the following line in your project:

	<link rel="stylesheet" href="/eonasdan--tempus-dominus/dist/css/tempus-dominus.min.css" />

	<script src="/popperjs--core/dist/umd/popper.min.js"></script
	<script src="/eonasdan--tempus-dominus/dist/js/tempus-dominus.min.js"></script>
	<script src="/tigron-datetimepicker/dist/js/tigron-datetimepicker.js"></script>

Activate:

	tigronDatetimepicker('.datepicker', {
		localization: {
			format: 'dd/MM/yyyy'
		},
		'postFormat': 'YYYY-MM-DD HH:mm'
	});
