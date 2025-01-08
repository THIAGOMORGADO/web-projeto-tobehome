"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { createContext, useContext, useReducer } from "react";

type State = {
  currentStep: number;
  name: string;
  email: string;
  senha: string;
  provider: string;
  creci: string;
};

type Action = {
  type: FormActions;
  payload: any;
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
