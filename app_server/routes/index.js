var express = require('express');
var router = express.Router();

const anaSayfa = function (req, res, next) {
  res.render('anasayfa', { 'title': 'Ana sayfa' });
}

const mekanBilgisi = function (req, res, next) {
  res.render('mekanbilgisi', { 'title': 'Mekan bilgisi' });
}

const yorumEkle = function (req, res, next) {
  res.render('yorumekle', { 'title': 'Yorum ekle' });
}


module.exports = {

  anaSayfa,
  mekanBilgisi,
  yorumEkle,

}
var express = require('express');
var router = express.Router();
var ctrlMekanlar= require('../controllers/mekanlar');
var ctrlDigerleri= require('../controllers/digerleri');
/* GET home page. */
router.get('/',ctrlMekanlar.anaSayfa );
router.get('/mekan',ctrlMekanlar.mekanBilgisi );
router.get('/mekan/yorum/yeni',ctrlMekanlar.yorumEkle );
router.get('/hakkinda',ctrlDigerleri.hakkinda );

module.exports = router;