import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <div>
        <form
          className="d-flex search-form"
          role="search"
          onSubmit={handleSubmit}
        >
          <input
            className=" me-2"
            type="search"
            placeholder="chicken biriyani"
            aria-label="Search"
            value={values.keyword}
            onChange={(e) => setValues({ ...values, keyword: e.target.value })}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </Container>
  );
};

const Container = styled.div`
  input {
    /* width: 100%; */
    border-radius: 10px 0px 0px 10px;
    outline: none;
    padding: 8px;
    width: 350px;
   

    background: #8080802e;
    text-align: center;
    font-weight: 500;
    color: black;
  }
  button {
    border-radius: 1px 10px 10px 1px;
    margin-left: -8px;
    outline: none;
    border: none;
    font-size: 14px;
    background-color: #ff3855de;
  }
`;

export default SearchInput;
