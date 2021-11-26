import { useState } from 'react'
const useSetOpenModal = () => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState("")
    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false);
    const handleContent = (valor) => setContent(valor)

    return { open, handleClose, handleOpen, content, handleContent }
}

export default useSetOpenModal