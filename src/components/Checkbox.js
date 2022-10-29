import styled from "styled-components";

// Checkbox component
const Checkbox = () => {
    return ( 
        <Wrapper>
        <label>
            <input 
                type="checkbox"
                name="checkbox"
            />Checkbox Component
        </label>
        </Wrapper>
     );
}
 
export default Checkbox;

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