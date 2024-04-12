import { merchantTypes } from "./DE18.mjs";
import { entryModes, pinEntryCapability } from "./DE22.mjs";

const currencyCodes = {
  '826': 'GBP',
  '978': 'EUR',
};

const countryCodes = {
  '276': 'DE',
  '826': 'GB',
};

const posConditionCodes = {
  '00': 'Normal transaction of this type',
  '01': 'Cardholder not present',
  '02': 'Card and cardholder present, PIN entered',
  '03': 'Merchant suspicious of transaction or card',
  '05': 'Cardholder present, card not present',
  '06': 'Completion advice',
  '08': 'Mail/phone order/recurring transaction',
  '11': 'Suspected fraud',
  '12': 'Security',
  '51': 'Request for account number verification without authorization',
  '59': 'E-commerce request through public network',
  '71': 'Card present, magnetic stripe cannot be read (key-entered)—U.S. only',
};

// DE 43
function parseCardAcceptorLocation(location) {
  // Ensure the location is at least 40 characters long, pad with spaces if not
  location = location.padEnd(40, ' ');

  return {
    cardAcceptorNameOrATMLocation: location.substring(0, 25).trim(),
    city: location.substring(25, 38).trim(),
    country: location.substring(38, 40).trim()
  };
}



export function transformISOMessageToReadableFormat(isoMsg) {
  const { cardAcceptorNameOrATMLocation, city, country } = parseCardAcceptorLocation(isoMsg.DE43.trim());
  return {
    currencyTransaction: currencyCodes[isoMsg.DE49] || 'Unknown currency',
    merchantType: merchantTypes[isoMsg.DE18] || 'Unknown merchant type',
    acquiringInstitutionCountry: countryCodes[isoMsg.DE19] || 'Unknown country',
    posEntryModeDetail: {
      method: entryModes[isoMsg.DE22.slice(0, 2)] || 'Unknown entry method',
      capability: pinEntryCapability[isoMsg.DE22.slice(2)] || 'Unknown PIN entry capability',
    },
    posConditionCode: posConditionCodes[isoMsg.DE25] || 'Unknown condition',
    cardAcceptorLocation: {
      cardAcceptorNameOrATMLocation,
      city,
      country,
    },
    transaction: {
      amount: parseInt(isoMsg.DE4, 10) / 100,
      currency: currencyCodes[isoMsg.DE49] || 'Unknown currency',
    },
    billing: {
      amount: parseInt(isoMsg.DE6, 10) / 100,
      currency: currencyCodes[isoMsg.DE51] || 'Unknown currency',
    },
  };
}
