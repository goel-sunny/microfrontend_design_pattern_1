import React, { SyntheticEvent } from 'react';
import ReactDOM from 'react-dom';
import { DropDown } from './components/dropdown/DropDown';
import { IOption } from './components/dropdown/DropDown.props';
import ImageSlider from './components/image-slider/ImageSlider';
import { Pagination } from './components/pagination/Pagination';
import { Table } from './components/table/Table';
import { TableColumn } from './components/table/table-column/TableColumn';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const paginationRef = React.createRef();

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

const rowData = [
  {
    name: 'Sunny Goel',
    sex: 'male',
    occupation: 'Private'
  },
  {
    name: 'Ankit Goel',
    sex: 'male',
    occupation: 'private'
  },
  {
    name: 'Aman Goel',
    sex: 'male',
    occupation: 'Bussiness'
  }, 
]

// function Name(props: any){
//   return <div>{props.name}</div>;
// }

const imageSliderData = [
  {
    id: 'uuid-1',
    imgUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    meta: ''
  },
  {
    id: 'uuid-2',
    imgUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    meta: ''
  },
  {
    id: 'uuid-3',
    imgUrl: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    meta: ''
  },
  {
    id: 'uuid-4',
    imgUrl: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    meta: ''
  },
]

ReactDOM.render(
  <React.StrictMode>
    <section className="components">
      {/* <div className="components__dropdown">
       <DropDown label="Select Country : " options = {options} onChangeEvent={onChangeEvent}/>
     </div> */}
      {/* <div className="components__table">
        <Table rowData={rowData}>
            <TableColumn label="Name" field="name" width="200px">
                <div data-header>Name</div>
                <Name type={'column-data'}/>
            </TableColumn>
            <TableColumn label="Sex" field="sex" width="200px"></TableColumn>
            <TableColumn label="Occupation" field="occupation" width="200px"></TableColumn>
        </Table>
      </div> */}
      {/* <div className="components__imageSlider">
        <ImageSlider data={imageSliderData}/>
      </div> */}
      <div className="components__pagination">
        <Pagination totalCount={89} size={10} ref={paginationRef}/>
      </div>
     </section>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
