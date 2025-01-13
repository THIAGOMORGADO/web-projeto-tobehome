import Axios from "axios";

export const LocalizationApi = Axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/",
});
