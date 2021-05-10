import { Form, Formik, Field } from "formik"
import { Button, InputGroup } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { setGames } from "../common/models/games"
import { Input } from "../common/utils/controls"

export const Search = () => {
    const history = useHistory()
    return (
        <Formik
            initialValues={{ search: "" }}
            onSubmit={({ search }) => {
                setGames({ page: 1, search })
                history.push(`/?search=${search}`)
            }}
        >
            <Form>
                <InputGroup>
                    <Field name="search" component={Input} />
                    <Button type="submit" variant="secondary">
                        Search
                    </Button>
                </InputGroup>
            </Form>
        </Formik>
    )
}
