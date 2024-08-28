import BulbComponent from "./components/bulb-card-component";
import CardComponent from "./components/card-component";
import ImagesHandler from "./components/image-component";

import 'bootstrap/dist/css/bootstrap.min.css';
import RandomCard from "./components/rendem-component/rendem-file-component";
import TableComponent from "./components/table-component/table-class-component";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App=()=>{
  return(
    <>
   
    <RandomCard/>
    <BulbComponent/>
    <TableComponent/>
    </>
  )
}
 export default App;