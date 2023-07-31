import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import TitlePanel from './container/TitlePanel'
import FormSendFund from './container/FormSendFund'

export default function SendFund() {
  return (
    <div>
        <Header/>
        <TitlePanel/>
        <FormSendFund/>
        <Footer/>
    </div>
  )
}
