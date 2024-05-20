import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  experienceInYears: {
    type: Number,
    default: 0,
  },
  workInHospitals: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  ],
});
export const Doctor = mongoose.model('Doctor', doctorSchema);
