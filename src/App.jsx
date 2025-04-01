import React from 'react'
import Header from './components/Header'
import Counter from './components/Counter'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Counter />
      </main>
      <Footer />
    </div>
  )
}

export default App