import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const UserMenu = () => {
  return (
    <Container>
      <div>
        <div className="text-center dashboard-menu">
          <div className="list-group">
            <h4>Dashboard</h4>
            <NavLink
              to="/dashboard/user/profile"
              className="list-group-item list-group-item-action"
            >
              Profile
            </NavLink>
            <NavLink
              to="/dashboard/user/orders"
              className="list-group-item list-group-item-action"
            >
              Orders
            </NavLink>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  @media only screen and (max-width: 768px) {
    width: 70%;
    margin: -40px auto;
  }
`;

export default UserMenu;
