/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import { useFormContext } from "../context/FormContext";

export default function dashboard() {
  const { state } = useFormContext();
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>Name: {state.name}</li>
        <li>Email: {state.email}</li>
        <li>Password: {state.senha}</li>
        <li>Provider: {state.provider}</li>
        <li>CRECI: {state.creci}</li>
        <li>Street: {state.Street}</li>
        <li>Number: {state.Number}</li>
        <li>Neighborhood: {state.Neighborhood}</li>
        <li>City: {state.City}</li>
        <li>State: {state.State}</li>
        <li>Zip Code: {state.ZipCode}</li>
      </ul>
    </div>
  );
}
