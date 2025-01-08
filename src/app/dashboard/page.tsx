/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import { useFormContext } from "../context/FormContext";

export default function dashboard() {
  const { state } = useFormContext();

  return (
    <div>
      <h1>DashBoard</h1>

      <div>
        <h2>Informações</h2>
        <ul>
          <li>Nome: {state.name}</li>
          <li>Email: {state.email}</li>
          <li>Senha: {state.senha}</li>
          <li>Provider: {state.provider}</li>
          <li>CRECI: {state.creci}</li>
          <li>Rua: {state.Street}</li>
          <li>Numero: {state.Number}</li>
          <li>Bairro: {state.Neighborhood}</li>
          <li>Cidade: {state.City}</li>
          <li>Estado: {state.State}</li>
          <li>CEP: {state.ZipCode}</li>
        </ul>
      </div>
    </div>
  );
}
