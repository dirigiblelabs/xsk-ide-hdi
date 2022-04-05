exports.getEditor = function () {
	console.log("IN HDI EDITOR");
	return {
		"id": "hdi",
		"name": "HDI",
		"factory": "frame",
		"region": "center-top",
		"label": "HDI",
		"defaultEditor": false,
		"link": "../xsk-hdi-editor/editor/editor.html",
		"contentTypes": ["application/json+hdi"]
	};
};