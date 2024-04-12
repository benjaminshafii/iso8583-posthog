export const entryModes = {
  '00': 'Unknown or terminal not used',
  '01': 'Manual key entry',
  '02': 'Magnetic stripe read; CVV checking may not be possible',
  '03': 'Optical code read',
  '04': 'Integrated circuit card read',
  '05': 'Integrated circuit card read for future use',
  '06': 'Reserved for future use',
  '07': 'Contactless payment using VSDC chip rules',
  '10': 'Credential on file',
  '90': 'Magnetic stripe read and exact content of Track 1 or Track 2 included (CVV checking possible)',
  '91': 'Contactless payment using magnetic stripe data rules',
  '95': 'Integrated circuit card; CVV or iCVV checking may not be possible',
  '96': 'Stored value from pre-registered checkout service'
};

export const pinEntryCapability = {
  '0': 'Unknown',
  '1': 'Terminal can accept PINs',
  '2': 'Terminal cannot accept PINs',
  '8': 'Terminal PIN pad down'
};