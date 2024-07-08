import { ComponentPropsWithoutRef } from "react";

export function Button({ children }: ComponentPropsWithoutRef<"button">) {
  return <button>{children}</button>;
}
