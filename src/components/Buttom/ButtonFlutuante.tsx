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
          "https://api.whatsapp.com/send?phone=5514998003555&text=Estou%20querendo%20saber%20mais%20sobre%20o%20Cuidado%20Odontológico",
          "_blank"
        )
      }
    >
      {children}
    </button>
  );
}