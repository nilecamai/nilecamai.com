import React from 'react'
import Header from './Header'
import Footer from './Footer'

import {Container} from 'react-bootstrap'

export default function Layout(props){
  return (
    <>
      <Header />
        <Container className="p-0" fluid={true}>
          {props.children}
        </Container>
      <Footer />
    </>
  )
}