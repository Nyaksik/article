import classNames from './classNames'

describe('classNames', function () {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with additional class', () => {
    const expected = 'someClass class1 class2'

    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
  })

  test('with mods', () => {
    const expected = 'someClass hovered active'

    expect(classNames('someClass', { hovered: true, active: true })).toBe(expected)
  })

  test('with mods false', () => {
    const expected = 'someClass hovered'

    expect(classNames('someClass', { hovered: true, active: false })).toBe(expected)
  })

  test('with mods undefined', () => {
    const expected = 'someClass hovered'

    // @ts-expect-error
    expect(classNames('someClass', { hovered: true, active: undefined })).toBe(expected)
  })

  test('all params', () => {
    const expected = 'someClass class1 hovered'

    expect(classNames('someClass', { hovered: true, active: false }, ['class1'])).toBe(expected)
  })
})
