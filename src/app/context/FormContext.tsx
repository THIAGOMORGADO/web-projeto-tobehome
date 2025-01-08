"use client";

import { ReactNode } from "react";
import { createContext, useContext, useReducer } from "react";

type State = {
  currentStep: number;
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
  payload: unknown;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type FromProviderProps = {
  children: ReactNode;
};

const initialData: State = {
  currentStep: 0,
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
  setCurrentStep,
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

const formReduder = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return {
        ...state,
        currentStep: action.payload,
      };
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
      return state;
  }
};

export const FormProvider = ({ children }: FromProviderProps) => {
  const [state, dispatch] = useReducer(formReduder, initialData);
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
