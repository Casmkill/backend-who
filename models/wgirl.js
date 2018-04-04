var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var girlsSchema = new Schema({
    YM: { type: String, required: false },
    Month: { type: String, required: false },
    L: { type: String, required: false },
    M: { type: String, required: false },
    S: { type: String, required: false },
    M3SD: { type: String, required: false },
    M2SD: { type: String, required: false },
    M1SD: { type: String, required: false },
    Median: { type: String, required: false },
    P1SD: { type: String, required: false },
    P2SD: { type: String, required: false },
    P3SD: { type: String, required: false }
}, { collection: 'WFAG' });

module.exports = mongoose.model('Girls', girlsSchema);