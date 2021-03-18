const router = require('express').Router();

router.route('/autor').get((req, res) => {
    res.send({ alumno : "EFMR", servicio : "Cloud Foundry en IBM Cloud" });
  })

module.exports = router;