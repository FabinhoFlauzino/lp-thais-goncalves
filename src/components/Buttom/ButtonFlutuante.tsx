"use client"

type Props = {
  children: React.ReactNode;
  className?: string
  rest?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

export function ButtonFlutuante({ children, className, ...rest }: Props) {
  return (
    <button
      className={className}
      {...rest}
      onClick={() =>
        window.open(
          "https://wa.me/5514998003555?text=Gostaria%20de%20agendar%20um%20hora%CC%81rio%20ou%20consulta%20com%C2%A0a%C2%A0Dra.%C2%A0Thai%CC%81s",
          "_blank"
        )
      }
    >
      {children}
    </button>
  );
}