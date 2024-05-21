import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
  query getUserInfo {
    getUserInfo {
      tel
      name
      id
      desc
      avatar
      email
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: String!, $params: UserInput!) {
    updateUser(id: $id, params: $params) {
      code
      message
    }
  }
`;
