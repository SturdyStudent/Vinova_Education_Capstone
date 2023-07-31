import { makeStyles } from '@mui/styles'
import caretDown from '../../../assets/img/CaretDown.png'

export const useSendFundStyle = makeStyles( ( theme ) => ( {
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
            padding: '0 120px'
        }
    },
    titlePanel: {
        background: theme.palette.primary.gold,
        color: theme.palette.primary.blue,
        paddingTop: '23px',
        paddingBottom: '23px',
        textAlign: 'left'
    },
    inputRow: {
        display: 'flex',
        flexDirection: 'row',
        [ theme.breakpoints.down( 'md' ) ]: {
            flexDirection: 'column'
        }
    },
    inputItem: {
        width: '33.3333%',
        boxSizing: 'border-box',
        [ theme.breakpoints.down( 'md' ) ]: {
            width: '100%',
            paddingLeft: '0 !important',
            paddingRight: '0 !important'
        }
    },
    inputItem2: {
        width: '66.6666%',
        boxSizing: 'border-box',
        [ theme.breakpoints.down( 'md' ) ]: {
            width: '100%',
            paddingLeft: '0 !important',
            paddingRight: '0 !important'
        }
    },
    select: {
        width: '100%',
        backgroundColor: '#F5F5F5',
        padding: '13px 0 9px 15px',
        border: 'none',
        appearance: 'none',
        backgroundPosition: `calc(100% - 12px) center !important`,
        background: `url(${ caretDown }) no-repeat`,
        borderBottom: `${ theme.palette.primary.blue } 2px solid`,
    },
    input: {
        width: '100%',
        background: '#F5F5F5',
        padding: '4px 0 3px 15px',
        border: 'none',
        borderBottom: `${ theme.palette.primary.blue } 1.5px solid`,
    },
    hr: {
        marginTop: '50px',
        marginBottom: '50px'
    },
    label: {
        color: theme.palette.primary.blue
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
        background: theme.palette.primary.gold,
        alignItems: 'center',
        marginTop: '13px'
    },
    summaryContainer: {
        width: '373px',
        margin: '20px 0 !important',
        [ theme.breakpoints.down( 'md' ) ]: {
            width: '100%',
        }
    },
    submitButton: {
        padding: '12px 30px',
        color: 'white',
        background: theme.palette.primary.blue,
        borderRadius: '30px',
        marginBottom: '30px',
        border: 'none',
        [ theme.breakpoints.down( 'md' ) ]: {
            width: '80%'
        }
    },
    submitHolder: {
        textAlign: 'left',
        [ theme.breakpoints.down( 'md' ) ]: {
            textAlign: 'center'
        }
    },
    noteText: {
        width: '724px',
        [ theme.breakpoints.down( 'md' ) ]: {
            width: '100%'
        },
    },
    option: {
        padding: '15px',
        paddingTop: '20px'
    }
} ) )

