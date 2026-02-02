"use client";

// import { useFormState } from "react-dom";
import { useActionState } from "react";
import { ReactNode, useEffect } from "react";
// import { useToast } from "@/components/ui/sonner";
import { toast } from "sonner";
import { actionFunction } from "@/utils/types";

const initialState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState);
  useEffect(() => {
    if (state.message) {
      toast.info(state.message);
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
