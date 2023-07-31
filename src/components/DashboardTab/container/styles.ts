import { makeStyles } from '@mui/styles'
import {Theme} from '@mui/material/styles'

export const useDashboardStyles = makeStyles( ({ theme }: { theme: Theme })  => ({
    container: {
        maxWidth: 'none',
    },
    welcomePanel: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingTop: '51px',
        paddingBottom: '51px',
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
        width: 'max-content !important',
        borderRadius: '30px !important',
        background: 'transparent',
        padding: '14px 28px !important',
        border: `1px solid #1F3684 !important`,
        fontSize: '14px',
        textTransform: 'none',
        color: '#1F3684',
        [ theme?.breakpoints.down( 'md' ) ]: {
            width: '100% !important',
        },
    },
    functionNavHolder: {
            color: '#1F3684',
            [ theme?.breakpoints.up( 'md' ) ]: {
                padding: '0 !important',
            },
    },
    gridContainer: {
            display: 'flex',
            gap: '12px',
            boxSizing: 'border-box',
            flexDirection: 'row',
            width: 'auto',
            [ theme?.breakpoints.down( "md" ) ]: {
                width: 'auto !important',
                display: 'block',
                gap: '0'
            }
    },
        walletTitle: {
            fontSize: '25px',
            color: '#1F3684'
        },
        walletNav: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            color: '#1F3684',
            marginTop: '62px',
            marginBottom: '32px',
            [ theme?.breakpoints.down( 'md' ) ]: {
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
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
            [ theme?.breakpoints.down( 'md' ) ]: {
                width: '100%',
            },
        },
        detailButton: {
            padding: '17px 30px',
            margin: '0 auto',
            marginTop: '30px ',
            borderRadius: '30px',
            background: 'transparent',
            width: 'fit-content',
            border: `#1F3684 1px solid !important`,
            textTransform: 'none'
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


  