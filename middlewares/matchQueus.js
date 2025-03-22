// const LostFound = require("../model/itemSchema"); // Import your schema

// // Matching Algorithm
// async function findMatches(lostItemId) {
//   const lostItem = await LostFound.findById(lostItemId);
//   if (!lostItem || lostItem.status !== "lost") {
//     throw new Error("Lost item not found or invalid status");
//   }

//   // Fetch all found items
//   const foundItems = await LostFound.find({ status: "found" });

//   const matches = foundItems.map((foundItem) => {
//     let score = 0;

//     // Compare Item Name (fuzzy match using includes)
//     if (
//       foundItem.itemName
//         .toLowerCase()
//         .includes(lostItem.itemName.toLowerCase()) ||
//       lostItem.itemName.toLowerCase().includes(foundItem.itemName.toLowerCase())
//     ) {
//       score += 1;
//     }

//     // Compare Subcity (exact match)
//     if (foundItem.subcity === lostItem.subcity) {
//       score += 1;
//     }

//     // Compare Brand (exact match)
//     if (foundItem.brand === lostItem.brand) {
//       score += 1;
//     }

//     // Compare Category (exact match)
//     if (foundItem.category === lostItem.category) {
//       score += 1;
//     }

//     // Compare Primary Color (exact match)
//     if (foundItem.primaryColor === lostItem.primaryColor) {
//       score += 1;
//     }

//     return {
//       foundItem,
//       score,
//     };
//   });

//   // Filter out matches with score > 0 and sort by score (descending)
//   const filteredMatches = matches
//     .filter((match) => match.score > 0)
//     .sort((a, b) => b.score - a.score);

//   return filteredMatches;
// }

// module.exports = findMatches;
// // Example API Endpoint

