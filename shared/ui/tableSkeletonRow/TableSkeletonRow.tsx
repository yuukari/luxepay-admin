import { FC } from 'react';

type TableSkeletonRowProps = {
    columns: number
}

const TableSkeletonRow: FC<TableSkeletonRowProps> = (props) => {
    const { columns } = props;

    let colsArray: number[] = [];
    for (let i = 1; i <= columns; i++)
        colsArray.push(i);

    return <tr className="animate-pulse">
        {colsArray.map(c => <td key={c} className="text-transparent">
            <p className="bg-gray-500 rounded">Loading...</p>
        </td>)}
    </tr>
};

export default TableSkeletonRow;