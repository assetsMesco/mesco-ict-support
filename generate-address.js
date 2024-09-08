const crypto = require('crypto');

module.exports = async (req, res) => {
    const address = crypto.randomBytes(16).toString('hex');
    res.status(200).json({ address });
};
