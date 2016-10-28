export interface Invoice {
  _id: string,
  _rev: string,
  cash_paid: number,
  customer_balance: number,
  date: string,
  invoice_number: string,
  invoice_total: number
  // total: string,
}

// _id: 'invoice' + '_' + invoice_number,
//         invoice_number: invoice_number,
//         date: new Date(),
//         invoice_total: invoice_total,
//         cash_paid: cash_paid,
//         customer_balance: customer_balance,
//         items: items_array
