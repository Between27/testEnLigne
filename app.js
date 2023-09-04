
const test = document.querySelector('.test')
const reactd = ReactDOM.createRoot(test)


function Welcome ({DIO}) {
    return <div>
    <h1>Bonjour {DIO}</h1>
  
    </div>
}

reactd.render(<Welcome DIO = "You are"> STANDO POWER </Welcome>)