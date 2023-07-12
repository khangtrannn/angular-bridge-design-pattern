import { PaymentProvider } from "./implementation";

export abstract class Payment {
  protected provider: PaymentProvider;

  constructor(provider: PaymentProvider) {
    this.provider = provider;
  }

  pay() {
    this.provider.execPayment();
  }
}

export class OneTimePayment extends Payment {}

export class SubscriptionPayment extends Payment {
  override pay(): void {
    super.pay();
    console.log('Set next payment date...');
  }
}