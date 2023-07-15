import { Button, Space, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

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
              className="border border-blue-400 "
              placeholder="Search"
              required
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button
              type="primary"
              className="bg-primaryBlue border border-blue-400 "
              htmlType="submit"
              onClick={handleclick}
            >
              <FormattedMessage id="ProductSearchbar.search" />
            </Button>
          </Space.Compact>
        </form>
      </div>
    </>
  );
}
