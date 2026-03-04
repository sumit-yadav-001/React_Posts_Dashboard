const Loader = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">

      <div className="w-full max-w-6xl px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-4 shadow-sm overflow-hidden"
            >
              <div className="h-48 rounded-xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse mb-4"></div>

              <div className="h-4 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            </div>
          ))}

        </div>

        <div className="text-center mt-12 text-gray-500 font-medium">
          Loading posts...
        </div>

      </div>

    </div>
  );
};

export default Loader;