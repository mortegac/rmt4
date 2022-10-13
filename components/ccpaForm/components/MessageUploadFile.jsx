import React from "react";
import { ContainerItem } from "../WrapperFormStyles";
import { Text } from "../../common/";

export const MessageUploadFile = ({
  id,
  message,
  icon,
  filename = "",
  className,
}) => {


  return (
    <ContainerItem style={{ alignItems: "center" }}>
      <ContainerItem
        className={className}
        style={{
          flexDirection: "column",
          margin: 0,
          justifyContent: "flex-end",
          alignItems: "flex-end",
          paddingRight: 16,
        }}
      >
        <Text
          id={message}
          textAlign="right"
          maxWidth="120px"
          style={{
            margin: 0,
            padding: 0,
            fontSize: "12px",
            width: "130px",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {filename || " - "}
        </Text>
        <Text
          textAlign="right"
          style={{
            margin: 0,
            padding: 0,
            fontSize: "12px",
            fontWeight: "bold",
            color: "#001133",
          }}
        >
          {message}
        </Text>
      </ContainerItem>
      {icon === "" ? null : <img src={icon} alt="Success" />}
    </ContainerItem>
  );
};

export default MessageUploadFile;
