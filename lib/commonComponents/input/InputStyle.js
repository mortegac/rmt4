import styled from 'styled-components'

export const LabelWrapper = styled.label`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(0, 17, 51, 0.8); 
  margin-bottom: 5px;
`;
export const SpanWrapper = styled.span`
  color:#FF3355;
  margin-top: 4px;
  margin-bottom: 4px;
  min-height: 22px;
  &.last {
    min-height: unset;
  }
`;
export const InputWrapper = styled.input`
    height: 30px;
    width: 100%;
    border: 1px solid rgba(0, 17, 51, 0.15);
    border-radius: 6px;
    padding: 13px;
    color: rgba(0, 17, 51, 0.8);
    font-weight: 400;
    font-size: 16px;
    transition: all .4s ease;
    outline: none;
    box-shadow: 0 0 0 0 transparent;
    &:focus {
      box-shadow: 0 0 0 2px #ff6100;
    }
    &.error {
      border: 1px solid rgba(255, 51, 85, 1);
    }
`;