import React from 'react';
import { render } from '@testing-library/react'
import Transacoes from './Transacoes'

describe('Sobre a lista de transacoes', () => {

    it('O componente exibido corresponde ao seu snapshot', () => {


        const { container } = render(<Transacoes />)

        expect(container.firstChild).toMatchSnapshot();

    })
})