import { useState } from "react"

export const useInput = (initValue: any, requared = false) => {
    const [value, setValue] = useState(initValue)
    const [error, setError] = useState("")
    return requared
        ? {
              value,
              error,
              onChange: (e: any) => setValue(e.target.value),
              onBlur: () => requared && !value && setError("Field's requared"),
          }
        : {
              value,
              onChange: (e: any) => setValue(e.target.value),
              onBlur: () => requared && !value && setError("Field's requared"),
          }
}
