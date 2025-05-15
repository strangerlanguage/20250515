import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!Promise.withResolvers) {
    Promise.withResolvers = function <T>() {
      let resolve: (value: T | PromiseLike<T>) => void = () => {};
      let reject: (reason: unknown) => void = () => {}; // Use 'unknown' instead of 'any'
      
      const promise = new Promise<T>((res, rej) => {
        resolve = res;
        reject = rej;
      });
      
      return { promise, resolve, reject };
    };
    
  }
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
