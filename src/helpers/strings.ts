import truncate from 'lodash/truncate'
import { striptags } from 'striptags'

export function truncateString(string: string, maxLength: number) {
  const strippedString = striptags(string)

  return truncate(strippedString, {
    length: maxLength,
    separator: /,? +/,
    omission: '',
  })
}
