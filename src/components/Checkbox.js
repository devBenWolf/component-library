import styled from "styled-components";

// Checkbox component
const Checkbox = () => {
    return ( 
        <Wrapper for="name">
        <label className="input-label">
            <input 
                type="checkbox"
                name="checkbox"
            //  value={value}
            className = "my-class"
            />Checkbox Component
        </label>
        </Wrapper>
     );
}
 
export default Checkbox;

const Wrapper = styled.div`
    .input-label {
        font-family: system-ui, sans-serif;
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.1;
        display: grid;
        grid-template-columns: 1em auto;
        gap: 2em;
        width: 40rem;
        text-align: left;
        margin-top: 2rem;
        font-family: var(--font-normal-roboto);
        align-items: center;
    }

    input {
        accent-color: #326273;
        transform: scale(1.2);
        width: 2rem;
        margin: 0;

    }   


`