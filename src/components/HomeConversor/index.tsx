import { Container } from "./style"
import Logo from '../../assets/coinLogo.png'

import { useState, ChangeEvent, useEffect } from "react"
import { exchangeCoin } from '../../services/enchangeService'

export const HomeConversor = () => {
    const [ valueInput, setValueInput ] = useState(1500);
    const [ selectInputCurrency, setSelectInputCurrency ] = useState('BRL');
    const [ selectValueCurrency, setSelectValueCurrency ] = useState('USD');
    const [ valueResponse, setValueResponse ] = useState<number>();

    useEffect(()=> {
        const result = exchangeCoin(valueInput, selectInputCurrency, selectValueCurrency)
        setValueResponse(result);
    }, [valueInput, selectInputCurrency, selectValueCurrency])

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValueInput(Number(event.target.value));
    }

    const handleSelectInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectInputCurrency(event.target.value)
    }

    const handleSelectValueChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectValueCurrency(event.target.value)
    }

    return (
        <Container>
            <div className="title">
                <img src={Logo} alt="Logo Conversor" />
                <h1>Conversor de Moedas</h1>
            </div>
            <div className="pages page1">
                <div className="containerSelect select1">
                    <p>Digite o valor em</p>
                    <select value={selectInputCurrency} onChange={handleSelectInputChange}>
                        <option value="BRL">Real</option>
                        <option value="USD">Dólar</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">Libra</option>
                        <option value="CHF">Franco</option>
                        <option value="CNY">Yuan</option>
                    </select>
                </div>

                <div>
                    <input
                    className="values valueInput"
                    type="number"
                    defaultValue={1500}
                    onChange={handleInputChange}
                    />
                    <div className="valueLineInput"></div>
                </div>
            </div>
            <div className="pages page2">
                <div className="containerSelect select2">
                    <p>Esse é o valor em</p>
                    <select value={selectValueCurrency} onChange={handleSelectValueChange}>
                        <option value="BRL">Real</option>
                        <option value="USD">Dólar</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">Libra</option>
                        <option value="CHF">Franco</option>
                        <option value="CNY">Yuan</option>
                    </select>
                </div>

                <div className="valueResponse">
                    <span>{valueResponse}</span>
                    <div className="valueLineResponse"></div>
                </div>
            </div>
            <div className="footer">
                <h1>Desenvolvido por Lucas Balbueno</h1>
            </div>
        </Container>
    )
}