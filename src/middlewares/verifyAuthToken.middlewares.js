import jwt from 'jsonwebtoken';

const verifyAuthTokenMiddleware = (req, res, next) => {

    let token = req.headers.authorization;

    if(!token) {
        return res
        .status(401)
        .json({message: "Missing Authorization Token."})
    }

    token = token.split(" ")[1];

    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
        if(error) {
            return res.status(401).json({message: "Invalid Token"});
        }
        req.user = decoded.email;
        next();
    });

};

export default verifyAuthTokenMiddleware;