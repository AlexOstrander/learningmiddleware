const gatekeeper = (req, res, next) => {
    const pass = req.query.pass;
   if (pass === 'bean') {
       next();
   } else {
     res.status(403).json({message: 'invalid password'});
   }
};

module.exports = {
   gatekeeper: gatekeeper,
};