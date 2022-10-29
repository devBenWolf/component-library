import styled from "styled-components";

const SelectMenu = () => {
    return ( 
        <Wrapper>
        <label className="input-label">
            <select name="selectMenu">
                <option value="atka">Atka</option>
                <option value="yakone">Yakone</option>
            </select>
            Select Component
        </label>
        </Wrapper>
     );
}
 
export default SelectMenu;

const Wrapper = styled.div`
    display: flex;
    width: 30rem;
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1.1;
    margin-top: 1rem;
    font-family: var(--font-normal-roboto);


    select {
        border: none;
        background-color: var(--clr-light-blue);
        width: fit-content;
        font-size: 1.2rem;
        border-radius: 3px;
        margin-right: 0.5rem;
        color: var(--clr-white);
        letter-spacing: 1px;
    }

    label {
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.1;
        display: flex;        
        gap: 3rem;
        margin-top: 2rem;
        font-family: var(--font-normal-roboto);
        
    }
`