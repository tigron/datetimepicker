function tigronDatetimepicker(selector, options) {
	if (typeof options.postFormat === 'undefined') {
		options.postFormat = options.format;
	}

	var getInput = function (element) {
		var input;

		if (element.tagName.toLowerCase() === 'input') {
			input = element;
		}

		return input;
	};

	var cleanedOptions = Object.assign({}, options);
	delete cleanedOptions.postFormat;

	var elements = document.querySelectorAll(selector);
	elements.forEach(function (element) {
		if (element.dataset.initialized !== 'true') {
			const datepicker = new tempusDominus.TempusDominus(element, cleanedOptions);
			element._tdPicker = datepicker; // Store the datepicker instance
			element.dataset.initialized = 'true';

			element.addEventListener('change', function (e) {
				var input = getInput(this);
				var classname = input.dataset.hiddenClass;

				var value;
				if (e.date === false || this.value === '') {
					value = '';
				} else {
					value = this._tdPicker.viewDate.format(options.postFormat);
				}
				document.querySelector('input.' + classname).value = value;
			});
		}

	});

	var count = document.querySelectorAll('input[class^="datetimepicker_"]').length + 1;

	elements.forEach(function (element) {
		var input = getInput(element);

		var currentDate;
		if (element.value === '') {
			currentDate = null;
		} else {

			const datepicker = element._tdPicker;
			currentDate = datepicker.viewDate;
		}
		var value;
		if (currentDate === null) {
			value = '';
		} else {
			value = currentDate.format(options.postFormat);
			element._tdPicker.viewDate = currentDate;
		}

		if (input.nextElementSibling && input.nextElementSibling.className.includes('datetimepicker_')) {
			return;
		}

		var hiddenInput = document.createElement('input');
		hiddenInput.type = 'hidden';
		hiddenInput.name = input.name;
		hiddenInput.value = value;
		hiddenInput.className = 'datetimepicker_' + count;

		input.parentNode.insertBefore(hiddenInput, input.nextSibling);
		input.dataset.hiddenClass = 'datetimepicker_' + count;
		input.removeAttribute('name');
		count++;
	});
}