import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import styled from "styled-components";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Container>
      <Layout title={"Dashboard - Ecommerce App"}>
        <div className="container-flui m-2 p-3 dashboard">
          <div className="row">
            <div className="col-md-2">
              <UserMenu />
            </div>
            <div className="col-md-9">
              <div className="card w-75 p-3 menu">
                <h3>{auth?.user?.name}</h3>
                <h3>{auth?.user?.email}</h3>
                <h3>{auth?.user?.address}</h3>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Container>
  );
};

const Container = styled.div`
    @media screen and (max-width: 768px) {
      .menu{
        margin-top: 50px;
      }
    }
`;

export default Dashboard;
