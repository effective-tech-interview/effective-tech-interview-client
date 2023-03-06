// eslint-disable-next-line no-useless-escape
export const emailPattern = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i);

export const passwordPattern = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/i);

export const verificatonPattern = new RegExp(/^[0-9]+$/i);
