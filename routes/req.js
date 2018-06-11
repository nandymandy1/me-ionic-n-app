const express = require("express");
const router = express.Router();
const Req = require("../models/Req");
const config = require("../config/db");


// Add Requitions
router.post("/add", (req, res, next) => {
    // Reqution by Object
    let newReq_b = {
        name: req.body.name,
        floor: req.body.floor,
        section: req.body.section,
        line: req.body.line
    };

    let newReq = new Req({
        a_id: req.body.a_id,
        style_id: req.body.style_id,
        i_name: req.body.i_name,
        size: req.body.size,
        req_b: newReq_b,
        req_to: req.body.reqTo
    });
    Req.addReq(newReq, (err, requ) => {
        if (err) {
            console.log(err);
            res.json({ success: false, msg: "Failed to add the Requsition" });
        } else {
            res.json({
                success: true,
                msg: "Requsition added successfully",
                requ: requ
            });
        }
    });
});

// Approve Requisions
router.get("/approve/:id", (req, res, next) => {
    Req.findOne({ _id: req.params.id }).then((requ) => {
        requ.status = "a";
        requ.adate = new Date();
        requ.save()
        .then(requ => {
            console.log(requ);
            res.json({
                requ: requ,
                msg: "Requsition Approved!",
                success: true,
                status: 500
            });
        });
    });
});

// Issue Navigator with details
router.get("/issue/:id", (req, res, next) => {
    Req.findOne({ _id: req.params.id }).then(requ => {
        res.json({
            requ: requ,
            msg: "Issue Requsition Details",
            success: true,
            status: 500
        });
    });
});

// Issue Requisions
router.post("/issue", (req, res, next) => {

    Req.findOne({ _id: req.body.id }).then(requ => {
        requ.status = "i";
        requ.idate = new Date();
        requ.d_no = req.body.d_no;
        requ.i_qty = req.body.i_qty;
        requ.rate = req.body.rate;
        requ.save().then(requ => {
            res.json({
                requ: requ,
                msg: "Requsition Issued!",
                success: true,
                status: 500
            });
        });
    });

});

// View all Requestions waiting for Approval
router.get('/get/reqwfa', (req, res, next) => {
    
    Req.find({ status:"" })
    .sort({ cdate: "desc" })
    .then(req => {
        res.json({
            req: req,
            status: 500
        })
    });

});

// View all Requsitions which are waiting to be Issues
router.get('/get/reqwfi', (req, res, next) => {
    Req.find({ status: "a" })
    .sort({ adate: "desc" })
    .then(requ => {
        res.json({
            requ: requ,
            status: 500
        })
    });
});

// View all the issued requsitions
router.get('/get/issued', (req, res, next) => {
    Req.find({ status:"i" })
    .sort({ cdate: "desc"})
    .then(requ => {
        res.json({
            requ: requ,
            status: 500
        });
    });
});

// Export Router
module.exports = router;