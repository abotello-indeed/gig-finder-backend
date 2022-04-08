const fs = require('fs');
const path = require('path');
const { Gig } = require('../models');
const { dbConnect, dbDisconnect, MONGODB_URI } = require('../util');

seed().catch(error => console.log(error));

async function seed() {
    const raw = fs.readFileSync(path.join(__dirname,'dummy_gigs.json'));
    const data = JSON.parse(raw);

    dbConnect(MONGODB_URI)
        .catch(error => console.log(error));

    for(const gig of data) {
        const newGig = new Gig(gig);
        await newGig.save();
    }

    dbDisconnect()
        .catch(error => console.log(error));
}
