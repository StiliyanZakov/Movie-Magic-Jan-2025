import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'BASIC_SECRET';

export const authMiddleware = (req, res, next) => {
    const token = req.cookies['auth-cookie'];

    if (!token) {
        return next();
        
    }
    // Validate token
  try {
    const decodedToken = jwt.verify(token, SECRET);

    req.user = decodedToken;

    next();
  } catch (error) {
    // TODO: Invalid token
  }
 
};