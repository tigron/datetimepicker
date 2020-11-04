(function ($) {
	$.fn.tigronDatetimepicker = function (options) {
		console.log($(this).val());
		if (typeof options.postFormat === 'undefined') {
			options.postFormat = options.format;
		}
		var getInput = function(element) {
			if ($(element).is('input')) {
				input = $(element);
			} else {
				input = $(element).find($(element).data('DateTimePicker').datepickerInput());
				if (input.length === 0) {
					input = $(element).find('input[type=text]');
				} else if (!input.is('input')) {
					throw new Error('CSS class "' + $(element).data('DateTimePicker').datepickerInput() + '" cannot be applied to non input element');
				}
			}
			return input;
		}

		cleaned_options = jQuery.extend(true, {}, options);
		delete cleaned_options.postFormat;

		$.each($(this), function(element, value) {
			$(this).addClass('datetimepicker-input').attr('data-toggle', 'datetimepicker')
			value = $(this).val();
			if (typeof value !== 'undefined') {
				$(this).attr('data-value', value);
				$(this).removeAttr('value');
				cleaned_options['defaultDate'] = value;
			}
			$(this).datetimepicker(cleaned_options)
		});

		$(this).on('change.datetimepicker', function(e) {
			input = getInput( $(this) );
			classname = $(input).attr('data-hidden-class');

			if (e.date === false || e.date == undefined) {
				value = '';
			} else {
				value = e.date.format(options.postFormat);
			}
			$('input.' + classname).val(value);
		});

		var count = $('input[class^="datetimepicker_"]').length + 1;

		$.each($(this), function(element, value) {
			input = getInput($(this));

			if ($(this).data('datetimepicker').date() === null) {
				value = '';
			} else {
				value = $(this).data('datetimepicker').date().format(options.postFormat);
				$(this).data('datetimepicker').viewDate($(this).data('datetimepicker').date());
			}

			if ($(input).next().length > 0 && $(input).next().is('[class*="datetimepicker_"]')) {
				return true;
			}

			$(input).after( $('<input>').attr('type', 'hidden').attr('name', $(input).attr('name')).val( value ).addClass('datetimepicker_' + count) );
			$(input).attr('data-hidden-class', 'datetimepicker_' + count);
			$(input).removeAttr('name');
			count++;
		})
	};
})(jQuery);
