const { Router } = require('express');
const schemaValidate = require('../middleware/schemaValidate');
const { garageList } = require('../model/garage');
const { getGarage } = require ('../schema/garage');

const router = new Router();


/**
 * @route GET /garages
 * @group Garages - get list of garages
 * @returns {object} 200 - garages list
 * @returns {Error}  default - Something failed!
 */

router.get('/', (req, res) => { res.send(garageList)});

/**
 * @route GET /garages/:garageId
 * @group Garages - get garage information for one garage
 * @param {integer} garageid.body.required - id of garage
 * @returns {object} 200 - garage info
 * @returns {Error}  default - Something failed!
 */

router.get('/:garageId', schemaValidate(getGarage), (req, res) => {
  const { garageId } = req.params;
  try {
    res.status(200).send(garageList[garageId]);
  } catch (e) {
    console.log('---- ERROR : ', e.message);
      res.status(500).send('ERROR');
  }
});

module.exports = router;
