import { gql } from "@apollo/client";

// Obtener datos de todos los países
const COUNTRIES_DATA = gql`
  query GetCountry {
    countries {
      name
      native
      continent {
        name
      }
      capital
      languages {
        name
      }
      phone
      currency
      code
      states {
        name
      }
    }
  }
`;

// Buscar un país por código
export const generateQueryFindByCode = (code) => {
  return gql`
    query GetCountryByCode($code: ID!) {
      countries(filter: { code: { eq: $code } }) {
        name
        native
        continent {
          name
        }
        capital
        languages {
          name
        }
        phone
        currency
        code
        states {
          name
        }
      }
    }
  `;
};

export default COUNTRIES_DATA;
