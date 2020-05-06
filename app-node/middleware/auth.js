const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        console.log('000' + req.headers.authorization);
        const token = req.headers.authorization.split(' ')[1];
        console.log('111');
        const decodToken = jwt.verify(token, 'random');
        console.log('222')
        const userId = decodToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'invalid user Id';
        } else {
            console.log('coool');
            next();
        }

    } catch {
        res.status(401).json(
            {error: new Error('invalid request')}
        )
    }
};
