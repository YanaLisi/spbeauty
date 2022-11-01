import styledComponents from "styled-components";
import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import Styled from "styled-components"

const AddressBlock = Styled.div`
        border: 1px solid #e6eaee;
        border-radius: 8px;
        padding: 24px;
       `;

function Addresses() {
    return (
        <AddressBlock className='d-inline-flex flex-column justify-content-between p-4'>
            <div className="d-inline-flex flex-column gap-4">
             <div className='title'>Адреса заведений</div>
              <div className='d-inline-flex flex-column gap-4'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
                </div>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </AddressBlock>
    );
}

export default Addresses;
