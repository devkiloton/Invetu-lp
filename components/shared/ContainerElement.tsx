import React from "react";

export default function ContainerElement({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="card w-full max-w-96 bg-base-100 shadow-xl">
      <div className="card-body p-6">{children}</div>
    </div>
  );
}
