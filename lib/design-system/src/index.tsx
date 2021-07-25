import React, { SyntheticEvent } from 'react';
import ReactDOM from 'react-dom';
import { DropDown } from './components/dropdown/DropDown';
import { IOption } from './components/dropdown/DropDown.props';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const options:Array<IOption<string>> = [{
  name: 'First',
  value: 'first',
  id: 'id-1'
},
{
  name: 'Second',
  value: 'second',
  id: 'id-2'
},
{
  name: 'Third',
  value: 'third',
  id: 'id-3'
}];

function onChangeEvent(id: string, event:SyntheticEvent){
  console.log('should fire',event , ' id for which ',id);
}


ReactDOM.render(
  <React.StrictMode>
    <DropDown label="Select Country : " options = {options} onChangeEvent={onChangeEvent}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
