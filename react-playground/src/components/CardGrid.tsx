interface CardGridProps {
  children: React.ReactNode;
}

const CardGrid = ({ children }: CardGridProps) => {
  return (
    <>
      <div className="p-4 md:p-8 lg:p-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </div>
    </>
  );
};
export default CardGrid;
