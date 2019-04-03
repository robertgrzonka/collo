const collo = require('./collo')

describe('collo object', () => {
  test('adds new color', () => {
    collo.addColor = [ 'deeppink', '#FF1493' ]
    expect(collo.colors.deeppink).toEqual('#FF1493')
  })

  test('edits existing color', () => {
    collo.editColor = [ 'black', '#000000' ]
    expect(collo.colors.black).toEqual('#000000')
  })

  test('returns path', () => {
    expect(collo.path).toBe(collo.config.path)
  })
  
  test('had good RegEx', () => {
    const regex = /^#[0-9a-zA-Z]{6}/
    expect(regex.test('#000')).toBeFalsy()
    expect(regex.test('#000000')).toBeTruthy()
  })
})
