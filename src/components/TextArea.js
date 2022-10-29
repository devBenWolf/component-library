import styled from "styled-components";

const TextArea = () => {
    return ( 
        <Wrapper>
            <label>
                <textarea name="textArea"></textarea>Textarea Component
            </label>
        </Wrapper>
     );
}
 
export default TextArea;

const Wrapper = styled.div`
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.1;
    font-family: var(--font-normal-roboto);

    label {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    textarea {
        background-color: var(--clr-light-blue);
        border: none;
        color: white;
        letter-spacing: 1px;
        border-radius: 3px;
        margin-right: 0.5rem;
    }


`