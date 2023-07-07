import React from 'react';
import Board from './Board';
import Square from './Board';
import shallow from '@testing-library/react';

describe('Checking for crash',() =>{
    it('Board render without crashing',() => {
        let squares = Array(9).fill(null);
        shallow(<Board squares = {squares}/>)
    });
    it('Square render without crashing',() => {
        shallow(<Square/>)
    });
});

describe("Is board is displayed",() =>{
    
})