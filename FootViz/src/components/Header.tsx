import * as React from 'react';
import styled from 'styled-components';

const HeaderT = styled.div`
    display: table;
    height: 40px;
    width: 100%;
    position: relative;
    overflow: hidden
    `;

const HeaderC = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 40px;
    background-color: black;
    text-align: center;
    color:white
    `;

export const Header = () => {
    return (
        <HeaderT>
            <HeaderC>
                COM 480 - Player Visualization
            </HeaderC>
        </HeaderT>
    )
}
