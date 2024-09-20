import { Container } from "./style"
import Logo from '../../assets/coinLogo.png'

import { useState, ChangeEvent, useEffect, KeyboardEvent } from "react"
import { exchangeCoin } from '../../services/exchangeService'

export const HomeConversor = () => {
    const [ valueInput, setValueInput ] = useState(1500);
    const [ selectInputCurrency, setSelectInputCurrency ] = useState('BRL');
    const [ selectValueCurrency, setSelectValueCurrency ] = useState('USD');
    const [ valueResponse, setValueResponse ] = useState<number>();

    useEffect(()=> {
        const result = exchangeCoin(valueInput, selectInputCurrency, selectValueCurrency)
        setValueResponse(parseFloat(result.toFixed(2)));
    }, [valueInput, selectInputCurrency, selectValueCurrency])

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (value === '' || value === '.') {
            setValueInput(0);
        } else {
            setValueInput(parseFloat(value));
        }
    }

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        const { key } = event;
        if (!/^[0-9,.]$/.test(key)) {
            event.preventDefault();
        }
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
                    <select data-testid="select-input" value={selectInputCurrency} onChange={handleSelectInputChange}>
                        <option value="BRL">Real</option>
                        <option value="USD">Dólar</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">Libra</option>
                        <option value="CHF">Franco</option>
                        <option value="CNY">Yuan</option>
                    </select>
                </div>

                <div className="containerinput">
                    <p data-testid="symbolElement-input" className="symbol">{selectInputCurrency}</p>
                    <div>
                        <input
                        className="values valueInput"
                        type="number"
                        defaultValue={1500}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        data-testid="input-value"
                        />
                        <div className="valueLineInput"></div>
                    </div>
                </div>
            </div>
            <div className="pages page2">
                <div className="containerSelect select2">
                    <p>Esse é o valor em</p>
                    <select data-testid="select-response" value={selectValueCurrency} onChange={handleSelectValueChange}>
                        <option value="BRL">Real</option>
                        <option value="USD">Dólar</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">Libra</option>
                        <option value="CHF">Franco</option>
                        <option value="CNY">Yuan</option>
                    </select>
                </div>

                <div className="containerValue">
                    <p data-testid="symbolElement-response" className="symbol">{selectValueCurrency}</p>
                    <div className="valueResponse">
                        <span data-testid="response-value">{valueResponse}</span>
                        <div className="valueLineResponse"></div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <h1>Desenvolvido por Lucas Balbueno</h1>
            </div>
        </Container>
    )
}