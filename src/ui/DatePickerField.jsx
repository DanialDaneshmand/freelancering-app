import React from 'react'
import DatePicker from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'

function DatePickerField({label,date,setDate}) {
  return (
    <div>
        <span className='mb-2 block'><label >ددلاین</label></span>
        <DatePicker
        containerClassName=' w-full'
        inputClass='border outline-none border-gray-300  w-full py-2 rounded-lg px-4'
        calendarPosition='bottom-center'
        value={date}
        onChange={setDate}
        // format='yyyy/mm/dd'
        calendar={persian}
        locale={persian_fa}
        />
    </div>
  )
}

export default DatePickerField