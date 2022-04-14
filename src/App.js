import {  Routes,Route} from "react-router-dom";
import { 
  Home,
  About,
  Events,
  Contacts,
  Services,
  History,
  Error404
 } from "./Pages/page1";
const App=()=>{
  return(
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}>
      <Route path="services" element={<Services/>} />
      <Route path="history" element={<History/>} />
     </Route>
     <Route path="/events" element={<Events/>} /> 
     <Route path="/contacts" element={<Contacts/>} />
     <Route path="/*" element={<Error404/>} />
   </Routes>
  );
}
export default App