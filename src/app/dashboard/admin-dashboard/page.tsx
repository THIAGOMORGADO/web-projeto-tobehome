/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useAuth } from "@/context/AuthContext";
import React from "react";

export default function page() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Ola Conta do {user?.email}</h1>
      <h1>Qual e seu tipo de acesso na conta {user?.role}</h1>
    </div>
  );
}
