import React from 'react';
import { render } from '@testing-library/react';
import Conta from './Conta'

describe('O componente de saldo ', () => {

    it('O snapshot do componente deve permanecer sempre o mesmo', () => {
        const saldo = 100;
        const { container } = render(<Conta saldo={saldo} />);

        expect(container.firstChild).toMatchSnapshot();
    })
})