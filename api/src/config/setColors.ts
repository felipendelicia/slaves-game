import colors from 'colors/safe'

export const info = (string:string) => colors.green(string)
export const error = (string:string) => colors.red(string)