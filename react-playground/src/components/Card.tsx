interface CardProps {
  title: string;
  description: string;
  points: number;
}

const Card = ({ title, description, points }: CardProps) => {
  return (
    <>
      <div className="flex flex-col gap-2 p-7 rounded-2xl bg-gray-300 h-48">
        <div>
          <div className="flex text-2xl font-bold text-left text-gray-800">{title}</div>
          <div className="flex italic text-left text-gray-500">{points}</div>
        </div>
        <hr className="w-full h-1 bg-gradient-to-r from-orange-300 to-red-500 border-0"></hr>
        <div className="">{description}</div>
      </div>
    </>
  );
};

export default Card;
