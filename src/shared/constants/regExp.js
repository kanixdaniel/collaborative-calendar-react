export const regExp = {
    fullName: /^(?:[A-Za-z]+)(?:\s[A-Za-z]+){1,2}(?:\s(?:[A-Za-z]+(?:[-'\s][A-Za-z]+)*))?$/,
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
}