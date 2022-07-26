import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #25262c;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  background-color: #1b1c22;
  height: 80vh;
  padding: 15px;
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
`

export const LeftContainerHeading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 34px;
  font-weight: 500;
`

export const LeftContainerImage = styled.img`
  height: 70%;
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #25262c;
  border-radius: 10px;
  border: 2px solid #334155;
  height: 100%;
  width: 50%;
`

export const ToolUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`

export const ToolLi = styled.li`
  display: flex;
`

export const Button = styled.button`
  background-color: transparent;
  color: ${props => props.colorText};
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 5px;
`

export const TextArea = styled.textarea`
  background-color: #25262c;
  border-top: 2px solid #334155;
  height: 100%;
  width: 100%;
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 20px;
  padding: 20px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  border: none;
  outline: none;
`
