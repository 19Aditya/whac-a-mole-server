import jwt from "jsonwebtoken";
const jwtSecret = process.env.SECRET_KEY;

function authenticateToken(req, res, next) {

	const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Token missing" });
    
  	try {
    	const decoded = jwt.verify(token, jwtSecret);
    	req.email = decoded.email; // Attach decoded payload to request object
    	next();
  	} catch (error) {
    	console.error("Token verification error:", error);
    	return res.status(403).json({ message: "Unauthorized" });
  	}
}

export default authenticateToken;
