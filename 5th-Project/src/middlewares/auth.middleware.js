
const jwt = require('jsonwebtoken');

function authArtist(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        if (decoded.role !== "artist") {
            return res.status(403).json({
                message: "YOU DON'T HAVE ACCESS"
            });
        }

        req.user = decoded;
        next();

    } catch (err) {
        console.log(err);

        return res.status(401).json({
            message: "Unauthorized"
        });
    }
}

function authUser(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        if (decoded.role !== "user") {
            return res.status(403).json({
                message: "YOU DON'T HAVE ACCESS"
            });
        }

        req.user = decoded;
        next();

    } catch (err) {
        console.log(err);

        return res.status(401).json({
            message: "Unauthorized"
        });
    }
}

module.exports = { authArtist, authUser };
