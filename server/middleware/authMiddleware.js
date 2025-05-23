// import jwt from 'jsonwebtoken';
// import userModel from '../models/userModel.js';

// export const protect = async (req, res, next) => {
//   let token;

//   try {
//     // Check for token in Authorization header
//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith('Bearer')
//     ) {
//       token = req.headers.authorization.split(' ')[1];

//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // Attach user to request (excluding password)
//       req.user = await userModel.findById(decoded.id).select('-password');

//       next();
//     } else {
//       res.status(401).json({ message: 'Not authorized, no token' });
//     }
//   } catch (error) {
//     res.status(401).json({ message: 'Not authorized, token failed', error: error.message });
//   }
// };


