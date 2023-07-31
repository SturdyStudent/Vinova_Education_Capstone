import { makeStyles } from '@mui/styles'
import {Theme} from '@mui/material/styles'
import caretDown from '../../../assets/icons/caretDown.svg'
export const useSendFundStyle = makeStyles( ( theme: Theme ) => ( {
    container: {
        maxWidth: 'none',
        padding: '0 30px'
    },
    titlePanel: {
        background: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        paddingTop: '23px',
        paddingBottom: '23px',
        textAlign: 'left'
    },
    inputRow: {
        display: 'flex',
        flexDirection: 'column'
    },
    inputItem: {
        boxSizing: 'border-box',
        width: '100%',
        paddingLeft: '0 !important',
        paddingRight: '0 !important'
    },
    inputItem2: {
        boxSizing: 'border-box',
        width: '100%',
        paddingLeft: '0 !important',
        paddingRight: '0 !important'
    },
    select: {
        width: '100%',
        backgroundColor: '#F5F5F5',
        padding: '13px 0 9px 15px',
        border: 'none',
        appearance: 'none',
        backgroundPosition: `calc(100% - 12px) center !important`,
        background: `url(${ caretDown }) no-repeat`,
        borderBottom: `${ theme.palette.secondary.main } 2px solid`,
    },
    input: {
        width: '100%',
        background: '#F5F5F5',
        padding: '4px 0 3px 15px',
        border: 'none',
        borderBottom: `${ theme.palette.secondary.main } 1.5px solid`,
    },
    hr: {
        marginTop: '50px',
        marginBottom: '50px'
    },
    label: {
        color: theme.palette.secondary.main
    },
    summaryItem: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '22px',
        paddingRight: '22px'
    },
    summaryResult: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '16px 22px',
        background: theme.palette.secondary.light,
        alignItems: 'center',
        marginTop: '13px'
    },
    summaryContainer: {
        margin: '20px 0 !important',
        width: '100%',
    },
    submitButton: {
        padding: '12px 30px',
        color: 'white',
        background: theme.palette.secondary.main,
        borderRadius: '30px',
        marginBottom: '30px',
        border: 'none',
        width: '80%'
    },
    submitHolder: {
        textAlign: 'center'
    },
    noteText: {
        width: '100%'
    },
    option: {
        padding: '15px',
        paddingTop: '20px'
    }
} ) )

