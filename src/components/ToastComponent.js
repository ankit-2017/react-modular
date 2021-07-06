import { toast } from 'react-toastify'

const configuration = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
}

export const ErrorToast = (message) => (
    toast.error(message || 'Something went wrong.', configuration)
)

export const SuccessToast = (message) => (
    toast.success(message || 'Request Successfull.', configuration)
)
