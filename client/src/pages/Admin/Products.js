import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Products = () => {
  const [products, setProducts] = useState([]);

  // Get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  // Lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Container>
      <Layout>
        <div className="row dashboard">
          <div className="col-md-3 admin">
            <AdminMenu />
          </div>
          <div className="col-md-9 ">
            <h1 className="text-center">All Products List</h1>
            <div className="d-flex flex-wrap justify-content-center align-items-center  ">
              {products?.map((p) => (
                <Link
                  key={p._id}
                  to={`/dashboard/admin/product/${p.slug}`}
                  className="product-link "
                >
                  <div
                    className="card m-2"
                    style={{
                      width: "18rem",
                      background: "rgba(128, 128, 128, 0.097)",
                    }}
                  >
                    <div className="d-flex flex-column admin2 ">
                      <img
                        src={`/api/v1/product/product-photo/${p._id}`}
                        className="card-img-top flex-grow-1"
                        alt={p.name}
                        style={{ height: "280px" }}
                      />

                      <div
                        className="card-body flex-shrink-1"
                        style={{ height: "130px" }}
                      >
                        <h5 className="card-title" style={{ height: "40px" }}>
                          {p.name}
                        </h5>
                        <p className="card-text" style={{ height: "70px" }}>
                          {p.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 40px;

  img {
    border-bottom: 1px solid gray;
  }
`;

export default Products;
