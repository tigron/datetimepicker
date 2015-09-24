(function ($) {
	$.fn.tigronDatetimepicker = function (options) {
		if (typeof options.postFormat === 'undefined') {
			options.postFormat = options.format;
		}
		var getInput = function(element) {
			if ($(element).is('input')) {
				input = $(element);
			} else {
				input = $(element).find($(element).data('DateTimePicker').datepickerInput());
				if (input.size() === 0) {
					input = $(element).find('input[type=text]');
				} else if (!input.is('input')) {
					throw new Error('CSS class "' + $(element).data('DateTimePicker').datepickerInput() + '" cannot be applied to non input element');
				}
			}
			return input;
		}

		cleaned_options = jQuery.extend(true, {}, options);
		delete cleaned_options.postFormat;

		$(this).datetimepicker(cleaned_options).on('dp.change', function(e) {
			input = getInput( $(this) );
			name = $(input).attr('data-old-name');
			$('input[name="' + name + '"]').val(e.date.format(options.postFormat));
		});

		$.each($(this), function(element, value) {
			input = getInput($(this));

			if ($(this).data('DateTimePicker').date() === null) {
				value = '';
			} else {
				value = $(this).data('DateTimePicker').date().format(options.postFormat);
			}

			$(input).after( $('<input>').attr('type', 'hidden').attr('name', $(input).attr('name')).val( value ) );
			$(input).attr('data-old-name', $(input).attr('name'));
			$(input).removeAttr('name');
		})
	};
})(jQuery);
