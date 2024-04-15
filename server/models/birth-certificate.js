import mongoose, { Schema, model } from "mongoose";

const BirthCertificateSchema = new Schema({
    childName: String,
    dateOfBirth: String,
    birthPlace: String,
    issuingTo: String,
    fatherName: String,
    fatherAadhar: String,
    motherName: String,
    motherName: String,
    txnHash: {
        unique: true,
        type: String
    },
    issuedFrom: String
});
const BirthCertificate = model("BirthCeritificate", BirthCertificateSchema);
export { BirthCertificate };