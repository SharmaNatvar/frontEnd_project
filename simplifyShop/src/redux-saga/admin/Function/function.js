import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { txtDB } from "../../../config/firebaseConfig";

// sumbit data to fireBase
export const handleCreate = async ({ payload }) => {
  return await addDoc(collection(txtDB, "todoList"), {
    url: payload.url,
    employAadhar: payload.employAadhar,
    employAddress: payload.employAddress,
    employEmail: payload.employEmail,
    employName: payload.employName,
    employNumber: payload.employNumber,
    employSalary: payload.employSalary,
    employProfession: payload.employProfession,
  })
    .then((res) => {
      const data = "data post";
      const status = 200;
      return {
        data,
        status,
      };
    })
    .catch((err) => {
      console.log(err);
    });
};

// read function
export const handleRead = async () => {
  return await getDocs(collection(txtDB, "todoList")).then((res) => {
    const data = res.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
    return {
      data,
    };
  });
};

// delete function

export const handleDelete = async ({ payload }) => {
  return await deleteDoc(doc(txtDB, "todoList", payload))
    .then((res) => {
      const data = "data post";
      const status = 200;
      return {
        data,
        status,
      };
    })
    .catch((err) => {
      console.log(err);
    });
};


// Update function
export const handleUpate = async ({ payload }) => {
  const { id, ...data } = payload;
  console.warn(id , data, "update");
  const ref = doc(txtDB, "todoList", id);
  return await updateDoc(ref, data)
    .then((res) => {
      const data = "data post";
      const status = 200;
      return {
        data,
        status,
      };
    })
    .catch((err) => {
      console.log(err);
    });
};
