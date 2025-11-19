export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-100">
      <main className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-16 sm:px-6">
        {children}
      </main>
    </div>
  );
}
