# Tigron Datetimepicker extension
This in an extension to the [Eonasdan Datetimepicker](https://github.com/Eonasdan/bootstrap-datetimepicker/)
plugin.

## Description

This extension allows the user to add 1 new parameter: 'postFormat'. The
extension will create a hidden input field that contains the selected datetime
in the format set in 'postFormat'.
This makes it easier to parse the datetime after POST.

	$('.datepicker').tigronDatetimepicker({
		'format': 'DD/MM/YYYY HH:mm',
		'extraFormats': [ 'YYYY-MM-DD HH:mm' ],
		'postFormat': 'YYYY-MM-DD HH:mm'
	});

All other options remain the same. Please check the [Eonasdan Datetimepicker manual](http://eonasdan.github.io/bootstrap-datetimepicker/)
for more instructions

## Installation

Installation with bower:

  `bower install tigron-datetimepicker`

include the following line in your project:

	<link rel="stylesheet" href="/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css" />

	<script src="/moment/min/moment.min.js"></script>
	<script src="/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>
	<script src="/tigron-datetimepicker/js/tigron-datetimepicker.js"></script>

Activate:

	$('.datepicker').tigronDatetimepicker({
		'format': 'DD/MM/YYYY HH:mm',
		'extraFormats': [ 'YYYY-MM-DD HH:mm' ],
		'postFormat': 'YYYY-MM-DD HH:mm'
	});
