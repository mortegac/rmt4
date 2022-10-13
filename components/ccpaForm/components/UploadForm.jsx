import React, { useRef, useState, useEffect, useContext } from "react";
import { MessageUploadFile } from "../components";
import { Btn } from "../../common";
import { ContainerItem } from "../WrapperFormStyles";
import { ReactReduxContext } from "react-redux";

const UploadForm = ({
  name,
  text,
  step,
  handlerOnchange,
  messageFail,
  messageSuccess,
  icoSuccess,
  icoFail,
  form,
  currentState,
}) => {
  useEffect(() => {}, [status, image]);

  const fileRef = useRef();
  const [image, setImage] = useState(
    currentState?.form[step][name] !== ""
      ? {
          nameFile: currentState?.form[step].uploadedFileName,
          preview: "",
        }
      : ""
  );

  const [status, setStatus] = useState(
    currentState?.form[step][name] !== "" ? 1 : 0
  );

  const convertImageToFile = (file) =>
    new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve(event.target.result);
        };
        reader.readAsDataURL(file);
      } catch (error) {
        reject(error);
      }
    });

  const handleChange = async (e) => {
    if (e?.target?.files[0]?.size / 1000000 < 5) {
      try {
        if (e.target.files.length) {
          const nameFile = e.target.files[0].name;

          convertImageToFile(e.target.files[0]).then((dataUri) => {
            const imageBlob = new Blob([JSON.stringify(dataUri, null, 2)], {
              type: "application/json",
            });

            const objSelected = {
              target: {
                name: "form",
              },
              step,
              payload: {
                [name]: imageBlob,
                uploadedFileName: nameFile,
              },
            };

            setImage({
              nameFile: nameFile,
              preview: dataUri,
            });
            setStatus(1);

            handlerOnchange(objSelected);
          });
        }
      } catch (error) {
        setImage({
          nameFile: e.target.files[0].name || "Error uploading file",
          preview: "",
        });
        setStatus(2);
      }
    } else {
      setImage({
        nameFile: e.target.files[0].name || "Error uploading file",
        preview: "",
      });
      setStatus(2);
    }
  };

  const dataUpload = {
    ["0"]: { ico: "", message: "" }, // 0=none
    ["1"]: { ico: icoSuccess, message: messageSuccess }, // 1=success
    ["2"]: { ico: icoFail, message: messageFail }, // 2=error
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    fileRef.current.click();
  };

  return (
    <>
      <ContainerItem className="uploadFileBtn">
        <Btn
          innerText={text || ""}
          fullwidth={true}
          type="outline-orange"
          style={{ margin: 0, marginRight: 16 }}
          onClick={(e) => handlerSubmit(e)}
          className={"uploadFileInnerBtn"}
        />
        <input
          ref={fileRef}
          onChange={handleChange}
          multiple={false}
          type="file"
          hidden
        />

        <MessageUploadFile
          style={{ minWidth: "205px" }}
          message={dataUpload[status || 0].message || ""}
          icon={dataUpload[status || 0].ico || ""}
          filename={image.nameFile}
          className={"messageUploadFile"}
        />
      </ContainerItem>
    </>
  );
};

export default UploadForm;
