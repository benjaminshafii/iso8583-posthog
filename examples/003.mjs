/*
  Authorization request for a cash withdrawal.
    - 1 EUR
    - Chip + PIN
    - Cash withdrawal
 */

export const ISO_MSG = {
  DE3: "010000", //
  DE4: "000000000100", // 1 EUR
  DE6: "000000000100", // 1 EUR
  DE7: "0216103818", // 2021-06-10 18:38:18
  DE11: "000090", // STAN
  DE12: "103626",
  DE13: "0216",
  DE14: "2509",
  DE18: "5999",
  DE19: "276",
  DE22: "051",
  DE25: "02",
  DE43: "IC CASH 01012072         Berlin       DE",
  DE49: "978",
  DE51: "978",
};
