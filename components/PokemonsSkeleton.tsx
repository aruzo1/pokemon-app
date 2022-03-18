const PokemonsSkeleton = () => {
  return (
    <>
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} className="flex flex-col p-8 rounded-lg bg-gray-800">
          <div className="aspect-square mb-4 rounded-lg bg-gray-700 animate-pulse"></div>
          <div>
            <h3 className="mb-2 w-1/4 h-[28px] rounded-lg bg-gray-700 animate-pulse"></h3>
            <h2 className="mb-4 w-3/4 h-8 rounded-lg bg-gray-700 animate-pulse"></h2>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="h-10 rounded-lg bg-gray-700 animate-pulse"></div>
              <div className="h-10 rounded-lg bg-gray-700 animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PokemonsSkeleton;
