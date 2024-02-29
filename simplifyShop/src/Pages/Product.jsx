import React, { useEffect, useState } from "react";
import Container from "../Component/Container";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { READ_PRODUCT_PENDING } from "../redux-saga/admin/action/action";
import Navbar from "../Component/Navbar";

const Product = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.adminReducer.data);

  useEffect(() => {
    dispatch({ type: READ_PRODUCT_PENDING });
  }, []);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  console.log(tableData, "tableData");

  return (
    <>
          <Navbar />
      <div>
        <Container>
          <div className="productTitle">
            <h1>Product Details</h1>
          </div>
          <div style={{ textAlign: "right" }}>
            <button onClick={() => navigate("/addproduct/id")}>
              Add Product
            </button>
          </div>
          <table className="tableBg">
            <thead>
              <tr>
                <th>Id</th>
                <th>Product Name</th>
                <th>Purchase Price</th>
                <th>Sale Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((e, indx) => {
                return (
                  <tr>
                    <td>{indx + 1}</td>
                    <td>{e.productName}</td>
                    <td>{e.purchasePrice}</td>
                    <td>{e.salePrice}</td>
                    <td>{e.productQuantity}</td>
                    <td>
                      <div>
                        <span onClick={()=>navigate(`/addproduct/${e.id}`)}>
                          <FaRegEdit />
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Container>
      </div>
    </>
  );
};

export default Product;
