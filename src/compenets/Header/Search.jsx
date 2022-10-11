import { Button, Form } from "react-bootstrap"


export const Search = () => {

    return (
        <>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Buscar</Button>
            </Form>
        </>
    )
}