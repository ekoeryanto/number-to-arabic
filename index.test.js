/* eslint-env jest */
const { numberToArabic, arabicToNumber } = require('./index')

describe('numerToArabic', () => {
    test('should convert digit 982 to arabic digit', () => {
        expect(numberToArabic(982)).toEqual('٩٨٢')
    })

    test('should convert digit 564 to arabic digit', () => {
        expect(numberToArabic(564)).toEqual('٥٦٤')
    })

    test('should convert digit 108 to arabic digit', () => {
        expect(numberToArabic(108)).toEqual('١٠٨')
    })
})

describe('arabicToNumber', () => {
	test('should convert ٩٨٢ arabic to number 982', () => {
		expect(arabicToNumber('٩٨٢')).toEqual('982')
	})

	test('should convert ٥٦٤ arabic to number 564', () => {
		expect(arabicToNumber('٥٦٤')).toEqual('564')
	})

	test('should convert ١٠٨ arabic to number 108', () => {
		expect(arabicToNumber('١٠٨')).toEqual('108')
	})
})
