
import './App.css';
import Navbar from './components/Navbar';
import Filter from "./filter/index"
import Cards from "./cards/index"




function App() {
  return (
    <>
      <div className=" bg-gray-700">
        <Navbar />
      </div>
      <div className="container mx-auto ">
        <div className="flex gap-2 ">
         <Filter/>
          <Cards/>
        </div>
      </div>
    </>
  );
}

export default App;




