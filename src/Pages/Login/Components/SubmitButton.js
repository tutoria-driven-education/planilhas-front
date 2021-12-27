import styled from "styled-components";

const SubmitBtn = styled.button`
    width: 115px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin: 10px 0;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #f5508e;
    transition: filter 0.1s ease;
    &:hover {
    cursor: pointer;
    filter: brightness(0.85);
    }
    &:focus {
    outline: 3px solid #dddbe6;
    }
`;

export default SubmitBtn;