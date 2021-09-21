import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Conta from './Conta';
import App from '../App';

describe('O componente de Conta ', () => {

    it('O snapshot do componente deve permanecer sempre o mesmo', () => {
        const saldo = 100;
        const { container } = render(<Conta saldo={saldo} />);

        expect(container.firstChild).toMatchSnapshot();


    });

    it('Exibir o saldo da conta como valor monetario', () => {
        render(<Conta saldo={1000} />)
        const saldo = screen.getByTestId('saldo-conta');
        expect(saldo.textContent).toBe('R$ 1000')
    })

    it('Chama a função de realizar transação, quando o botão é clicado', () => {
        const funcaoRealizarTransação = jest.fn()

        render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransação} />)

        const transacao = screen.getByLabelText('Saque');
        const valor = screen.getByTestId('valor');

        fireEvent.click(transacao, { target: { value: 'deposito' } });
        fireEvent.change(valor, { target: { value: 10 } });

        fireEvent.click(screen.getByText('Realizar operação'));

        expect(funcaoRealizarTransação).toHaveBeenCalled()
    })
})