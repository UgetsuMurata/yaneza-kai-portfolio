import { useState } from "react";
import NavigationDisplay from "./component/NavigationDisplay";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="font-content w-full h-screen relative bg-primary-dark-900 overflow-hidden">
      {/* NAVIGATION ICONS */}
      <div className="absolute inset-0 z-20">
        <NavigationDisplay state={currentPage} setState={setCurrentPage}/>
      </div>

      {/* CONTENT */}
      <ContentManager/>

      {/* BACKGROUND */}
      <div className="z-0 absolute inset-0">
        <div className="absolute inset-0 backdrop-blur-sm z-10" />
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-4/5 aspect-square outline-primary outline-[100px] rounded-full bg-transparent z-0" />
      </div>
    </div>
  );
}

function ContentManager() {
  return (
    <div>
      
    </div>
  );
}

export default App;
