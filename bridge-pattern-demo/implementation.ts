export interface PaymentProvider {
  execPayment(): void;
}

export class PayPalProvider implements PaymentProvider {
  execPayment() {
    console.log(`Call Paypal API...`);

    // Some other logic
  }
}

export class ApplePayProvider implements PaymentProvider {
  execPayment(): void {
    console.log('Call Apple API...');
  }
}