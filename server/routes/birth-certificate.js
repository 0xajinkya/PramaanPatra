import { Router } from "express";
import { BirthCertificate } from "../models/birth-certificate.js";

const router = Router();

router.post("/", async (req, res) => {
    try {
        const {
            childName,
            dateOfBirth,
            birthPlace,
            issuingTo,
            fatherName,
            fatherAadhar,
            montherName,
            motherAadhar,
            txnHash
        } = req.body;
        const birthC = await BirthCertificate.create({
            childName,
            dateOfBirth,
            birthPlace,
            issuingTo,
            fatherName,
            fatherAadhar,
            montherName,
            motherAadhar,
            txnHash
        });
        return res.status(201).json({ message: "Birth certificate issued!", birthCertificate: birthC })
    } catch (error) {
        return res.status(400).json({ message: error.message || "Cannot create birth certificate!" });
    }
});

router.get("/:txnHash", async (req, res) => {
    try {
        const {
            txnHash
        } = req.params;
        const birthC = await BirthCertificate.findOne({
            txnHash
        });
        return res.status(200).json({ message: "Birth certificates fetched!", birthCertificate: birthC });
    } catch (error) {
        return res.status(400).json({ message: error.message || "Cannot get birth certificate!" });
    }
});

router.get("/", async (req, res) => {
    try {
        const {
            walletAddr
        } = req.query;
        const birthC = await BirthCertificate.find({
            issuingTo: walletAddr
        });
        return res.status(200).json({ message: "Birth certificates fetched!", birthCertificate: birthC });
    } catch (error) {
        return res.status(400).json({ message: error.message || "Cannot get birth certificate!" });
    }
})

export { router as birthRouter };