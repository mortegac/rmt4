import React, { useState } from "react";
import { useRouter } from "next/router";
import TaTCard from "./TaTCard";
import { PageContainer, SectionContainer } from "./TaTWrapperStyle";

const TaTWrapper = ({ textData, language = "" }) => {
  const router = useRouter();
  const [getToken, setGetToken] = useState(
    router.asPath === "/track-a-transfer/" ||
      router.asPath === "/track-a-transfer"
      ? ""
      : router.asPath.replace(`${router.route}?=`, "")
  );

  return (
    <PageContainer>
      <SectionContainer>
        <div className="left-container">
          <TaTCard textData={textData} token={getToken} language={language} />
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default TaTWrapper;
