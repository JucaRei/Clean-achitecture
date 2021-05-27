export class InvalidParamError extends Error {
  constructor (paramName: string) {
    // classes de erro no js precisam chamar o super
    super(`Invalid param: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
