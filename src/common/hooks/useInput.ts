import { useState } from "react"

export const useInput = (initValue: string = "", requared = false) => {
    const [value, setValue] = useState(initValue)
    const [error, setError] = useState("")
    return !requared
        ? {
              value,
              onChange: (e: any) => setValue(e.currentTarget.value),
          }
        : {
              value,
              error,
              onChange: (e: any) => setValue(e.currentTarget.value),
              onBlur: () =>
                  requared && !value ? setError("Field's requared") : setError(""),
          }
}
