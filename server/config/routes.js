
module.exports = function (app) {
  app.post('/rest/mock', function(req, res) {
	res.send('200', 'Success!');
  });

};