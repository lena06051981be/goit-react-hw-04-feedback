import styled from 'styled-components';

export const FeedbackList = styled.ul`
    list-style: none;
    padding: ${p => p.theme.space[0]}px;
    margin: ${p => p.theme.space[0]}px;

    display: flex;
    justify-content: center;
    gap: ${p => p.theme.space[6]}px;
`

export const FeedbackBtn = styled.button`
    cursor: pointer;
    padding: 10px 20px;
    border: none;
    border-radius: ${p => p.theme.radii.lg};

    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.darkblue};
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

    text-transform: capitalize;
    font-size: ${p => p.theme.fontSizes.l};

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.text};
    box-shadow: 1px 0px 1px rgba(255, 255, 255, 0.2);
  }
`;