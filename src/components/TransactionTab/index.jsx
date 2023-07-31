import React from 'react'
import Header from '../../components/Header/Header'
import { Container } from '@mui/material'
import { useTransactionStyle as useStyles } from './container/styles'
import Footer from '../../components/Footer/Footer'
import WelcomePanel from './container/WelcomePanel'
import Sort from './container/Sort'
import TransactionTable from './container/TransactionTable'

const transactionList = [
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Success'
  },
  {
    orderDate: '2021-07-13',
    action: 'Receive',
    amount: '343.00',
    currency: 'EUR',
    remarks: 'Pay back from Louis',
    orderStatus: 'Success'
  },
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Failed'
  },
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Success'
  },
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Success'
  },
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: 'Pay back from Louis',
    orderStatus: 'Success'
  },
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Success'
  },
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Success'
  },
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Failed'
  },
  {
    orderDate: '2021-07-13',
    action: 'Receive',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Success'
  },
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Success'
  },
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Success'
  },

]

function MyTransaction() {
  
    const classes = useStyles();

    const navButtonList = [
      'Fund', 'Securities', 'Crypto'
    ]

  return (
    <div>
        <Header/>
        <WelcomePanel/>
        <Container className={classes.container}>
          <Sort navButtonList={navButtonList} />
          <TransactionTable transactionList={transactionList} />
        </Container>
        <Footer/>
    </div>
  )
}

export default MyTransaction