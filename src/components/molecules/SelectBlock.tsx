import React, { FC } from 'react'
import { Option } from '../../types/common/conmmonTypes'
import style from '../../styles/ui/selectBlock.module.scss'

type Props = {
  label: string,
  value: string,
  options: Option[],
  onChange: (e: string) => void
}

const SelectBlock: FC<Props> = ({ label, value, options, onChange }) => {
  return (
    <div>
      <div className={style.descriptionblock}>{label}</div>
      <select 
        value={value}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
      >
        {options &&
          options.map((option) => (
            <option value={option.id} key={option.id}>
              {option.name}
            </option>
          ))}
      </select>
    </div>
  )
}

export default SelectBlock
