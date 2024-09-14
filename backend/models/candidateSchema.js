const mongoose = require('mongoose');

const candidateSchema = new mongoose.schema({
    name: {
        type: String,
        required: true
    },
    party: {
        type: String,
        required: true
    },
    votes : [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
            votedAt: {
                type: Date,
                required: true,
            }
        }
    ],
    voteCount: {
        type: Number,
        default: 0,
        required: true,
    }
});

const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;