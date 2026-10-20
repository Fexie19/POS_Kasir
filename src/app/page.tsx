import Image from "next/image";
import AppShell from "./components/layouts/AppShell";

export default function Home() {
  return (
      <AppShell>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Welcome to My App</h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            This is the home page of your application.
          </p>
        </div>
      </AppShell>
  );
}
