const DescriptionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={`w-full py-5 mx-auto text-2xl font-bold text-center sm:text-3xl ${className}`}>
      {children}
    </h2>
  );
};

export default DescriptionTitle;
