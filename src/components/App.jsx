import SocialCardSC from './SocialCardWithStyledComponents'
import Counter from "./Counter/Counter";

import DropDown from "./DropDown/DropDown";

import ColorPicker from './ColorPicker/ColorPicker'
import colorPickerOptions from "./ColorPicker/ColorPickerOptions.json";

export const App = () => {
  return (
    <>
      <SocialCardSC/>
      <DropDown inialValue={true} />
      <Counter initialValue={10} />
      <ColorPicker options = {colorPickerOptions}/>
    </>

  );
};
