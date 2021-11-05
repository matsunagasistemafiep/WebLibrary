import {Link} from 'react-router-dom';
import "./style.css";

export default function Loja(){
    return(
        <div>
            <img className="intro" src="https://github.com/LucasFernandes0101/webbiblioteca/blob/main/tela-loja.png?raw=true"/>
            <Link className="botaoVoltar" to="/"/>
            <input className="txtBusca" type="text" placeholder="Buscar..."/>
            <button className="botaoBusca"/>
            <button className="botaoCarrinho"/>
            <button className="botaoFavoritos"/>
            <select className="selectOrdem" >
                <option>Relevância</option>
                <option>Mais Vendidos</option>
                <option>Mais Bem Avaliados</option>
                <option>Lançamento</option>
                <option>Maior Preço</option>
                <option>Menos Preço</option>
            </select>
            <input className="filtroEpico" type="checkbox"/>
            <input className="filtroCronica" type="checkbox"/>
            <input className="filtroMonitor" type="checkbox"/>
            <input className="filtroRevistas" type="checkbox"/>
            <input className="filtroJornal" type="checkbox"/>
            <Link className="botaoTablet" to="/Detalhes/Tablet"/>
            <Link className="botaoNotebook" to="/Detalhes/Notebook"/>
            <Link className="botaoProjetor" to="/Detalhes/Projetor"/>
        </div>
    );
}