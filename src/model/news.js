import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const newsSchema = new Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    description: { type: String, required: true },
    articleLink: { type: String, required: false }
});
const News = model('News', newsSchema);
export default News;