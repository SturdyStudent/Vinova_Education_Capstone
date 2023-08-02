import { makeStyles } from '@mui/styles'
import {Theme} from '@mui/material/styles'

export const useDashboardStyles = makeStyles( ( theme : Theme )  => ({
    container: {
        maxWidth: 'none',
    },
    welcomePanel: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: '51px 30px',
        flexDirection: 'row',
        backgroundColor: '#F9F3ED',
        [ theme?.breakpoints?.down( 'md' ) ]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '27px'
        },
    },
    functionNav: {
        borderRadius: '30px !important',
        background: 'transparent',
        padding: '14px 28px !important',
        border: `1px solid #1F3684 !important`,
        fontSize: '14px',
        textTransform: 'none',
        color: '#1F3684',
        width: '100% !important',
        maxWidth: '250px',
    },
    functionNavHolder: {
        color: '#1F3684',
        textAlign: 'center'
    },
    gridContainer: {
        boxSizing: 'border-box',
        flexDirection: 'row',
        width: '100%',
        gap: '0px',
    },
    walletTitle: {
        fontSize: '25px',
        color: '#1F3684'
    },
    walletNav: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#1F3684',
        margin: '50px 0px 30px 0px',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0px',
        [theme.breakpoints.up('md')]: {
            margin: '50px 30px 30px 30px',

        }
    },
    walletHolder: {
        display: 'flex',
        borderTop: 'solid black 1px',
        borderBottom: 'solid black 1px',
        flexDirection: 'row',
        [ theme?.breakpoints.down( 'md' ) ]: {
            flexDirection: 'column',
        },
    },
    walletDetail: {
        width: '50%',
        textAlign: 'center',
        color: '#1F3684',
        padding: '37px 0',
        maxWidth: 'none',
        background: "#f5f5f5",
        [ theme?.breakpoints.down( 'md' ) ]: {
            width: '100%',
        },
    },

    tableHead: {
        borderBottom: '1px solid black',
        color:'#1F3684'
    },
    loginInfo: {
        textAlign: 'right',
        [ theme?.breakpoints.down( 'md' ) ]: {
            textAlign: 'left'
        }
    },
    mobileTableItem: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '17px'
    }
}))


  