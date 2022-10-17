import styled from "styled-components";

const CustomCheckbox = () => {
    return ( 
        <Wrapper for="name">
        <label className="input-label">
            <input 
                type="checkbox"
                name="name"
            />Custom Checkbox Component
            </label>
        </Wrapper>
     );
}
 
export default CustomCheckbox;

const Wrapper = styled.div`

    .input-label {
        width: 40rem;
        font-family: system-ui, sans-serif;
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.1;
        display: grid;
        grid-template-columns: 1em auto;
        gap: 2em;
        text-align: left;
        margin-top: 2em;
        font-family: var(--font-normal-roboto);
        align-items: center;
        }

    input[type="checkbox"] {
        appearance: none;
        /* For iOS < 15 to remove gradient background */
        background-color: #fff;
        /* Not removed via appearance */
        margin: 0;
        font: inherit;
        color: currentColor;
        width: 2rem;
        height: 2rem;
        border: 2px solid #326273;
        border-radius: 3px;
        transform: translateY(-0.075em);
        display: grid;
        place-content: center;
    }

    input[type="checkbox"]::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em #326273;
        background-color: CanvasText;

        /******* checkmark *******/
        transform-origin: bottom left;

        /* https://bennettfeely.com/clippy/ */
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
     }

    input[type="checkbox"]:checked::before {
        transform: scale(1);
    }

    input[type="checkbox"]:focus {
        outline: max(2px, 0.15em) solid lightpurple;
        outline-offset: max(2px, 0.15em);
    }

    /* Styles for disabled input */
    input[type="checkbox"]:disabled {
        border: 0.15em solid grey;
        cursor: not-allowed
    }


    .input-label-disabled {
        color: grey;
        cursor: not-allowed;
        display: flex;
        width: 20rem;
        font-family: system-ui, sans-serif;
        font-size: 1.2rem;
        font-weight: bold;
        line-height: 1.1;
        display: grid;
        grid-template-columns: 1em auto;
        gap: 0.5em;
        text-align: left;
        margin-top: 1em;
    }
`