"use client"

import useCountries from '@/app/hooks/useCountries';
import Select from 'react-select'

export type SelectCountryType = {
    label: string;
    value: string;
}
interface SelectCountryProps {
    value?: SelectCountryType;
    onChange: (value: SelectCountryType) => void;
}

const SelectCountry: React.FC<SelectCountryProps> = ({value, onChange}) => {
    const {getAll} = useCountries()
  return (
    <Select
    isClearable
    placeholder="Anywhere"
    options={getAll()}
    value={value}
    onChange={(value) => onChange(value as SelectCountryType)}
    />
  )
}

export default SelectCountry