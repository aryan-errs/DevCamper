const Bootcamp = require('../models/Bootcamp');


// Description: Bootcamps controller
// Routes: GET /api/v1/bootcamps
// Access: Public  

exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({success: true, count: bootcamps.length, data: bootcamps});
    } catch (err) {
        res.status(400).json({success: false});
    }
}

// Description: Single Bootcamp controller
// Routes: GET /api/v1/bootcamps/:id
// Access: Public  

exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if(!bootcamp){
            return res.status(400).json({success: false, data: null});
        }
        res.status(200).json({success: true, data: bootcamp});
    } catch (err) {
        // res.status(400).json({success: false, data: null});
        next(err);
    }
}

// Description: Create new Bootcamp controller
// Routes: POST /api/v1/bootcamps
// Access: Private 

exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success: true,
            data: bootcamp
        });
    } catch (err) {
        res.status(400).json({success: false});
        // next(err);
    }
}

// Description: Update a Bootcamp controller
// Routes: PUT /api/v1/bootcamps/:id
// Access: Private 

exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if(!bootcamp){
            return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: bootcamp});
    } catch (err) {
        res.status(400).json({success: false});
    }
}




// Description: Delete a Bootcamp controller
// Routes: DELETE /api/v1/bootcamps/:id
// Access: Private 

exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
        if(!bootcamp){
            return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: bootcamp});
    } catch (err) {
        res.status(400).json({success: false});
    }
}
