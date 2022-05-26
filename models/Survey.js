import mongoose from 'mongoose';

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [String],
});

mongoose.Mongoose.model('surveys', surveySchema);

