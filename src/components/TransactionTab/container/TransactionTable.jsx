import React from 'react';
import {
    Box, Typography, Hidden,
    TableHead,
    Table,
    TableRow,
    TableCell
} from "@mui/material";
import { useTransactionStyle as useStyles } from "./styles";
import updownArrow from '../../../assets/icons/updownIcon.svg';
import Pagination from './Pagination';

const paginList = [1, 2, 3, 4, 5];

function TransactionTable({transactionList}) {
    const classes = useStyles();

  return (
    <div>
         <Hidden mdDown>
            <Table>
                <TableHead className={classes.tableHead} sx={{ '& th': {borderBottom: '1.5px solid #37383d', color: '#1F3684'}}}>
                    <TableCell>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>Order Date</div>
                        <div>
                        <span><img src={updownArrow} alt='' /></span>
                        </div>
                    </Box>
                    </TableCell>
                    <TableCell>Action</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Currency</TableCell>
                    <TableCell>Remarks</TableCell>
                    <TableCell>Order Status</TableCell>
                </TableHead>
                {
                    transactionList && transactionList.map((item, index) => (
                    <TableRow sx={{backgroundColor: `${(index % 2 === 1) ? '#f5f5f5' : 'white'}`, '& td': {border: 0}}}>
                        <TableCell>
                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <div>{item.orderDate}</div>
                            <div>
                            <span><img src={updownArrow} alt='' /></span>
                            </div>
                        </Box>
                        </TableCell>
                        <TableCell>{item.action}</TableCell>
                        <TableCell>{item.amount}</TableCell>
                        <TableCell>{item.currency}</TableCell>
                        <TableCell>{item.remarks}</TableCell>
                        <TableCell>{item.orderStatus}</TableCell>
                    </TableRow>
                    ))
                }
            </Table>
        </Hidden>
        <Hidden mdUp>
            <Box sx={{marginTop: '28px'}}>
            {
                transactionList.map((item, index) => (
                <Box className={classes.mobileTableItem} sx={{backgroundColor: `${index % 2 === 0 ? '#f5f5f5' : ''}`}}>
                <div>
                    <Typography textAlign={'left'} fontWeight={500}>{item.orderStatus}</Typography>
                    <Typography textAlign={'left'}>{item.orderDate}</Typography>
                    <Typography textAlign={'left'} sx={{marginTop: '4px'}}>{item.remarks}</Typography>
                </div>
                <div>
                    <Typography textAlign={'right'} fontWeight={600}>{item.amount} {item.currency}</Typography>
                    <Typography textAlign={'right'}>{item.action}</Typography>
                </div>
                </Box>
                ))
            }
            </Box>
        </Hidden>
        <Pagination paginList={paginList} />
    </div>
  )
}

export default TransactionTable