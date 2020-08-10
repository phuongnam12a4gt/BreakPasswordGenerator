'use strict';
module.exports = function(app) {
  let productsCtrl = require('./controllers/ProductsController');
  let lowercaseCtrl = require('./controllers/LowercaseController');
  // todoList Routes
  app.route('/password')
    .get(productsCtrl.get)
    .post(productsCtrl.store);

  app.route('/password/:passwordId')
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);
    //uppercase
    //lowercase
  app.route('/lowercase')
    .get(lowercaseCtrl.get)
    .post(lowercaseCtrl.store);

  app.route('/lowercase/:lowercaseId')
    .get(lowercaseCtrl.detail)
    .put(lowercaseCtrl.update)
    .delete(lowercaseCtrl.delete);
};