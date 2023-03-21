import BarChart from './BarChartComponent';
import Wrapper from '../assets/wrappers/ChartsContainer';
import { useSelector } from 'react-redux';

const ChartsContainer = () => {
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <BarChart data={data} />
    </Wrapper>
  );
};
export default ChartsContainer;
