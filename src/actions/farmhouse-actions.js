// import firestore from "../firebase";
// const db = firestore.collection("farmhouse");
import { firestore } from "firebase";
const db = firestore().collection("/farmhouse");
export default function GetAllFarmHouse() {
  return db;
}
// // class FarmHouseDataService {
// //   getAll() {
// //     return db;
// //   }

// //   create(farmhouse) {
// //     return db.add(farmhouse);
// //   }

// //   update(id, value) {
// //     return db.doc(id).update(value);
// //   }

// //   delete(id) {
// //     return db.doc(id).delete();
// //   }
// // }

// // export default FarmHouseDataService();
