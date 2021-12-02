import { useState } from "react"

const useContentEdit = () => {
    const [content, setContent] = useState(null)
    return { content, setContent }
}

export default useContentEdit