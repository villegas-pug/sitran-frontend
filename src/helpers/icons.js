import React from 'react'
import {
   AddBox,
   ArrowUpward,
   Check,
   ChevronLeft,
   ChevronRight,
   Clear,
   DeleteOutline,
   Edit,
   FilterList,
   FirstPage,
   LastPage,
   Remove,
   SaveAlt,
   Search,
   ViewColumn,
   Cloud,
   Build,
   BarChartRounded,
   PageviewRounded,
   LiveHelp,
   Settings,
   Person,
   SupervisorAccount,
   Home
} from '@material-ui/icons'

export const Icons = {
   Export: SaveAlt,
   Filter: FilterList,
   FirstPage: FirstPage,
   LastPage: LastPage,
   NextPage: ChevronRight,
   PreviousPage: ChevronLeft,
   ResetSearch: Clear,
   Search: Search,
   SortArrow: ArrowUpward,
   ThirdStateCheck: Remove,
   ViewColumn: ViewColumn,

   /*» MOD'S...  */
   Home: <Home fontSize='large' />,
   Person: <Person fontSize='large' />,
   SupervisorAccount: <SupervisorAccount fontSize='large' />,
   AddBox: <AddBox fontSize='large' />,
   Settings: <Settings fontSize='large' />,
   LiveHelp: <LiveHelp fontSize='large' />,
   BarChartRounded: <BarChartRounded fontSize='large' />,

   /*» SUB-MOD'S...  */
   Test: <Build />,
   Cloud: <Cloud />,
   Check: <Check />,
   Clear: <Clear />,
   Delete: <DeleteOutline />,
   DetailPanel: <ChevronRight />,
   Edit: <Edit />,
   PageviewRounded: <PageviewRounded />,
}