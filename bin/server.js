const Koa = require('koa');
const app = new Koa();

// var path = require('path');
// 增加自动在浏览器中打开
var openBrowser = require('react-dev-utils/openBrowser');

module.exports = function(port) {
	require('../lib/middleware/webpack')(app);
	require('../lib/middleware/sass')(app);
	require('../lib/middleware/views')(app);
	require('../lib/middleware/router')(app);
	require('../lib/middleware/static')(app);
	
	const locaUrl = `http://127.0.0.1:${port}`;
	app.listen(port, () => {
		console.log(locaUrl);
		if (openBrowser(locaUrl)) {
			console.log('The browser tab has been opened!');
		}
	});
};
