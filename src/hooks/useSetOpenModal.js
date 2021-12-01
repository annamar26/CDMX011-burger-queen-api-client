import { useState } from 'react'
const useSetOpenModal = () => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState("")
    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false);
    const handleContent = (valor) => setContent(valor)
    
    const [object, setObject] = useState(null);

    return { open, handleClose, handleOpen, content, handleContent, object, setObject}
}

export default useSetOpenModal