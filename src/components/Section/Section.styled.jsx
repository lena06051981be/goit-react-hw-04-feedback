import styled from 'styled-components';

export const SectionStyle = styled.section`
    margin: 0 auto;
    margin-top: 40px;
    padding: 40px 10px;
    min-width: 340px;
    max-width: 420px;
    
    border-radius: ${p => p.theme.radii.lg};
    border: 1px solid darkcyan;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
    
    background-color: ${p => p.theme.colors.bgcolor};
    
    text-align: center;
`
export const SectionTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 25px;
    
    color: ${p => p.theme.colors.white};
    text-shadow: 2px 2px 2px darkblue;;

    font-size: 35px;
`