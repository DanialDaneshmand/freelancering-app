import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loading({ height = "40", width = "75" }) {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius={9}
      color="blue"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
      visible={true}
    />
  );
}

export default Loading;
