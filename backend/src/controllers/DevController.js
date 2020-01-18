const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res) {
    const dev = await Dev.find();
    return res.json(dev);
  },
  
  async store(req, res) {
    const {github_username, techs, latitude, longitude} = req.body;
    
    let create = await Dev.findOne({github_username});
    
    if (!create) {
      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
      const {name = login, avatar_url, bio} = apiResponse.data;
      const techsArray = parseStringAsArray(techs);
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      }
      
      create = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      })
    }
    
    return res.json(create)
  }
}