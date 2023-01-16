// PLEASE SAVE THE MATRICES INTO THE DATABASE IN THE SCHEMA 
let data = [
  {
    "ICD_codes": ["A21", "A22", "B21"],
    "Price":    [20,    30,    50],
    "Quantity": [1,     1,     1]
  },
  {
    "ICD_codes": ["A11", "D35"],
    "Price":    [10,    90],
    "Quantity": [1,     2]
  },
  {
    "ICD_Codes": ["A21", "C41"],
    "Price":    [20,    60],
    "Quantity": [1         1]
  }
];

let schema = {
  "_id": "validationData",
  "superCategories": [["A", "C", "D"], 
                      ["B"],
                      ["A", "B", "C", "D"]]
}

// Saving the matrices


