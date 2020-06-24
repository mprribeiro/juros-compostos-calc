const formatter = Intl.NumberFormat('pt-Br', {
  style: 'currency',
  currency: 'BRL',
});

function formatNumber(value) {
  return formatter.format(value);
}

const formatPercentage = (value = 0) => {
  const stringValue = value.toFixed(2);
  return stringValue.replace('.', ',') + '%';
};

export { formatNumber, formatPercentage };
