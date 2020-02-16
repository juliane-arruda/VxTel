const prices = {
  '011': {
    '016': 1.90,
    '017': 1.70,
    '018': 0.90
  },
  '016': {
    '011': 2.90,
  },
  '017': {
    '011': 2.70
  },
  '018': {
    '011': 1.90
  }
}

const getPricePerMinute = (originDDD, destinyDDD) => {

  const origin = prices[originDDD];

  if (origin === undefined) {
    return null;
  }

  return origin[destinyDDD] || null;
}

module.exports = getPricePerMinute;