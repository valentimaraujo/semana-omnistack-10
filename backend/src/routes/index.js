const {Router} = require('express');
const DevController = require('../controllers/DevController');
const SearchController = require('../controllers/SearchController');

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({
    name: 'Semana OmniStack 10',
    version: '1.0.0'
  })
});

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

module.exports = routes;