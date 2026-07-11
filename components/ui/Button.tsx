type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-600">
      {children}
    </button>
  );
}