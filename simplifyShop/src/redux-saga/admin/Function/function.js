import { addDoc, collection, getDocs } from "firebase/firestore";
import { txtDB } from "../../../config/firebaseConfig";

// sumbit data to fireBase
export const handleCreate = async ({ payload }) => {
  console.log(payload, "function.js 0");
  return await addDoc(collection(txtDB, "todoList"), {
    employAadhar: payload.employAadhar,
    employAddress: payload.employAddress,
    employEmail: payload.employEmail,
    employName: payload.employName,
    employNumber: payload.employNumber,
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
  return await getDocs(collection(txtDB, "todoList"))
  .then((res) => {
    const data = res.docs.map(doc => doc.data());
console.log(data , 'item');
return {
    data
}
    // const result = res.docs?.map((val) => ({ ...val.data(), id: val.id }));
    // console.log(result);
  });
};
