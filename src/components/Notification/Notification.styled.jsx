import styled from 'styled-components';

export const Notice = styled.p`
    text-align: center;
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.notify};
    /* color: #1184a7; */
    color: ${p => p.theme.colors.darkblue};
    /* text-shadow: 1px 1px 1px #9191919f; */
`