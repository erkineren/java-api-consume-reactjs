import {Form} from "semantic-ui-react";
import EntityForm from "../../components/EntityUI/EntityForm";

function ProductForm() {


    return (
        <EntityForm
            route={'products'}
            render={(data, onChange) => (
                <>
                    <Form.Input
                        onChange={onChange}
                        name={"title"}
                        value={data.title ?? ''}
                        placeholder={"Title"}
                    />
                    <Form.Input
                        onChange={onChange}
                        name={"supplierName"}
                        value={data.supplierName ?? ''}
                        placeholder={"Supplier"}
                    />
                    <Form.Input
                        type={'number'}
                        min="1" step="any"
                        onChange={onChange}
                        name={"price"}
                        value={data.price ?? ''}
                        placeholder={"Price"}
                    />
                    <Form.Input
                        type={'number'}
                        min="0"
                        onChange={onChange}
                        name={"stock"}
                        value={data.stock ?? ''}
                        placeholder={"Stock"}
                    />
                    <Form.TextArea
                        rows={15}
                        onChange={onChange}
                        name={"description"}
                        value={data.description ?? ''}
                        placeholder={"Description"}
                    />
                    <Form.Select
                        options={(
                            () => {
                                return [
                                    "ACTIVE",
                                    "NOT_ACTIVE",
                                ].map((d) => {
                                    return {
                                        key: d,
                                        text: d,
                                        value: d
                                    }
                                })
                            }
                        )()}
                        onChange={onChange}
                        name={"status"}
                        value={data.status ?? ''}

                    />

                    <Form.Input
                        onChange={onChange}
                        name={"imageUrl"}
                        value={data.imageUrl || (data.images && (data.images[0]?.url ?? ''))}
                        placeholder={"Image Url"}
                        converter={(val) => {
                            return {
                                "images": [
                                    {
                                        "url": val
                                    }
                                ]
                            }
                        }}
                    />

                </>
            )}
        />
    )
}

export default ProductForm