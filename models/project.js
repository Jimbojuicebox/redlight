import { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  category: {
    type: String,
    required: [true, 'Category is required.'],
  }
});

const Project = models.Project || model('Project', ProjectSchema);

export default Project;