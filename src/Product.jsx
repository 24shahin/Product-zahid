import React from "react";
import Container from "./component/Layout/Container";
import Flex from "./component/Layout/Flex";
import Pagination from "./component/Layout/Pagination";

function Product() {
  return (
    <div className="bg-[#f2f4f8]">
      <Container>
        <Flex style={"gap-x-10"}>
          <div className="w-[25%] bg-red-200">shfihsf</div>
          <div className="w-[75%]">
            <Pagination itemsPerPage={8} />
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Product;
