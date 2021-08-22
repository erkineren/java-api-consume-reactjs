import React from 'react';
import {Checkbox, Image, Table} from "semantic-ui-react";
import EntityTable from "../../components/EntityUI/EntityTable";


function ProductTable() {

    return (
        <EntityTable
            route={'products'}
            header={(
                <>
                    <Table.HeaderCell>Image</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Supplier</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell>Stock</Table.HeaderCell>
                    <Table.HeaderCell>Product Status</Table.HeaderCell>
                    <Table.HeaderCell>Approval Status</Table.HeaderCell>
                </>
            )}
            row={(d) => (
                <>
                    <Table.Cell width={3}>
                        <Image src={d.images[0]?.url ?? "https://via.placeholder.com/150"} size='small' rounded/>
                    </Table.Cell>
                    <Table.Cell width={3}>{d.title}</Table.Cell>
                    <Table.Cell width={2}>{d.supplierName}</Table.Cell>
                    <Table.Cell width={2}>{d.price} TL</Table.Cell>
                    <Table.Cell width={1}>{d.stock}</Table.Cell>
                    <Table.Cell width={2}>{d.status}</Table.Cell>
                    <Table.Cell width={2}>{d.approvalStatus}</Table.Cell>
                </>
            )}
            side={
                (search) => {

                    return (
                        <Checkbox
                            label='Show zero or one stock products'
                            style={{
                                marginLeft: "1rem"
                            }}
                            onChange={(e, data) => {
                                search(data.checked ? "stock<1" : "")
                            }}

                        />
                    );
                }

            }
            onSearchTerm={(term) => {
                return "title:" + term
            }}
        />

    );
}


export default ProductTable;