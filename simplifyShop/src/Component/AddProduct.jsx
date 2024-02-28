import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CREATE_PRODUCT_PENDING, UPDATE_PRODUCT_PENDING } from "../redux-saga/admin/action/action";

const AddProduct = () => {
  const { id } = useParams();
  const [inputData, setInputData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.adminReducer.data);

  const handleOnChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(inputData, "inputData");

  const handleSumbit = () => {
    dispatch({
      type: CREATE_PRODUCT_PENDING,
      payload: inputData,
    });
    swal({
      title: "Good job!",
      text: "Employee added successfully!",
      icon: "success",
    });
    navigate("/product");
  };


  useEffect(() => {
    if (id !== "id") {
      const result = data?.filter((e) => {
        return e.id === id;
      });
      if (result) {
        setInputData(result[0]);
      }
    }
  }, [data]);

  const handleUpdateSumbit = () => {
    dispatch({
      type: UPDATE_PRODUCT_PENDING,
      payload: { ...inputData, id },
    });
    swal({
      title: "Success!",
      text: "Employee updated successfully!",
      icon: "success",
    });
    navigate("/product");
  };

  return (
    <>
      <div className="addemploy_box">
        <h1>{id === "id" ? "Add" : "Update"} Product</h1>

        <div className="addemploy_input">
          <label>Product Name</label>
          <input
            type="text"
            name="productName"
            onChange={(e) => handleOnChange(e)}
            placeholder="Enter Product Name"
            value={inputData.productName || ""}
          />
        </div>

        <div className="addemploy_input">
          <label>Purchase Price</label>
          <input
            type="number"
            name="purchasePrice"
            onChange={(e) => handleOnChange(e)}
            placeholder="Enter Purchase Price"
            value={inputData.purchasePrice || ""}
          />
        </div>
        <div className="addemploy_input">
          <label>Sale Price</label>
          <input
            type="number"
            name="salePrice"
            onChange={(e) => handleOnChange(e)}
            placeholder="Enter Sale Price"
            value={inputData.salePrice || ""}
          />
        </div>
        <div className="addemploy_input">
          <label>Quantity</label>
          <input
            type="number"
            name="productQuantity"
            onChange={(e) => handleOnChange(e)}
            placeholder="Enter Quantity"
            value={inputData.productQuantity || ""}
          />
        </div>

        <div className="addemploy_btn">
          <button onClick={() => navigate("/employ")}>Cancel</button>
          {id === "id" ? (
            <button onClick={handleSumbit}>Add</button>
          ) : (
            <button onClick={handleUpdateSumbit}>Update</button>
          )}
        </div>
      </div>
    </>
  );
};

export default AddProduct;
