import React, { useEffect, useRef } from "react";
// import lottie from "lottie-web";
import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  filter: ${(props) =>
    props.theme === "xe" ? "hue-rotate(195deg)" : "hue-rotate(0deg)"};
  .loader-element {
    width: 48px;
    height: 48px;
  }
`;

const Loader = ({ theme }) => {
  const container = useRef(null);

  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: container.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     animationData: require("./loader.json"),
  //   });
  // }, []);

  return (
    <LoaderContainer theme={theme}>
      <div className="loader-element" ref={container}></div>
    </LoaderContainer>
  );
};

export default Loader;
