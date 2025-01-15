"use client";

import { useState } from "react";
import { db, ref, set } from "@/app/firebaseServices/Firebase"; // Importando o arquivo de configuração do Firebase // Importando o arquivo de configuração do Firebase
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { User, Mail, Phone, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

export default function VisitorForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    error: null,
    success: false,
  });
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState((prevState) => ({ ...prevState, error: null })); // Resetando erro
    setIsPending(true);

    try {
      // Verifica se todos os campos necessários estão preenchidos
      if (!state.name || !state.email || !state.phone || !state.message) {
        setIsPending(false);
        return;
      }

      // Criando referência no Firebase Realtime Database
      const newUserRef = ref(db, "visitors/" + state.email.replace(/\./g, "_")); // Usando o email como identificador único

      // Enviando os dados para o Firebase
      await set(newUserRef, {
        name: state.name,
        email: state.email,
        phone: state.phone,
        message: state.message,
      });

      console.log("Mensagem gravada no Realtime Database");

      // Limpar os campos e mostrar a mensagem de sucesso
      setState({
        name: "",
        email: "",
        phone: "",
        message: "",
        error: null,
        success: true,
      });

      // Redirecionar ou exibir sucesso
      router.push("/"); // Pode ser redirecionado para uma página de agradecimento ou similar
    } catch (err) {
      console.error("Erro ao gravar no Firebase: ", err);
    } finally {
      setIsPending(false); // Resetando o estado de pendência
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name" className="flex items-center gap-2">
          <User className="w-4 h-4" />
          Nome
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={state.name}
          onChange={handleChange}
          required
        />
        {state.error && !state.name && (
          <p className="text-sm text-red-500">O nome é obrigatório.</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          E-mail
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={state.email}
          onChange={handleChange}
          required
        />
        {state.error && !state.email && (
          <p className="text-sm text-red-500">O e-mail é obrigatório.</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          Telefone
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={state.phone}
          onChange={handleChange}
          required
        />
        {state.error && !state.phone && (
          <p className="text-sm text-red-500">O telefone é obrigatório.</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          Mensagem
        </Label>
        <Textarea
          id="message"
          name="message"
          value={state.message}
          onChange={handleChange}
          required
        />
        {state.error && !state.message && (
          <p className="text-sm text-red-500">A mensagem é obrigatória.</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Enviando..." : "Enviar"}
      </Button>

      {state.success && (
        <Alert>
          <AlertDescription>Mensagem enviada com sucesso!</AlertDescription>
        </Alert>
      )}

      {state.error && !state.success && (
        <Alert variant="destructive">
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}
    </form>
  );
}
