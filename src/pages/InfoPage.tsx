import { useParams } from 'react-router-dom';

const InfoPage = () => {
  const { name } = useParams();

  return <div>{name}</div>;
};

export default InfoPage;
