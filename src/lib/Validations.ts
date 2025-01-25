import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

export const schemaValidationEmail = yup.object().shape({
    email: yup.string().email('Por favor, insira um email válido.').required('O email é obrigatório.'),
  });

export default async function validateRedefinitionPassword(email: string) {
     



    // Log the email for debugging purposes
    console.log("Email for password redefinition:", email);

    // Return the email for further use
    return email;
}

// Example of how to use this function in another part of your code
// (Assuming you have an async function where you want to call it)
// const email = "user@example.com";
// const result = await validateRedefinitionPassword(email);
// console.log("Result:", result);