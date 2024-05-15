import React from "react";
import Header from "./Header";

const CommonPage = ({ ActiveCompoonent }) => {
  return (
    <div>
      {/*Rendered active component */}
    
      {ActiveCompoonent}
      {console.log("this is common without any data")};
    </div>
  );
};
export default CommonPage;
