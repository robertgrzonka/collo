const collo = require('./collo')

describe('collo object', () => {

  test('adds new color', () => {
    collo.add = [ 'testColorJest', '#FF1493' ]
    expect(collo.colors.testColorJest).toBeTruthy()
  })

  test('edits existing color', () => {
    collo.edit = [ 'testColorJest', '#FF4091' ]
    expect(collo.colors.testColorJest).toEqual('#FF4091')
  })

  test('deletes color', () => {
    collo.delete = 'testColorJest'
    expect(collo.colors.testColorJest).toBeFalsy()
  })

  test('returns path', () => {
    expect(collo.path).toEqual(collo.config.path)
  })

  test('returns list of colors', () => {
    expect(collo.colors).toEqual(collo.config.get('colors'))
  })

  test('has working RegEx', () => {
    const regex = /^#[0-9a-zA-Z]{6}/
    expect(regex.test('#000')).toBeFalsy()
    expect(regex.test('#000000')).toBeTruthy()
  })
})
