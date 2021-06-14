var Medicine = require('../models/medicine');

module.exports = {
    index,
    create,
    update,
    delete: deleteMedicine //cannot use Delete 

}; // our object for references for all of our functions we neeed

function index(req, res) {
    Medicine.find({}, function (err, medicines) {
        res.status(200).json(medicines);
    });

}

function create(req, res) {
    Medicine.create(req.body, function (err, medicine) {
        res.status(201).json(medicine);
    });
}

function update(req, res) {
    Medicine.findByIdAndUpdate(req.params.id, req.body, function () { // 3 arguments at a minimum
        index(req, res); // forwards request object to this function, grab updated collection and sends 
    }); // its easier to update as entire list 

}

function deleteMedicine(req, res) {
    Medicine.findByIdAndDelete(req.params.id, function() { //we call the index
      index(req, res);

    });
}