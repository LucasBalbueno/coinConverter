import { Container } from "./style"

import Logo from '../../../assets/coinLogo.png'

export const HomeConversor = () => {
    return (
        <Container>
            <div className="title">
                <img src={Logo} alt="Logo Conversor" />
                <h1>Conversor de Moedas</h1>
            </div>
            <div className="pages page1">
                <div className="containerSelect select1">
                    <p>Digite o valor em</p>
                    <select>
                        <option value="BRL">Real</option>
                        <option value="USD">Dólar</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">Libra</option>
                        <option value="CHF">Franco</option>
                        <option value="CNY">Yuan</option>
                    </select>
                </div>

                <div>
                    <input className="values valueInput" type="number" defaultValue={1500}/>
                    <div className="valueLineInput"></div>
                </div>
            </div>
            <div className="pages page2">
                <div className="containerSelect select2">
                    <p>Esse é o valor em</p>
                    <select>
                        <option value="BRL">Real</option>
                        <option value="USD">Dólar</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">Libra</option>
                        <option value="CHF">Franco</option>
                        <option value="CNY">Yuan</option>
                    </select>
                </div>

                <div className="valueResponse">
                    <span>282,49</span>
                    <div className="valueLineResponse"></div>
                </div>
            </div>
            <div className="footer">
                <h1>Desenvolvido por Lucas Balbueno</h1>
            </div>
        </Container>
    )
}