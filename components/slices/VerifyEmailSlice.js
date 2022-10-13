/**
 * FORMAT URL = DOMAIN/LOCALE/verify-email/?token=123
 */

 import React, { useEffect, useState } from "react";
 import { useRouter } from "next/router";
 
 import phone from "../../images/s6_cellphone.svg";
 import { Section, Btn } from "../common";
 import { PageContainer, SectionContainer } from "./VerifyEmailSliceStyle";
 import { verifyEmail } from "../../services/verify-email";
 
 const VerifyEmailSlice = ({ slice }) => {
   const {
     primary: { section_image_verified },
     primary: { section_image_error },
     primary: { section_title_verified },
     primary: { section_title_could_not_verified },
     primary: { section_title_link_expired },
     primary: { button_url_back_app },
     primary: { button_text_back_app },
   } = slice;
   
   const router = useRouter();
   const [typeResponseAPI, setTypeResponseAPI] = useState("caseNUll");
 
   useEffect(() => {
     const fetchAPI = async () => {
       try {
         if (router?.query?.token) {
           setTypeResponseAPI("");
         } else {
           const request = await verifyEmail(`${router?.query?.token || ""}`);
 
           if (
             typeof request === "object" &&
             request.hasOwnProperty("error") &&
             request.error !== ""
           ) {
             const { data, status } = request.error.response;
 
             if (status === 400 && data.retVal === 20)
               setTypeResponseAPI("caseInvalidToken"); //'Invalid email code.'
             if (status === 400 && data.retVal === 30)
               setTypeResponseAPI("caseExpireToken"); //'Email code expired.
           } else if (
             typeof request === "object" &&
             request.hasOwnProperty("response")
           ) {
             setTypeResponseAPI("caseEmailVerify");
           } else {
             setTypeResponseAPI("");
           }
         }
       } catch (error) {
         console.error("error", error);
         setTypeResponseAPI("");
       }
     };
 
     fetchAPI(typeResponseAPI);
 
   }, []);
 
   const caseNUll = () => <></>;
   const caseEmailVerify = () => (
     <>
       <img
         src={section_image_verified?.url || phone}
         alt="ria cellphone"
       />
       <h2 className="verified">{section_title_verified[0].text || "Your email has been verified!"}</h2>
       <Btn
         url={button_url_back_app?.url || "#"}
         fullwidth={false}
         type="solid-orange"
         innerText={button_text_back_app[0]?.text || "-Go back to the app"}
         style={{ width: "206px" }}
       />
     </>
   );
   const caseInvalidToken = () => (
     <>
       <img src={section_image_error.url|| phone} alt="Invalid token" />
       <h2 className="not-verified">{section_title_could_not_verified[0].text || "We couldn't verify your email"}</h2>
       <Btn
         url={button_url_back_app?.url || "#"}
         fullwidth={false}
         type="solid-orange"
         innerText={button_text_back_app[0]?.text || "Go back to the app"}
         style={{ width: "206px" }}
       />
     </>
   );
   const caseExpireToken = () => (
     <>
       <img src={section_image_error?.url || phone} alt="Expire token" />
       <h2 className="expired">{section_title_link_expired[0].text || "This link has expired. Restart process in the app."}</h2>
       <Section style={{ justifyContent: "center" }}>
         <Btn
           url={button_url_back_app?.url}
           fullwidth={false}
           type="solid-orange"
           innerText={button_text_back_app[0].text || "Go back to the app"}
           style={{ width: "206px" }}
         />
       </Section>
     </>
   );
 
   return (
     <PageContainer>
       <SectionContainer>
         {typeResponseAPI === "" && caseInvalidToken()}
         {typeResponseAPI === "caseNUll" && caseInvalidToken()}
         {typeResponseAPI === "caseEmailVerify" && caseEmailVerify()}
         {typeResponseAPI === "caseInvalidToken" && caseInvalidToken()}
         {typeResponseAPI === "caseExpireToken" && caseExpireToken()}
       </SectionContainer>
     </PageContainer>
   );
 };
 
 export default VerifyEmailSlice;