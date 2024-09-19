import { Container } from "./style"
import Logo from '../../assets/coinLogo.png'

import { useState, ChangeEvent, useEffect, KeyboardEvent } from "react"
import { exchangeCoin } from '../../services/enchangeService'

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
        if (/[^0-9.]/.test(value)) {
            alert('Apenas números e ponto são contabilizados.');
        } else {
            if (value === '' || value === '.') {
                setValueInput(0);
            } else {
                setValueInput(parseFloat(value));
            }
        }
    }

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        const { key, currentTarget } = event;
        if (!/^[0-9.]$/.test(key) || (key === '.' && currentTarget.value.includes('.'))) {
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
                    <select value={selectInputCurrency} onChange={handleSelectInputChange}>
                        <option value="BRL">Real</option>
                        <option value="USD">Dólar</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">Libra</option>
                        <option value="CHF">Franco</option>
                        <option value="CNY">Yuan</option>
                    </select>
                </div>

                <div className="containerinput">
                <p className="symbol">BRL</p>
                    <div>
                        <input
                        className="values valueInput"
                        type="text"
                        maxLength={25}
                        defaultValue={1500}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        />
                        <div className="valueLineInput"></div>
                    </div>
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

                <div className="containerValue">
                    <p className="symbol">USD</p>
                    <div className="valueResponse">
                        <span>{valueResponse}</span>
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