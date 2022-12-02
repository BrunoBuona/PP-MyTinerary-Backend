function userExistsResponse(req,res) {
    return res.status(400).json({
        success: false,
        message: 'user already exists'
    })
}

function userSignedUpResponse(req,res) {
    return res.status(201).json({
        success: true,
        message: 'user signed up'
    })
}

function userSignedOutResponse(req,res) {
    return res.status(201).json({
        success: true,
        message: 'user signed out'
    })
}

function userNotFoundResponse(req,res) {
    return res.status(404).json({
        success: false,
        message: 'user not found'
    })
}

function mustSignInResponse(req,res) {
    return res.status(400).json({
        success: false,
        message: 'sign in please!'
    })
}

function invalidCredentialsResponse(req,res) {
    return res.status(401).json({
        success: false,
        message: 'email or password incorrect'
    })
}

function verifyResponse(req,res) {
    return res.status(401).json({
        success: false,
        message: 'Please, verify your email account and try again'
    })
}
function showFound(req, res) {
    return res.status(401).json({
        success: false,
        message: 'You are not the owner of this event'
    });
}

function notShow(req, res) {
    return res.status(404).json({
        success: false,
        message: "Show not Found ! ",
    });
}
function hotelFound(req, res) {
    return res.status(401).json({
        success: false,
        message: 'You are not the owner of this hotel'
    });
}

function notHotel(req, res) {
    return res.status(404).json({
        success: false,
        message: "Not Hotel Found ! ",
    });
}

function itineraryFound(req, res) {
    return res.status(401).json({
        success: false,
        message: 'You are not the owner of this event'
    });
}

function notItinerary(req, res) {
    return res.status(404).json({
        success: false,
        message: "Not Found ! ",
    });
}

function cityFound(req, res) {
    return res.status(401).json({
        success: false,
        message: 'You are not the owner of this event'
    });
}

function notCity(req, res) {
    return res.status(404).json({
        success: false,
        message: "Not Found ! ",
    });
}
function notyourComment(req, res) {
    return res.status(401).json({
        success: false,
        message: 'You are not the owner of this event'
    });
}
function commentNotFound(req, res) {
    return res.status(404).json({
        success: false,
        message: "Not Found ! ",
    });
}



module.exports = {
    userSignedUpResponse,
    userExistsResponse,
    userNotFoundResponse,
    userSignedOutResponse,
    mustSignInResponse,
    invalidCredentialsResponse,
    verifyResponse,
    showFound,
    notShow,
    hotelFound,
    notHotel,
    itineraryFound,
    notItinerary,
    cityFound,
    notCity,
    notyourComment,
    commentNotFound
}