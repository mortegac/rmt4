import React from "react";
import styled from "styled-components";
import { GetLocaleDate } from "../common/dateHandling/GetLocaleDate";

const NotificationBox = styled.div`
  width: 100%;
  background: var(--Lightest-gray);
  border: 1px solid var(--Lighter-gray);
  padding: 16px;
  border-radius: 6px;
  opacity: 0;
  animation-fill-mode: forwards;
  animation-name: details-appear;
  animation-delay: 0.8s;
  animation-duration: 0.4s;
  color: var(--Text-secondary);
  h4 {
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
  }
  &.alert {
    background: rgba(255, 51, 85, 0.15);
    border: 1px solid rgba(255, 51, 85, 0.15);
    h4 {
      color: var(--Text-red);
    }
    p {
      strong {
        color: var(--Text-red);
      }
    }
  }
  &.success {
    background: rgba(34, 204, 102, 0.15);
    border: 1px solid rgba(34, 204, 102, 0.15);
    h4 {
      color: var(--Text-green);
    }
    p {
      strong {
        color: var(--Text-green);
      }
    }
  }

  p {
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: normal;
  }
  @keyframes details-appear {
    0% {
      opacity: 0;
      transform: translateX(10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

const TaTDetailsNotification = ({
  text,
  type = "default",
  expirationDate,
  expiredTitle,
  expiredTransaction,
}) => {
  return (
    <NotificationBox className={type}>
      <p dangerouslySetInnerHTML={{ __html: text.split("Expires:")[0] }}></p>
      {expiredTransaction ? (
        <></>
      ) : (
        expirationDate && (
          <div
            style={{ display: "flex", marginTop: "8px", alignItems: "center" }}
          >
            <h4 style={{ marginRight: "8px" }}>{`${
              expiredTitle ? expiredTitle : "Expires"
            }: `}</h4>
            <GetLocaleDate date={expirationDate} />
          </div>
        )
      )}
    </NotificationBox>
  );
};

export default TaTDetailsNotification;
