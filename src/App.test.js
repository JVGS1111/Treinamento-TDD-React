import React from 'react';
import { render, screen } from '@testing-library/react'
import App from './App'

describe('componente principal', () => {
    describe('Quando eu abro o app do banco', () => {
        it('o nome é exibido', () => {
            render(<App />);
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        })

        it('o saldo é exibido', () => {
            render(<App />);
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        })

        it('o botao de Realizar operação é exibido', () => {
            render(<App />);
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        })
    })

})



