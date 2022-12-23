
import DataTable from 'react-data-table-component';
import { SvgSprite } from '../SvgSprite';
import styles from './index.module.scss'
import cn from 'classnames';
const columns = [
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Activity',
        selector: row => row.activity,
        // sortable: true,
    },
    {
        name: 'Size',
        selector: row => row.size,
        // sortable: true,
    },
    {
        name: 'Data Created',
        selector: row => row.dataCreated,
        // sortable: true,
    },
    {
        name: 'Last Modified',
        selector: row => row.lastUpdated,
        // sortable: true,
    },
    {
        name : "",
        selector: row => row.action,
        width: "50px",
    },
];

const data = [
    {
        id: 1,
        name : "Web Design Material",
        activity: 'John Smith',
        size: '3 MB',
        dataCreated : "Sep 13, 2019",
        lastUpdated : "Sep 13, 2019",
        action : <SvgSprite className={styles.actionIcon} spriteID={'capa'}/>,
    },
    {
        id : 2,
        name : "Competitor Template",
        activity: 'Amy Apple',
        size: '8 MB',
        dataCreated : "Sep 15, 2019",
        lastUpdated : "Sep 15, 2019",
        action : <SvgSprite className={styles.actionIcon} spriteID={'capa'}/>,
    },
    {
        id: 3,
        name : "UI UX Design",
        activity: 'Tom Reese',
        size: '4 MB',
        dataCreated : "Sep 24, 2019",
        lastUpdated : "Sep 24, 2019",
        action : <SvgSprite className={styles.actionIcon} spriteID={'capa'}/>,
    },
    {
        id : 4,
        name : "Programming Helper",
        activity: 'Hunter Smith',
        size: '6 MB',
        dataCreated : "Sep 27, 2019",
        lastUpdated : "Sep 27, 2019",
        action : <SvgSprite className={styles.actionIcon} spriteID={'capa'}/>,
    },
]


export const DataTableComponent = () => {
    return (
        <DataTable
            columns={columns}
            data={data}
            className={cn(styles.rdt_Table, styles.rdt_TableHead)}
        />
    );
};