export const PASSWORD_REG = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,30}$/;
export const CONTAINER_NAME_REG = /^[a-zA-Z0-9\-_]{1,20}$/;
export const NAME_REG = /^.{2,30}$/;
export const EMAIL_REG = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const FILENAME_REG = /^[^/\\:*?"<>|\s]+\.([a-zA-Z]{2,})$/;
export const DIRECTORYNAME_REG = /^[^/\\:*?."<>|\s]+$/;
