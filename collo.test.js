const collo = require('./collo')

describe('collo object', () => {

  afterAll(() => {
    collo.config.delete('colors.testColor')
  })

  test('adds new color', () => {
    collo.addColor = [ 'testColorJest', '#FF1493' ]
    expect(collo.colors.testColorJest).toBeTruthy()
  })

  test('edits existing color', () => {
    collo.editColor = [ 'black', '#000000' ]
    expect(collo.colors.black).toEqual('#000000')
  })

  test('returns path', () => {
    expect(collo.path).toEqual(collo.config.path)
  })

  test('returns list of colors', () => {
    expect(collo.colors).toEqual(collo.config.get('colors'))
  })

  test('had good RegEx', () => {
    const regex = /^#[0-9a-zA-Z]{6}/
    expect(regex.test('#000')).toBeFalsy()
    expect(regex.test('#000000')).toBeTruthy()
  })
})
