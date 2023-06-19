import { useState } from "react";
import { Button, Space, Input } from "antd";

export function ProductSearchbar() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  return (
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
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <Button type="primary" className="bg-primaryBlue" htmlType="submit">
            Submit
          </Button>
        </Space.Compact>
      </form>
    </div>
  );
}
