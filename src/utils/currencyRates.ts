interface Currency {
    name: string;
    symbol: string;
    exchangeRates: {
        [currency: string]: number;
    };
}

export const currencies: Currency[] = [
    {
        name: 'BRL',
        symbol: 'R$',
        exchangeRates: {
            BRL: 1.00,
            USD: 0.19,
            EUR: 0.16,
            GBP: 0.14,
            CHF: 0.17,
            CNY: 1.23
        }
    },
    {
        name: 'USD',
        symbol: '$',
        exchangeRates: {
            BRL: 5.25,
            USD: 1.00,
            EUR: 0.85,
            GBP: 0.75,
            CHF: 0.92,
            CNY: 6.45
        }
    },
    {
        name: 'EUR',
        symbol: '€',
        exchangeRates: {
            BRL: 6.18,
            USD: 1.18,
            EUR: 1.00,
            GBP: 0.88,
            CHF: 1.08,
            CNY: 7.58
        }
    },
    {
        name: 'GBP',
        symbol: '£',
        exchangeRates: {
            BRL: 7.00,
            USD: 1.33,
            EUR: 1.14,
            GBP: 1.00,
            CHF: 1.23,
            CNY: 8.60
        }
    },
    {
        name: 'CHF',
        symbol: 'CHF',
        exchangeRates: {
            BRL: 5.70,
            USD: 1.09,
            EUR: 0.93,
            GBP: 0.81,
            CHF: 1.00,
            CNY: 6.99
        }
    },
    {
        name: 'CNY',
        symbol: '¥',
        exchangeRates: {
            BRL: 0.81,
            USD: 0.16,
            EUR: 0.13,
            GBP: 0.12,
            CHF: 0.14,
            CNY: 1.00
        }
    }
];