import { render, screen, fireEvent } from '@testing-library/react';
import { HomeConversor } from '../index';
import { exchangeCoin } from '../../../services/exchangeService';

describe('HomeConversor component', () => {
    it ('should render with texts component', ()=> {
        render(<HomeConversor />)
        screen.getByText('Digite o valor em');
        screen.getByText('Esse é o valor em');
    })

    it ('should convert correctly', () => {
        const result = exchangeCoin(2500, 'BRL', 'USD');
        const result2 = exchangeCoin(5780, 'GBP', 'BRL');
        expect(result).toBe(461.75);
        expect(result2).toBe(41594.036)
    })

    it ('should change the value property when the input is changed', () => {
        render(<HomeConversor />);

        const input = screen.getByTestId('input-value') as HTMLInputElement;

        fireEvent.change(input, { target: { value: '3000' } });

        expect(input.value).toBe('3000');
    })

    it('should verify the response element have same value of the enchangeCoin function', () => {
        render(<HomeConversor />);
        
        const responseElement = screen.getByTestId('response-value');
        
        const input = screen.getByTestId('input-value');
        
        fireEvent.change(input, { target: { value: '3000' } });
        
        const result = exchangeCoin(3000, 'BRL', 'USD');
        
        expect(responseElement.textContent).toBe(result.toString())
    })
    
    it ('should change the currency symbol when the select is changed', () => {
        render(<HomeConversor />);
        
        const selectInput = screen.getByTestId('select-input');
        const symbolElementInput = screen.getByTestId('symbolElement-input')
        
        fireEvent.change(selectInput, { target: { value: 'CHF' }});
        expect(symbolElementInput.textContent).toBe('CHF')

        const selectResponse = screen.getByTestId('select-response');
        const symbolElementResponse = screen.getByTestId('symbolElement-response');

        fireEvent.change(selectResponse, { target: { value: 'CNY' }});
        expect(symbolElementResponse.textContent).toBe('CNY')
    })
})