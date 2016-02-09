'use strict';
module.exports = function * iterableReExec(re, str) {
	var match = re.exec(str);

	if (match) {
		yield match;

		if (re.global) {
			yield* iterableReExec(re, str);
		}
	}
};
