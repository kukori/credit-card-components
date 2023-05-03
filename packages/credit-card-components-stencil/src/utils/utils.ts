export function removeNaNFromString(cardNumberValue: string | undefined): string {
  return cardNumberValue ? cardNumberValue.replace(/\D/g,'') : '';
};