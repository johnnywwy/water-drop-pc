import { gql } from "@apollo/client";

export const SEND_EMAIL_CODE = gql`
  mutation sendEmailCode($email: String!) {
    sendEmailCode(email: $email) {
      code
      message
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $code: String!) {
    login(email: $email, code: $code) {
      code
      message
      data
    }
  }
`;
