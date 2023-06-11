import { useEffect, useState } from 'react';
import './index.css';
import Cat from './components/Cat';

function App() {
  const [cat, setCat] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=54&api_key=live_ljwVqElG986A0Yc1gn7uVO3eH2xBXreb3e0AHojyezM3OsOY27uXaKx4bnQ3Io8m&has_breeds=1")
      .then((response) => {return response.json()})
      .then((data) => {setCat(data)})

      setTimeout(() => {
        setStatus(true)
      },7000)
  },[])

  console.log(cat)

  return (
    <div className="App">
      {status&&
        cat.map((item) => {
          return <img src={item.url} alt="" />
        })
      }
    </div>
  );
}

export default App;
