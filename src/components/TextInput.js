import styled from "styled-components";


// Text input with label
const TextInput = () => {
    return ( 
        <Wrapper for="name">
            <input 
                type = "text"
             // value = {value}
                name = "name"
                className = "my-class"
            />Text Input Component
        </Wrapper>
     );
}
 
export default TextInput;

const Wrapper = styled.label`
    width: 30rem;
    display: flex;
    text-align: left;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.1;
    font-family: var(--font-normal-roboto);
    align-items: center;

    input {
        border-radius: 3px;
        margin-right: 0.5rem;
        border-top: 3px solid #326273;
    }
`