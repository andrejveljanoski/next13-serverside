interface CityInfoProps {
  children: React.ReactNode;
}

const CityInfo: React.FC<CityInfoProps> = ({ children }) => {
  return <div className="p-4 w-full">{children}</div>;
};

export default CityInfo;
