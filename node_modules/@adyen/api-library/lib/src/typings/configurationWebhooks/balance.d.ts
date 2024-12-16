export declare class Balance {
    /**
    * The current balance minus any reserved balance.
    */
    'available': number;
    /**
    * The current balance of funds in the balance account. These are the funds from all transactions with a value date in the past that have not yet been paid out.
    */
    'balance': number;
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.
    */
    'currency': string;
    /**
    * The amount of funds that Adyen has processed for this account, but will be settled in a future date.  For more information, see how to settle funds for users in your [platform](https://docs.adyen.com/platforms/settle-funds) and [marketplace](https://docs.adyen.com/marketplaces/settle-funds).
    */
    'pending'?: number;
    /**
    * The amount reserved for payments that have been [authorised](https://docs.adyen.com/issuing/payment-stages/#authorised), but not yet [captured](https://docs.adyen.com/issuing/payment-stages/#captured) by the merchant.  Applies only to [Adyen-issued cards](https://docs.adyen.com/issuing).
    */
    'reserved': number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
