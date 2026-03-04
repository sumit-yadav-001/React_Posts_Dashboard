const EmptyState = () => {
  return (
    <div className="text-center py-24">
      <h2 className="text-2xl font-semibold text-gray-600">
        No Posts Available
      </h2>
      <p className="text-gray-400 mt-3">
        All posts have been removed.
      </p>
    </div>
  );
};

export default EmptyState;