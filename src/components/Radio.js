import styled from "styled-components";

const Radio = () => {
    return ( 
        <Wrapper>
            <label>
                <input 
                    type="radio"
                />Radio Component
            </label>
        </Wrapper>
     );
}
 
export default Radio;

const Wrapper = styled.div`
    label {
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.1;
        display: flex;
        gap: 2rem;
        width: 40rem;
        text-align: left;
        margin-top: 2rem;
        font-family: var(--font-normal-roboto);
        align-items: center;
    }

    input {
        accent-color: var(--clr-light-blue);
        transform: scale(1.2);
        width: 2rem;
        margin: 0;
    }

`