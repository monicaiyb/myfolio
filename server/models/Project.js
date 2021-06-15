const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    categories: {
        type: Number,
        default: 1
    },
    date: {
        type: String
    },
    technology: {
        type: Number,
        default: 1
    },
    team: {
        type: Number,
        default: 1
    },
    description: {
        type: String
    },
    images: {
        type: Array,
        default: []
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true })


projectSchema.index({ 
    title:'text',
    description: 'text',
}, {
    weights: {
        name: 5,
        description: 1,
    }
})

const Project = mongoose.model('Project', projectSchema);

module.exports = { Project }