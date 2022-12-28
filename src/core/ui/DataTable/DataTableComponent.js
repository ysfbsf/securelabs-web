
import DataTable from 'react-data-table-component';
import styles from './index.module.scss'
import cn from 'classnames';

export const DataTableComponent = ({data, events}) => {
    const columns = [
        {
            name: 'Name',
            selector: row => events ? row.title : row.name,
            sortable: true,
        },
        {
            name: events ? 'Created by' : 'Activity',
            selector: row => events ? row.createdBy : row.activity,
            // sortable: true,
        },
        {
            name: events ? 'Members' : 'Size',
            selector: row => events ? row.members : row.size,
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
    return (
        <DataTable
            columns={columns}
            data={data}
            className={cn(styles.rdt_Table, styles.rdt_TableHead)}
        />
    );
};