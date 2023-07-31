import { makeStyles } from '@mui/styles'
import caretDown from '../../../assets/img/CaretDown.png'

export const useTransactionStyle = makeStyles( ( theme ) => ( {
    container: {
        maxWidth: 'none',
        [ theme.breakpoints.down( 'md' ) ]: {
            padding: '0 30px'
        },
        [ theme.breakpoints.up( 'md' ) ]: {
            padding: '0 60px'
        },
        [ theme.breakpoints.up( 'lg' ) ]: {
            padding: '0 171px'
        },
        [ theme.breakpoints.up( 'xl' ) ]: {
            padding: '0 171px'
        }
    },
    welcomePanel: {
        color: theme.palette.primary.blue,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.primary.gold,
        paddingTop: '25px',
        paddingBottom: '25px',
        alignItems: 'center',
        [ theme.breakpoints.down( 'md' ) ]: {
            textAlign: 'center'
        },
    },
    welcomePanelItem: {
        textAlign: 'left',
        [ theme.breakpoints.down( 'md' ) ]: {
            textAlign: 'center'
        },
    },
    button: {
        padding: '17px 30px',
        borderRadius: '30px',
        border: `1px solid ${ theme.palette.primary.blue }`,
        background: 'transparent',
        marginLeft: '12px',
        color: theme.palette.primary.blue,
        [ theme.breakpoints.down( 'md' ) ]: {
            justifyContent: 'center',
            width: '174px'
        },
    },
    select: {
        padding: '5px 0px',
        paddingLeft: '10px',
        paddingRight: '50px',
        borderRadius: '30px',
        border: `1px solid ${ theme.palette.primary.blue }`,
        marginLeft: '12px',
        fontSize: '18px',
        color: theme.palette.primary.blue,
        appearance: 'none',
        backgroundPosition: `calc(100% - 12px) center !important`,
        background: `url(${ caretDown }) no-repeat`,
        backgroundColor: 'transparent'
    },
    buttonHolder: {
        display: 'flex',
        color: theme.palette.primary.blue,
        justifyContent: 'right',
        [ theme.breakpoints.down( 'md' ) ]: {
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            marginTop: '32px'
        },
    },
    navButtonHolder: {
        display: 'flex'
    },
    buttonHolder1: {
        display: 'flex',
        color: theme.palette.primary.blue,
        justifyContent: 'right',
        [ theme.breakpoints.down( 'md' ) ]: {
            justifyContent: 'center',
        },
    },
    walletNav: {
        marginTop: '29px',
        display: 'flex',
        justifyContent: 'space-between',
        [ theme.breakpoints.down( 'md' ) ]: {
            flexDirection: 'column',
            justifyContent: 'center',
        },
    },
    navButton: {
        color: theme.palette.primary.blue,
        background: 'transparent',
        textTransform: 'none'
    },
    tableCell: {
        border: 'none',
    },
    tableHead: {
        borderBottom: '1px solid black',
        color: theme.palette.primary.blue
    },
    pagination: {
        fontSize: '16px',
        margin: '40px auto',
        display: 'flex',
        width: '206px',
        gap: '19px'
    },
    paginButton: {
        color: theme.palette.primary.blue,
        fontSize: '16px',
        padding: 0
    },
    mobileTableItem: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '17px'
    }
} ) )