import React from 'react';
import {Table, Button} from 'reactstrap';

const BikeLogTable = (props) => {
    return (
        <div>
            <h2>Your Baby's History</h2>
            <hr />
            <Table responsive dark>
                <thead>
                    <tr>
                        <th>Bike</th>
                        <th>Mileage</th>
                        <th>Gas</th>
                        <th>Maintenance</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.BikeLog.map((BikeLog, id) => {
                        return (
                            <tr key={id}>
                                <th scope="row">{BikeLog.bike}</th>
                                <td>{BikeLog.mileage}</td>
                                <td>{BikeLog.gas}</td>
                                <td>{BikeLog.maintenance}</td>
                                <td>
                                    <Button id={BikeLog.id} onClick={props.delete} size="sm" outline color="danger">Delete</Button>
                                    <Button id={BikeLog.id} onClick={e => props.update(e, BikeLog)} size="sm" outline color="primary">Update</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )

}

export default BikeLogTable;