import Accordion from '../UI/Accordion/Accordion';
import { optionsSort } from '../../constants/optionsSort';
import OptionsSort from '../OptionsSort/OptionsSort';

const OptionsForm = () => {
  return (
    <div>
      <Accordion label="Filtration">
        <div></div>
      </Accordion>
      <Accordion label="Sorting">
        <OptionsSort {...optionsSort} />
      </Accordion>
    </div>
  );
};

export default OptionsForm;
