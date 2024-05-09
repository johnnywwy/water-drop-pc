import { gql } from "@apollo/client";

export const sendEmailCode = gql`
  mutation sendEmailCode($email: String!) {
    sendEmailCode(email: $email)
  }
`;
