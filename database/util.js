const mongoose = require('mongoose');

module.exports = {
    MONGODB_URI: 'mongodb://localhost:27017/pgf',
    dbConnect: async (uri) => { await mongoose.connect(uri); },
    dbDisconnect: async () => { await mongoose.disconnect(); }
}
