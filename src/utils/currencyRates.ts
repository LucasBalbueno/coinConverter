interface Currency {
    name: string;
    exchangeRates: {
        [currency: string]: number;
    };
}

export const currencies: Currency[] = [
    {
        name: 'BRL',
        exchangeRates: {
            BRL: 1.0000,
            USD: 0.1847,
            EUR: 0.1657,
            GBP: 0.1391,
            CHF: 0.1566,
            CNY: 1.3055
        }
    },
    {
        name: 'USD',
        exchangeRates: {
            BRL: 5.4141,
            USD: 1.0000,
            EUR: 0.8965,
            GBP: 0.7527,
            CHF: 0.8479,
            CNY: 7.0679
        }
    },
    {
        name: 'EUR',
        exchangeRates: {
            BRL: 6.0419,
            USD: 1.1156,
            EUR: 1.0000,
            GBP: 0.8396,
            CHF: 1.9458,
            CNY: 7.8848
        }
    },
    {
        name: 'GBP',
        exchangeRates: {
            BRL: 7.1962,
            USD: 1.3285,
            EUR: 1.1910,
            GBP: 1.0000,
            CHF: 1.1265,
            CNY: 9.3900
        }
    },
    {
        name: 'CHF',
        exchangeRates: {
            BRL: 6.3889,
            USD: 1.1797,
            EUR: 1.0573,
            GBP: 0.8877,
            CHF: 1.0000,
            CNY: 8.3377
        }
    },
    {
        name: 'CNY',
        exchangeRates: {
            BRL: 0.7665,
            USD: 0.1415,
            EUR: 0.1268,
            GBP: 0.1065,
            CHF: 0.1200,
            CNY: 1.0000
        }
    }
];