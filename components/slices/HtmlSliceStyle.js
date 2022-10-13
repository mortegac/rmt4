import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .w-container {
    max-width: 1054px;
    padding: 0 15px;
    width: 100%;
    h1 {
      font-size: 42px;
      line-height: 44px;
      font-weight: bold;
      text-align: center;
    }
    h2 {
      color: rgba(0, 17, 51, 0.8);
    }

    h3 {
      color: rgba(0, 17, 51, 0.8);
    }

    h4 {
      margin-bottom: 10px;
      color: rgba(0, 17, 51, 0.9);
      font-family: "Nunito Sans";
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
    }
    li,
    p {
      line-height: 25px;
      font-size: 14px;
    }
    table {
      tbody {
        tr {
          color: rgba(0, 17, 51, 0.8);
        }
      }
      text-align: left;
      border-collapse: collapse;
      border: 1px solid var(--Light-gray);
      th {
        border: 1px solid var(--Light-gray);
        max-width: 50%;
        width: 100%;
        padding-left: 15px;
        .table-title {
          max-width: 25%;
        }
      }
      tr {
        border: 1px solid var(--Light-gray);
        padding-left: 15px;
      }
      td {
        border: 1px solid var(--Light-gray);
        padding: 15px;
      }
    }
  }
`;
