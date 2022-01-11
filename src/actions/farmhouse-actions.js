// import firestore from "../firebase";
// const db = firestore.collection("farmhouse");
import { firestore } from "firebase";
const db = firestore().collection("/farmhouse");

export default function GetAllFarmHouse() {
  return db;
}
export class FarmHouseDataService {
  addProductToDatabase({ id, value, products }) {
    console.log(id);
    // return db.doc(id).update({ products: { ...products, value } });
  }
}
// //   getAll() {
// //     return db;
// //   }

// //   create(farmhouse) {
// //     return db.add(farmhouse);
// //   }

// //   delete(id) {
// //     return db.doc(id).delete();
// //   }
// // }

// // export default FarmHouseDataService();
