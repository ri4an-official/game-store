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
            initialValues={{ title: "" }}
            onSubmit={async ({ title }) => {
                dispatch(setGamesAsync(1, title))
                history.push(`/?term=${title}`)
            }}
            // valvidate={({ title }) => {}}
        >
            <Form>
                <InputGroup>
                    <Field name="title" component={Input} />
                    <Button type="submit" variant="secondary">
                        Search
                    </Button>
                </InputGroup>
            </Form>
        </Formik>
    )
}
