import { Form, Formik, Field } from "formik"
import { Button, InputGroup } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { setGamesAsync } from "../common/redux/games-reducer"
import { Input } from "../common/utils/controls"

export const Search = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    return (
        <Formik
            initialValues={{ term: "" }}
            onSubmit={({ term }) => {
                dispatch(setGamesAsync(1, term))
                history.push(`/?term=${term}`)
            }}
        >
            <Form>
                <InputGroup>
                    <Field name="term" component={Input} />
                    <Button type="submit" variant="secondary">
                        Search
                    </Button>
                </InputGroup>
            </Form>
        </Formik>
    )
}
