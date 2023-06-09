import styled from "styled-components";

export const List = styled.ul`
list-style: none;
margin: 0 auto;
width: 250px;
display:flex;
flex-direction: column;
gap: 30px;
padding: 0;
`;

export const Item = styled.li`
margin: 0;
display: flex;
height: auto;
width: 100%;
background-color: #ffffff;
border-radius: 6px;
padding:10px;
align-items: center;
gap: 20px;
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`;

export const Status = styled.span`
display: block;
width: 15px;
height: 15px;
border: 1px solid black;
border-radius: 50%;
background-color: ${props =>{
    return props.isOnline ? 'green' : 'red';
}};
`;

export const Name = styled.p`
font-size: 30px;
font-weight: 600;
margin: 0;
`;