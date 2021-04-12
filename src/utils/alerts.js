import Swal from 'sweetalert2'


export const swal = ({ icon, title, text }) => {
    return Swal.fire({ icon, title, text })
}

export const toast = ({ icon = 'success', title }) => {

    return Swal.fire({
        icon,
        title,
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
}