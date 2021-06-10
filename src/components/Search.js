import React from "react";
import { Form } from "react-bootstrap";

const Search = ({search, setSearch}) => {
  return (
    <div>
      <Form.Group className="search">
        <Form.Control type="text" placeholder="Search..." onChange={(e)=>setSearch(e.target.value)}/>
      </Form.Group>
    </div>
  );
};

export default Search;
