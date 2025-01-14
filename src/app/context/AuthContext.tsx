"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Tipagem do usuário
interface User {
  name: string;
  email: string;
  role: string;
}

// Tipagem do contexto de autenticação
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (name: string, email: string, role: string) => void;
  logout: () => void;
}

// Contexto de autenticação (inicializado com valores padrão)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provedor do contexto de autenticação
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  // Recuperar os dados do usuário do localStorage quando o componente for montado
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Restaurar o estado do usuário
    }
  }, []);

  // Função de login
  const login = (name: string, email: string, role: string) => {
    const newUser = { name, email, role };
    setUser(newUser);
    // Salvar os dados no localStorage para persistir após refresh
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  // Função de logout
  const logout = () => {
    setUser(null);
    // Remover os dados do localStorage
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook customizado para acessar o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
