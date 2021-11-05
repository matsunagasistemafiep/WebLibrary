import {Link} from 'react-router-dom';
import "./style.css"

export default function Login(){
    return(
        <div>
            <img className="intro" src="https://github.com/LucasFernandes0101/webbiblioteca/blob/main/tela-login.jpeg?raw=true"/>
            <Link className="botaoLogar" to="/Loja"/>
            <input type="text" name="cpf" 
            pattern="\d{3}.?\d{3}.?\d{3}-?\d{2})|(\d{2}.?\d{3}.?\d{3}/?\d{4}-?\d{2}"
            maxLength="14" className="txtCpf" placeholder="Insira seu cpf..."/>
            <input type="text"  className="txtEmail" placeholder="exemplo@email.com"/>
            <input type="password" className="txtSenha" placeholder="Insira sua senha..."/>

        </div>
    );
}