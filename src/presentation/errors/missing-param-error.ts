export class MissingParamError extends Error {
  constructor (paramName: string) {
    // classes de erro no js precisam chamar o super
    super(`Missing param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
