
import DataTable from 'react-data-table-component';
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
        sortable: true,
    },
    {
        name: 'Last Modified',
        selector: row => row.lastUpdated,
        sortable: true,
    },
];


export const DataTableComponent = ({data}) => {
    return (
        <DataTable
            columns={columns}
            data={data}
            className={cn(styles.rdt_Table, styles.rdt_TableHead)}
        />
    );
};