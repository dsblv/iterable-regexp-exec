'use strict';
var cloneRegexp = require('clone-regexp');

module.exports = function iterableReExec(input, str) {
	var ret = {};

	ret[Symbol.iterator] = function () {
		var re = cloneRegexp(input);
		var nextMatch = re.exec(str);

		return {
			next: function () {
				var match = nextMatch;

				if (match) {
					nextMatch = re.global ? re.exec(str) : null;

					return {done: false, value: match};
				}

				return {done: true};
			}
		};
	};

	return ret;
};
