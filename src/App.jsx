import recipes from './recipes.js'
import Recipe from "./components/Recipe"
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  const myrecipes = recipes.map((rec) => {
    return (
    <Recipe 
      key={rec.id}
      {...rec}
    />
  )
  })
  return (
    <>
    <Header />
    {myrecipes}
    <Footer />
     </>
  )
}

export default App
