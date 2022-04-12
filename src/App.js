import { useState, useEffect } from "react";
import Card from "./components/Card"

export default function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    async function getProfiles() {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      
      console.log(data)
      setItems(data.results)
      
    }
    getProfiles()
  }, [])

  let cards = items.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    ) 
  })
  
  return (
    <div className="app">
      <h1>Character's profiles of the Rick and Morty sitcom</h1>
      {cards}
    </div>
  );
}
