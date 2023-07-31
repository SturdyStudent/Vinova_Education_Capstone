import { makeStyles } from '@mui/styles'
import {Theme }from '@mui/material/styles'
import caretDown from '../../../assets/icons/caretDown.svg'

export const useTransactionStyle = makeStyles( ( theme : Theme ) => ( {
    container: {
        maxWidth: 'none',
        padding: '0'
    },
    welcomePanel: {
        color: theme.palette.secondary.main,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.palette.secondary.light,
        paddingTop: '25px',
        paddingBottom: '25px',
        alignItems: 'center',
        textAlign: 'center'
    },
    welcomePanelItem: {
        textAlign: 'center'
    },
    button: {
        padding: '17px 30px',
        borderRadius: '30px',
        border: `1px solid ${ theme.palette.secondary.main }`,
        background: 'transparent',
        color: theme.palette.secondary.main,
        justifyContent: 'center',
        width: '150px'
    },
    select: {
        padding: '5px 0px',
        paddingLeft: '10px',
        paddingRight: '50px',
        borderRadius: '30px',
        border: `1px solid ${ theme.palette.secondary.main }`,
        marginLeft: '12px',
        fontSize: '18px',
        color: theme.palette.secondary.main,
        appearance: 'none',
        backgroundPosition: `calc(100% - 12px) center !important`,
        background: `url(${ caretDown }) no-repeat`,
        backgroundColor: 'transparent'
    },
    buttonHolder: {
        display: 'flex',
        color: theme.palette.secondary.main,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
        gap: '12px',
        marginTop: '32px'
    },
    navButtonHolder: {
        display: 'flex'
    },
    buttonHolder1: {
        display: 'flex',
        color: theme.palette.secondary.main,
        gap: '12px',
        justifyContent: 'center',
    },
    walletNav: {
        marginTop: '29px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 0
    },
    navButton: {
        color: theme.palette.secondary.main,
        background: 'transparent',
        textTransform: 'none'
    },
    tableCell: {
        border: 'none',
    },
    tableHead: {
        borderBottom: '1px solid black',
        color: theme.palette.secondary.main
    },
    pagination: {
        fontSize: '16px',
        margin: '40px auto',
        display: 'flex',
        width: '206px',
        gap: '19px'
    },
    paginButton: {
        color: theme.palette.secondary.main,
        fontSize: '16px',
        padding: 0
    },
    mobileTableItem: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '17px'
    }
} ) )