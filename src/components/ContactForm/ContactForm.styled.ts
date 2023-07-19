import styled from "styled-components";
import { Form, Field } from "formik";

export const FormWrap = styled(Form)`
  padding: 20px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrap = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`;

export const LabelWrap = styled.div`
  position: relative;

  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export const Input = styled(Field)`
  padding: 8px;

  background: ${({ theme }) => theme.colors.transparent};
  border: 2px solid ${({ theme }) => theme.colors.accentSecondary};
  border-radius: 5px;

  :focus {
    outline: 1px solid ${({ theme }) => theme.colors.accentPrimary};
  }

  :focus ~ label,
  :not(:placeholder-shown) ~ label {
    top: -8px;

    font-size: 12px;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 1;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 5px;

  padding: 0 5px;
  opacity: 0.8;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.15;
  pointer-events: none;
  transition: all ${({ theme }) => theme.transitions.slower};

  @media screen and (min-width: 600px) {
    font-size: 16px;
  }
`;

export const ErrorMessageWrap = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.15;
  color: #ca5757;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 10px 30px;
  margin-bottom: 20px;

  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.accentPrimary};
  cursor: pointer;

  transition: background-color ${({ theme }) => theme.transitions.slower};

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
`;
