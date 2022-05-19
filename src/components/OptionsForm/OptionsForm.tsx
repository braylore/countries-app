import Accrodion from '../UI/Accordion/Accordion';
import { optionsSort } from '../../constants/optionsSort';
import OptionsSort from '../OptionsSort/OptionsSort';

const OptionsForm = () => {
  return (
    <div>
      <Accrodion label="Filtration">
        <div></div>
      </Accrodion>
      <Accrodion label="Sorting">
        <OptionsSort {...optionsSort} />
      </Accrodion>
    </div>
  );
};

export default OptionsForm;
