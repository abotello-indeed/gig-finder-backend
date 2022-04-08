const { dbConnect, MONGODB_URI } = require('./util');
const { Gig } = require('./models');

dbConnect(MONGODB_URI)
    .catch(error => console.log(error));

module.exports = {
  gig: {
      findAll: async () => {
          const gigs = await Gig.find();
          return gigs;
      },
      findOne: async (filter) => {
          const gig = await Gig.findOne(filter);
          return gig;
      },
      create: async (data) => { await Gig.create(data); },
      update: async (filter, data) => { await Gig.updateOne(filter, data); },
      delete: async (filter) => { await Gig.deleteOne(filter); }
  }
};
