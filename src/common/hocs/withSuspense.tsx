import { FC, Suspense } from "react"
import { Loader } from "../loader/Loader"

export const withSuspense = (Component: FC<any>) => (props?: any) => (
    <Suspense fallback={<Loader />}>
        <Component {...props} />
    </Suspense>
)
