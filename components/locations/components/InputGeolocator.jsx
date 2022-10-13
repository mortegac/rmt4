import React from "react";

import { InputGeoCoder } from "./InputGeoCoder/InputGeoCoder";
import { InputContainer } from "../locations-styles";

export const InputGeolocator = ({
  activeOptOut,
  collectionLocationQuery,
  distanceType,
  hoursQuery,
  payoutLocationQuery,
  sendLocationQuery,
  setShowFilter,
  setSelectedStore,
  theme,
}) => {
  return (
    <InputContainer optOut={activeOptOut} theme={theme}>
      <InputGeoCoder
        theme={theme}
        filterActive={[
          sendLocationQuery,
          payoutLocationQuery,
          collectionLocationQuery,
          hoursQuery,
          !distanceType,
        ].some((e) => e)}
        onClick={() => {
          setShowFilter(true);
          setSelectedStore("filter");
        }}
      />
    </InputContainer>
  );
};
