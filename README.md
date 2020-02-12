# Tigron Datetimepicker extension
This in an extension to the [Tempus Datetimepicker](https://github.com/tempusdominus/bootstrap-4/)
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

All other options remain the same. Please check the [Eonasdan Datetimepicker manual](https://github.com/tempusdominus/bootstrap-4/)
for more instructions

This exention relies on a fix which is offered as a pull request to the maintainers
of tempusdominus: https://github.com/tempusdominus/bootstrap-4/issues/271
However, the PR is not yet accepted. Therefore a patched version of
tempus dominus is integrated in this repository.

## Installation

Installation with bower:

  `bower install tigron-datetimepicker#bootstrap4`

include the following line in your project:

	<link rel="stylesheet" href="/tigron-datetimepicker/tempusdominus/tempusdominus-bootstrap-4.min.css" />

	<script src="/moment/min/moment.min.js"></script>
	<script src="/tigron-datetimepicker/tempusdominus/tempusdominus-bootstrap-4.min.js"></script>
	<script src="/tigron-datetimepicker/js/tigron-datetimepicker.js"></script>

Activate:

	$('.datepicker').tigronDatetimepicker({
		'format': 'DD/MM/YYYY HH:mm',
		'extraFormats': [ 'YYYY-MM-DD HH:mm' ],
		'postFormat': 'YYYY-MM-DD HH:mm'
	});
