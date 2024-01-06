import './App.css'
import MyCard from './page/components/MyCard'

function App() {

  const mystyle = {
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <>
      <h1 style={mystyle}>Challenges</h1>
      <section style={mystyle}>
        <MyCard route="/result" />
        <MyCard route="/rating" />
        <MyCard route="/newsletter" />
        <MyCard route="/faq" />
        <MyCard route="/blog-card" />
        <MyCard route="/product-preview" />
        <MyCard route="/interactive-card" />
        <MyCard route="/intro-section" />
      </section>
    </>
  )
}

export default App
