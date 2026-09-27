import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0f17] px-4 text-white">
      <div className="text-center">
        <p className="mb-3 text-sm font-bold tracking-[0.3em] text-[#ccff00]">
          404 ERROR
        </p>

        <h1 className="text-6xl font-extrabold">PAGE NOT FOUND</h1>

        <p className="mt-4 text-gray-400">
          The workout or page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-[#ccff00] px-5 py-3 text-sm font-bold text-black"
        >
          GO TO WORKOUTS
        </Link>
      </div>
    </main>
  );
};

export default NotFound;