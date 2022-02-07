import Swal from "sweetalert2";

export const alert = (title, text, icon) => 
    Swal.fire({
        title,
        text,
        icon
    });