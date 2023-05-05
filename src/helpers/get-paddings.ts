export function getTopPadding(size: string | null | undefined) {
  switch (size) {
    case 'small':
      return 'pt-40 md:pt-50'
    case 'medium':
      return 'pt-50 md:pt-80'
    case 'large':
      return 'pt-50 md:pt-80 lg:pt-110'
    case 'extra-large':
      return 'pt-50 md:pt-80 lg:pt-110 xl:pt-130'
    default:
      return ''
  }
}

export function getBottomPadding(size: string | null | undefined) {
  switch (size) {
    case 'small':
      return 'pb-40 md:pb-50'
    case 'medium':
      return 'pb-50 md:pb-80'
    case 'large':
      return 'pb-50 md:pb-80 lg:pb-110'
    case 'extra-large':
      return 'pb-50 md:pb-80 lg:pb-110 xl:pb-130'
    default:
      return ''
  }
}

export function getPaddings(
  topPaddingSize: string | null | undefined,
  bottomPaddingSize: string | null | undefined
) {
  return `${getTopPadding(topPaddingSize)} ${getBottomPadding(bottomPaddingSize)}`
}
