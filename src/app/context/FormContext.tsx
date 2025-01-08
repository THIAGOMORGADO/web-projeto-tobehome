/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ReactNode } from "react";
import { createContext, useContext, useReducer } from "react";

type State = {
  name: string;
  email: string;
  senha: string;
  provider: string;
  creci: string;
  Street: string;
  Number: string;
  Neighborhood: string;
  City: string;
  State: string;
  ZipCode: string;
};

type Action = {
  type: FormActions;
  payload: any; // Changed from unknown to string for better type safety
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type FromProviderProps = {
  children: ReactNode;
};

const initialData: State = {
  name: "",
  email: "",
  senha: "",
  provider: "",
  creci: "",
  Street: "",
  Number: "",
  Neighborhood: "",
  City: "",
  State: "",
  ZipCode: "",
};

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

export enum FormActions {
  setName,
  setEmail,
  setSenha,
  setProvider,
  setCreci,
  setStreet,
  setNumber,
  setNeighborhood,
  setCity,
  setState,
  setZipCode,
}

const formReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setSenha:
      return { ...state, senha: action.payload };
    case FormActions.setProvider:
      return { ...state, provider: action.payload };
    case FormActions.setCreci:
      return { ...state, creci: action.payload };

    case FormActions.setStreet:
      return { ...state, Street: action.payload };

    case FormActions.setNumber:
      return { ...state, Number: action.payload };
    case FormActions.setNeighborhood:
      return { ...state, Neighborhood: action.payload };
    case FormActions.setCity:
      return { ...state, City: action.payload };
    case FormActions.setState:
      return { ...state, State: action.payload };
    case FormActions.setZipCode:
      return { ...state, ZipCode: action.payload };
    default:
      return state; // Added default case to ensure state is always returned
  }
};
export const FormProvider = ({ children }: FromProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("userform tem que se usado no provide");
  }
  return context;
};
