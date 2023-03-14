import { useEffect } from "react";

function App() {
  useEffect(()=>{
    fetch ('movies-library-production-1635.up.railway.app')
    .then(response=>{
      if (response.ok){
        return response.json();
      }throw response;
      
    }).then(data=>{
      setData(data);
    })
  },[])
  return (
    <div className="App">

    </div>
  );
}

export default App;
