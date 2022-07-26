import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainContainer,
  CardContainer,
  LeftContainer,
  LeftContainerHeading,
  LeftContainerImage,
  RightContainer,
  ToolUl,
  ToolLi,
  Button,
  TextArea,
} from './styledComponents'

class Home extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onclickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onclickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onclickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    const boldLogo = isBold ? '#faff00' : '#f1f5f9'
    const italicLogo = isItalic ? '#faff00' : '#f1f5f9'
    const underlineLogo = isUnderline ? '#faff00' : '#f1f5f9'
    return (
      <MainContainer>
        <CardContainer>
          <LeftContainer>
            <LeftContainerHeading>Text Editor</LeftContainerHeading>
            <LeftContainerImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftContainer>
          <RightContainer>
            <ToolUl>
              <ToolLi>
                <Button
                  data-testid="bold"
                  colorText={boldLogo}
                  onClick={this.onclickBold}
                >
                  <VscBold size={25} />
                </Button>
              </ToolLi>
              <ToolLi>
                <Button
                  data-testid="italic"
                  colorText={italicLogo}
                  onClick={this.onclickItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </ToolLi>
              <ToolLi>
                <Button
                  data-testid="underline"
                  colorText={underlineLogo}
                  onClick={this.onclickUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ToolLi>
            </ToolUl>
            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </RightContainer>
        </CardContainer>
      </MainContainer>
    )
  }
}

export default Home
