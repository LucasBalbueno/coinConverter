import { currencies } from '../utils/currencyRates'

export const exchangeCoin = (valueInput: number, currencyInput: string, currencyValue: string): number => {
    let result = 0;
    currencies.map((currency) => {
        if (currency.name === currencyInput) {
            const rate = currency.exchangeRates[currencyValue];
            result = valueInput * rate;
        }
    })
    return result;
}