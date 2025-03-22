// // controllers/itemController.js
// const LostFound = require("../model/itemSchema");

// // Save a new item
// const saveItem = async (req, res) => {
//   try {
//     const newItem = new LostFound(req.body);
//     await newItem.save();
//     res.status(201).json(newItem);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = { saveItem };
