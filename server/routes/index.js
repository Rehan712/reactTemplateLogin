module.exports = app => {
	app.use('/login', (req, res) => {
		res.sendFile(require('path').join(__dirname, '../../dist/index.html'));
	});

	app.use('/students', (req, res) => {
		res.sendFile(require('path').join(__dirname, '../../dist/index.html'));
	});
};
