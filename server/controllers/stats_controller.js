// Creates the endpoints for the message creation, update, delete, and getall options.

const router = require("express").Router();

const Stats = require("../models/stats_model");

// Creates the /create endpoint taking the reqs from the body in postman using the Message Schema.
router.post("/create", async (req, res) => {
  try {
    let create = new PuttingStats({
      score10: req.body.score10,      
      score15: req.body.score15,      
      score20: req.body.score20,      
      score25: req.body.score25,      
      score30: req.body.score30,      
      score35: req.body.score35,      
      user_id: req.user._id,
    });

    const newPost = await create.save();

    res.status(200).json({
      Created: newPost,
    });
  } catch (err) {
    res.status(500).json({
      Error: err,
    });
  }
});

// Updates a previously made chat post based on the ID
// router.patch("/update/:id", async (req, res) => {
//   try {
//     let newInfo = req.body;

//     let result = await Message.findByIdAndUpdate(req.params.id, newInfo, {
//       new: true,
//     });
//     //
//     res.status(200).json({
//       Updated: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       Error: err,
//     });
//   }
// });

// Deletes a previously made chat message based on ID.
// router.delete("/delete/:id", async (req, res) => {
//   try {
//     const post = await Message.findByIdAndDelete(req.params.id);
//     const allResults = await Message.find().populate("user_id", [
//       "firstName",
//       "lastName",
//       "-_id",
//     ]);

//     if (!post) throw new Error("Post not found");

//     res.status(200).json({
//       Deleted: post,
//       Results: allResults,
//     });
//   } catch (err) {
//     res.status(500).json({
//       Error: err.message,
//     });
//   }
// });

// Searches all chat messages to preview all results
router.get("/all", async (req, res) => {
  try {
    let results = await Message.find()
      .populate("user_id", ["firstName", "lastName", "-_id"])
      .select({
        postBody: 1,
        room: 1,
        createdAt: 1,
        updatedAt: 1,
      });

    res.status(200).json({
      Results: results,
    });
  } catch (err) {
    res.status(500).json({
      Error: err,
    });
  }
});

module.exports = router;
