import { Payment, SubscriptionPayment } from "./abstraction";
import { PayPalProvider } from "./implementation";

const payment = new SubscriptionPayment(new PayPalProvider());
payment.pay();