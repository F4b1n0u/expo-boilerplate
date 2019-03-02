import React, { PureComponent } from 'react'
import { AppLoading } from 'expo'
import styled from 'styled-components'

export default class AppComponent extends PureComponent {
  componentDidMount() {
    const {
      startLoading,
    } = this.props

    // simulate assets loading
    setTimeout(startLoading, 1000)
  }

  render() {
    const {
      isLoaded,
    } = this.props

    return isLoaded ? (
      <Container>
        <WelcomeText>
          {'Welcome to React Native!'}
        </WelcomeText>
        <InstructionsText>
          {'This is a React Native snapshot test.'}
        </InstructionsText>
      </Container>
    ) : (
      <AppLoading />
    )
  }
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
`

const WelcomeText = styled.Text`
  font-size: 20;
  margin-vertical: 10;
  margin-horizontal: 10;
  text-align: center;
`

const InstructionsText = styled.Text`
  color: #333333;
  margin-bottom: 5;
  text-align: center;
`
