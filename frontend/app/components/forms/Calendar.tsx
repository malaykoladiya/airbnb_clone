"use client";

import { DateRange, Range, RangeKeyDict } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface DatePickerProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  bookedDates?: Date[];
}

const DatePicker = ({ value, onChange, bookedDates }: DatePickerProps) => {
  return (
    <DateRange
      //   editableDateInputs
      onChange={onChange}
      //   moveRangeOnFirstSelection={false}
      ranges={[value]}
      className="w-full border border-gray-400 rounded-xl mb-4"
      rangeColors={["#262626"]}
      direction="vertical"
      showDateDisplay={false}
      date={new Date()}
      minDate={new Date()}
      disabledDates={bookedDates}
    />
  );
};

export default DatePicker;
