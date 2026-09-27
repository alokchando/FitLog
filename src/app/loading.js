const Loading = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0f17]">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-[#ccff00]"></div>

        <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
          Loading workouts...
        </p>
      </div>
    </main>
  );
};

export default Loading;
