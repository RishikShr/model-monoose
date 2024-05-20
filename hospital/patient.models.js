import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  admittedIn: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  admissionDate: {
    type: Date,
    default: Date.now,
  },
  dischargeDate: {
    type: Date,
    default: null,
  },
  diagnosis: String,
  doctor: {
    type: Schema.Types.ObjectId,
    ref: 'Doctor',
  },
});
export const PatientSchema = mongoose.model('PatientSchema', patientSchema);
