import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const AdminMenu = () => {
  return (
    <>
      <Container>
        <div className="text-center menu">
          <div className="list-group dashboard-menu">
            <h4>Admin Panel</h4>
            <NavLink
              to="/dashboard/admin/create-category"
              className="list-group-item list-group-item-action"
            >
              Create Category
            </NavLink>
            <NavLink
              to="/dashboard/admin/create-product"
              className="list-group-item list-group-item-action"
            >
              Create Product
            </NavLink>
            <NavLink
              to="/dashboard/admin/products"
              className="list-group-item list-group-item-action"
            >
              Products
            </NavLink>
            <NavLink
              to="/dashboard/admin/orders"
              className="list-group-item list-group-item-action"
            >
              Orders
            </NavLink>
            {/* <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink> */}
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  .menu {
    //* mobiles
    @media only screen and (max-width: 768px) {
      width: 90%;
      margin-top: -35px;
      margin-bottom: 30px;
    }
    //*tablets
    @media only screen and (min-width: 768px) and (max-width: 1200px) {
      width: 90%;
    }
    @media only screen and (min-width: 768px) {
      width: 90%;
    }
  }
`;

export default AdminMenu;
