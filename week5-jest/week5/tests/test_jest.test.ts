import { multiply, echo, getlist, getobj, TestObj } from '../test_jest'

test('240 times 3 equals 720', () => {
    expect(multiply(240, 3)).toBe(720)
})

test('Get a name', () => {
    expect(echo("abcd")).toHaveLength(4)
})

test('Get a name', () => {
    expect(echo("ncuapp")).toBe("ncuapp")
})

test('Should get a list of 10 numbers', () => {
    expect(getlist()).toHaveLength(10)
})

test('Should get a list of 10 numbers', () => {
    expect(getlist()).toStrictEqual([0,1,2,3,4,5,6,7,8,9])
})


test('Should get a list of 10 numbers', () => {
    expect(getobj()).toBeInstanceOf(TestObj)
})
