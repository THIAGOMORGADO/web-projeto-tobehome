"use client";

import { useActionState } from "react";
import { submitForm } from "@/app/LandingPage/actions/submit-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { User, Mail, Phone, MessageSquare } from "lucide-react";

export default function VisitorForm() {
  const [state, formAction, isPending] = useActionState(submitForm, null);

  const handleSubmit = (formData: FormData) => {
    formAction(formData);
  };

  return (
    <form action={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name" className="flex items-center gap-2">
          <User className="w-4 h-4" />
          Nome
        </Label>
        <Input id="name" name="name" required />
        {state?.errors?.name && (
          <p className="text-sm text-red-500">{state.errors.name[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          E-mail
        </Label>
        <Input id="email" name="email" type="email" required />
        {state?.errors?.email && (
          <p className="text-sm text-red-500">{state.errors.email[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          Telefone
        </Label>
        <Input id="phone" name="phone" type="tel" required />
        {state?.errors?.phone && (
          <p className="text-sm text-red-500">{state.errors.phone[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          Mensagem
        </Label>
        <Textarea id="message" name="message" required />
        {state?.errors?.message && (
          <p className="text-sm text-red-500">{state.errors.message[0]}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Enviando..." : "Enviar"}
      </Button>

      {state?.success && (
        <Alert>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
    </form>
  );
}
