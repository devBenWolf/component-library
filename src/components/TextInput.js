import styled from "styled-components";


// Text input with label
const TextInput = () => {
    return ( 
        <Wrapper>
        <label>
            <input 
                type = "text"
             // value = {value}
                name = "textInput"
                className = "my-class"
            />Text Input Component
            </label>
        </Wrapper>
     );
}
 
export default TextInput;

const Wrapper = styled.div`
    label {
        width: 40rem;
        display: flex;
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.1;
        font-family: var(--font-normal-roboto);
        align-items: center;
        margin-top: 2rem;
        gap: 2rem;
        }

    input {
        border-radius: 3px;
        margin-right: 0.5rem;
        border-top: 3px solid #326273;
        background-color: var(--clr-light-blue);
        color: var(--clr-white);
        font-size: 14px;
        border: none;
        letter-spacing: 1px;
    }
`