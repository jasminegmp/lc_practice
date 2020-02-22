function isRequired (name) {
    throw new Error(`${name}` is required)
  }

  function calculatePayment (
    price = isRequired('price'), 
    salesTax = 0.05, 
    discount = 0
  ) {
    // math
  }