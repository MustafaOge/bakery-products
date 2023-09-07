let router = require('express').Router();

router.get('/', function(req, res) {
    res.json({
        status: 'API is working',
        message: 'Welcome to RESTHub crafted with love!'
    });
}   );

var contactController = require('./controller/post_controller.js');
// Post routes
router.route('/post')
    .get(contactController.index)
    .post(contactController.new);

router.route('/post/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);


    // feedback routes
   var contactController = require('./controller/feedback_controller.js');
    // Post routes
 router.route('/feedback')
        .get(contactController.index)
        .post(contactController.new);

 router.route('/feedback/:contact_id')
        .get(contactController.view)
        .delete(contactController.delete);

module.exports = router;    

