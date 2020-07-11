const arr = [
  { id: 1, debtId: 10, masterDebtId: 5 },
  { id: 2, debtId: 2, masterDebtId: 5 },
  { id: 4, debtId: 8, masterDebtId: 5 },
  { id: 3, debtId: 5, masterDebtId: 5 }, // To be found
  { id: 6, debtId: 12, masterDebtId: 5 },
  { id: 4, debtId: 8, masterDebtId: 5 },
  { id: 5, debtId: 9, masterDebtId: 5 },
  { id: 6, debtId: 12, masterDebtId: 5 },
  { id: 4, debtId: 8, masterDebtId: 5 },
  { id: 5, debtId: 9, masterDebtId: 5 },
  { id: 6, debtId: 12, masterDebtId: 5 },
  { id: 4, debtId: 8, masterDebtId: 5 },
  { id: 5, debtId: 9, masterDebtId: 5 },
  { id: 6, debtId: 12, masterDebtId: 5 },
];

console.log(`Before: ${JSON.stringify(arr)}`);

arr.sort(a => a.debtId === a.masterDebtId ? -1 : 1);
console.log(`After: ${JSON.stringify(arr[0])}`);
