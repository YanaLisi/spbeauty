import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    background-color: #F8FAFC;
    color: #152842;
    &:hover {
        background-color: #F8FAFCB8;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === HTMLTableCaptionElement ? 
        (<div></div>) : 
        (<div>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='p-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;