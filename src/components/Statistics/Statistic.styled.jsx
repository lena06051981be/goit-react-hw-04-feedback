import styled from 'styled-components';

export const StatisticsList = styled.ul`
    list-style: none;
    padding: ${p => p.theme.space[0]}px;
    margin: 0 0 0 40px;

    text-align: start;
    text-transform: capitalize;
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.semibold};
    color: ${p => p.theme.colors.darkblue};
    /* text-shadow: 1px 1px 1px #f7f7f79f; */

    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.space[2]}px;
`