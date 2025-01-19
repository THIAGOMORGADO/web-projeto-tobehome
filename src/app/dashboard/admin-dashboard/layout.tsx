import React, { ReactNode } from "react";

type LayOutProps = {
  children: ReactNode;
};

export default function layout({ children }: LayOutProps) {
  return <div>{children}</div>;
}
