const feedBack  = require('../model/feedback_model.js'); 


exports.index = function (req, res) {
    feedBack.get()
        .then(function (data) {
            res.json({
                status: "success",
                message: "Feedback retrieved successfully",
                data: data
            });
        })
        .catch(function (err) {
            console.error(err); // Hata detaylarını konsola yazdırın
            res.json({
                status: "error",
                message: "Error retrieving Feedback: " + err.message, // Hata mesajını daha açıklayıcı hale getirin
            });
        });
};

    
exports.new = function (req, res) {
    var contact = new feedBack();
    contact.nameSurname = req.body.nameSurname;
    contact.email = req.body.email;
    contact.subject = req.body.subject;   
    contact.message = req.body.message;   
    contact.save()
        .then(function () {
            res.json({
                message: 'New contact created!',
                data: contact
            });
        })
        .catch(function (err) {
            console.error(err); // Hata detaylarını konsola yazdırın
            res.json({
                status: "error",
                message: "Error creating new contact: " + err.message, // Hata mesajını daha açıklayıcı hale getirin
            });
        });
};


// Handle view contact info
exports.view = function (req, res) {
    feedBack.findById(req.params.contact_id)
        .then(function (contact) {
            res.json({
                message: 'Contact details loading..',
                data: contact
            });
        })
        .catch(function (err) {
            console.error(err); // Hata detaylarını konsola yazdırın
            res.json({
                status: "error",
                message: "Error loading contact details: " + err.message, // Hata mesajını daha açıklayıcı hale getirin
            });
        });
};



// Handle delete contact info
exports.delete = async function (req, res) {
    try {
        await Post.remove({
            _id: req.params.contact_id
        });

        res.json({
            status: "success",
            message: 'Contact deleted'
        });
    } catch (err) {
        console.error(err); // Hata detaylarını konsola yazdırın
        res.json({
            status: "error",
            message: "Error deleting contact: " + err.message, // Hata mesajını daha açıklayıcı hale getirin
        });
    }
};
