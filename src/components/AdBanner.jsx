const AdBanner = ({ size = 'banner', className = '' }) => {
  const sizeClasses = {
    banner: 'h-24 w-full',
    sidebar: 'h-64 w-full',
    square: 'h-64 w-64',
  };

  return (
    <div className={`${sizeClasses[size]} ${className} bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center`}>
      <div className="text-center text-gray-500">
        <div className="text-sm font-medium">Advertisement</div>
        <div className="text-xs mt-1">{size} placement</div>
      </div>
    </div>
  );
};

export default AdBanner;

