'use strict';
module.exports = function iterableReExec(re, str) {
	var ret = {};

	ret[Symbol.iterator] = function () {
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
