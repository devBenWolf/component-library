import styled from "styled-components";

const SelectMenu = () => {
    return ( 
        <Wrapper>
        <label for="dogs">
            <select name="dogs">
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
    width: 20rem;
    color: var(--clr-black);
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1.1;
    margin-top: 1rem;
    font-family: var(--font-normal-roboto);

    select {
        border: none;
        background-color: var(--clr-medium-sapphire);
        color: var(--clr-white);
        width: 5rem;
        font-size: 1.1rem;
        box-shadow: 4px 3px 8px 1px;
        border-radius: 3px;
        margin-right: 0.5rem;
    }

`