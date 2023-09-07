// contactController.js
// Import contact model
const Post = require('../model/post_model.js'); // Düzeltildi, 'const' eklendi

// Handle index actions
exports.index = function (_req, res) {
    Post.find() // find yerine get kullanarak postların api da ile görünmesini engelleyebiliriz .
        .then(function (Posts) {
            res.json(
                Posts
            //     {
            //     status: "success",
            //     message: "Posts retrieved successfully",
            //     data: Posts 
                
            // }
            );
        })
        .catch(function (err) {
            console.error(err); // Hata detaylarını konsola yazdırın
            res.json({
                status: "error",
                message: "Error retrieving posts: " + err.message, // Hata mesajını daha açıklayıcı hale getirin
            });
        });
};
    
// Handle create contact actions
exports.new = function (req, res) {
    var contact = new Post();

    contact.title = req.body.title;
    contact.subtitle = req.body.subtitle;
    contact.content = req.body.content;
    contact.tag = req.body.tag;
    contact.image = req.body.image;
    contact.createdAt = req.body.createdAt;

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
    Post.findById(req.params.contact_id)
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

// Handle update contact info
exports.update = async function (req, res) {
    try {
        const post = await Post.findById(req.params.contact_id);
        
        post.title = req.body.title;
        post.subtitle = req.body.subtitle;
        post.content = req.body.content;
        post.tag = req.body.tag;
        post.image = req.body.image;
        post.createdAt = req.body.createdAt;
        
        await post.save();
        
        res.json({
            message: 'Contact Info updated',
            data: post
        });
    } catch (err) {
        console.error(err); // Hata detaylarını konsola yazdırın
        res.json({
            status: "error",
            message: "Error updating contact info: " + err.message, // Hata mesajını daha açıklayıcı hale getirin
        });
    }
};

// Handle delete contact
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
