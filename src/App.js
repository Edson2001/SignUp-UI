
import './App.css';

function App() {
  return (

    <div className="App">
      
      <div className="img">
        <img src="./1_u9E_tiaCY980rEJVePum_Q.jpeg" />
      </div>

      <div className="content">
        <h1>Ipsum?</h1>
        <p>
          O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. </p>
        <p> 
          O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, 
        </p>
        <p>
           quando uma misturou os caracteres de um texto para criar um espécime de livro.
        </p>


        <div className="signup">

          <h4>SIGN UP</h4>

          <div className="inputs">
            <input type="text" placeholder="User" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Repeat Password" />
            <button>Go</button>
            <span>Already have an account? Sign In</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
