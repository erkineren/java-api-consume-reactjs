import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../../context";
import {Button, Container, Icon, Input, Table} from "semantic-ui-react";
import {catchErrorMessage} from "../../helpers";
import {useHistory} from "react-router-dom";
import {toast} from "react-toastify";


function EntityTable({route, header, row, side, onSearchTerm}) {
    const ctx = useContext(AppContext)
    const history = useHistory()
    const [state, setState] = useState({})

    const fetch = () => {
        ctx.api
            .get(`/${route}`)
            .then(res => {
                ctx.actions.set(route, res.data.content)
            })
            .catch(catchErrorMessage)
    }

    useEffect(() => {
        fetch()
        console.log(ctx.store)
    }, [])

    function deleteRecord(id) {
        ctx.api
            .delete(`/${route}/${id}`)
            .then(res => {
                fetch()
                toast("Deleted #" + id)
            })
            .catch(catchErrorMessage)
    }

    const onSearchChange = (e) => {
        let term = e.target.value
        if (onSearchTerm)
            term = onSearchTerm(term)
        search(term)
    };

    const search = (term) => {
        ctx.api
            .get(`/${route}?search=${term}`)
            .then(res => {
                ctx.actions.set(route, res.data.content)
            })
            .catch(catchErrorMessage)
    }

    return (
        <Container>
            <div>
                <Button color='green' onClick={e => {
                    history.push(`/${route}/new`)
                }}>
                    <Icon name='plus'/> New
                </Button>

                <Input
                    onChange={onSearchChange}
                    placeholder={"Search"}
                    style={{
                        marginLeft: "1rem"
                    }}
                />

                {side(search)}

            </div>
            <Table celled stackable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        {header}
                        <Table.HeaderCell/>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {(ctx.store[route] ?? []).map((d, index) => (
                        <Table.Row key={index}>
                            <Table.Cell width={1}>{d.id}</Table.Cell>

                            {row(d)}

                            <Table.Cell width={2}>
                                <div>
                                    <Button
                                        icon={"edit"}
                                        size={'mini'}
                                        color={'green'}
                                        onClick={() => {
                                            history.push(`/${route}/${d.id}`)
                                        }}
                                    />
                                    <Button
                                        icon={"delete"}
                                        size={'mini'}
                                        color={'red'}
                                        onClick={() => {
                                            deleteRecord(d.id)
                                        }}
                                    />
                                </div>

                            </Table.Cell>

                        </Table.Row>
                    ))}
                </Table.Body>

            </Table>
        </Container>
    );
}


export default EntityTable;