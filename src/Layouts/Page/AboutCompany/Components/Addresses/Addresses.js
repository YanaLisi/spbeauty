import styledComponents from "styled-components";
import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import Styled from "styled-components"

const AddressBlock = Styled.div`
        background: #;
        border: 1px solid #e6eaee;
        border-radius: 8px;
       `;

function Addresses() {
    return (
        <AddressBlock className='d-inline-flex flex-column gap-2 mt-4'>
            <div className='title'>Адреса заведений</div>
              <div className='d-inline-flex flex-column gap-4'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                <SecondaryButton>Добавить филиал</SecondaryButton>
                </div>
            </AddressBlock>
    );
}

export default Addresses;
