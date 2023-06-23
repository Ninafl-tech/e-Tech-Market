import { Button, Space, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ProductSearchbar() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  function handleclick() {
    navigate(`/searchResults/${searchValue}`);
  }
  return (
    <>
      <div className="searchDiv w-full h-full">
        <form>
          <Space.Compact
            style={{
              width: "100%",
            }}
          >
            <Input
              placeholder="Search"
              required
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button
              type="primary"
              className="bg-primaryBlue"
              htmlType="submit"
              onClick={handleclick}
            >
              Submit
            </Button>
          </Space.Compact>
        </form>
      </div>
    </>
  );
}
