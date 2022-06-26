import React from 'react'
import {
  FooterContainer,
  FooterWrapper,
  FooterDetails
} from './FooterStyles'

function Footer() {
  return (
      <FooterContainer>
        <FooterWrapper>
          <FooterDetails>
            Built and designed by Derrick Tay.<br />
            All rights reserved. ©
          </FooterDetails>
        </FooterWrapper>
      </FooterContainer>
  )
}

export default Footer
