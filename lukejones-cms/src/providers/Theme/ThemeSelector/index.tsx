'use client'
import { Moon, Sun } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React, { useState } from 'react'
import type { Theme } from './types'
import { useTheme } from '..'
import { themeLocalStorageKey } from './types'

export const ThemeSelector: React.FC = () => {
  const { setTheme } = useTheme()
  const [value, setValue] = useState('')

  const onThemeChange = (themeToSet: Theme & 'auto') => {
    if (themeToSet === 'auto') {
      setTheme(null)
      setValue('auto')
    } else {
      setTheme(themeToSet)
      setValue(themeToSet)
    }
  }

  React.useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey)
    setValue(preference ?? 'auto')
  }, [])

  return (
    <Select onValueChange={onThemeChange} value={value}>
      <SelectTrigger
        aria-label="Select a theme"
        className="w-auto gap-2 pl-0 md:pl-3 border-none text-sm px-4 py-2 leading-none rounded-full font-semibold bg-slate-900 text-slate-100 hover:bg-amber-700 hover:text-slate-950"
      >
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className='bg-slate-100 dark:bg-slate-950 text-slate-950 dark:text-slate-100'>
        <SelectItem value="auto">Auto</SelectItem>
        <SelectItem value="light">
          <div className='flex items-center justify-between'>
            Light
            <Sun
              className="ml-2 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
          </div>
        </SelectItem>
        <SelectItem value="black dark:white">
          <div className='flex items-center justify-between'>
            Dark
            <Moon
              className="ml-2 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}