import { Component } from 'react';

import SocialCardSC from './SocialCardWithStyledComponents'
import Counter from "./Counter/Counter";

import DropDown from "./DropDown/DropDown";

import ColorPicker from './ColorPicker/ColorPicker'
import colorPickerOptions from "./ColorPicker/ColorPickerOptions.json";

import ToDo from './ToDo'
import ModalCreate from './ModalCreate';
import PokemonSearch from './PokemonSearch';


export class App extends Component {

  render() {

    return (
      <>
        {/* <PokemonSearch />
        <ModalCreate>
          <h1> This 'children' content </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus expedita labore accusantium, qui quasi aspernatur repellat eius perferendis in autem eaque eos, maiores vero voluptates tempora quisquam saepe id ratione pariatur?</p>
        </ModalCreate> */}
        <ToDo />
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <Counter initialValue={10} />
        {/* <DropDown inialValue={true} />
        <SocialCardSC /> */}


      </>

    );
  };
} 
