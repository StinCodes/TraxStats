import Navbar from "./components/Navbar";
import SearchPlayer from "./components/SearchPlayer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchPlayer/>
    </div>
  );
}

//do i declare the json dummy data as an object variable in app.js file? or keep it as a separate file and import it

export default App;
