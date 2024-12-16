import { AccelInfo } from './accelInfo';
import { AfterpayTouchInfo } from './afterpayTouchInfo';
import { AmexInfo } from './amexInfo';
import { ApplePayInfo } from './applePayInfo';
import { BcmcInfo } from './bcmcInfo';
import { CartesBancairesInfo } from './cartesBancairesInfo';
import { ClearpayInfo } from './clearpayInfo';
import { GenericPmWithTdiInfo } from './genericPmWithTdiInfo';
import { GiroPayInfo } from './giroPayInfo';
import { GooglePayInfo } from './googlePayInfo';
import { JCBInfo } from './jCBInfo';
import { KlarnaInfo } from './klarnaInfo';
import { MealVoucherFRInfo } from './mealVoucherFRInfo';
import { NyceInfo } from './nyceInfo';
import { PayMeInfo } from './payMeInfo';
import { PayPalInfo } from './payPalInfo';
import { PulseInfo } from './pulseInfo';
import { SodexoInfo } from './sodexoInfo';
import { SofortInfo } from './sofortInfo';
import { StarInfo } from './starInfo';
import { SwishInfo } from './swishInfo';
import { TicketInfo } from './ticketInfo';
import { TwintInfo } from './twintInfo';
import { VippsInfo } from './vippsInfo';
import { WeChatPayInfo } from './weChatPayInfo';
import { WeChatPayPosInfo } from './weChatPayPosInfo';
export declare class PaymentMethod {
    'accel'?: AccelInfo;
    'afterpayTouch'?: AfterpayTouchInfo;
    /**
    * Indicates whether receiving payments is allowed. This value is set to **true** by Adyen after screening your merchant account.
    */
    'allowed'?: boolean;
    'amex'?: AmexInfo;
    'applePay'?: ApplePayInfo;
    'bcmc'?: BcmcInfo;
    /**
    * The unique identifier of the business line. Required if you are a [platform model](https://docs.adyen.com/platforms).
    */
    'businessLineId'?: string;
    'cartesBancaires'?: CartesBancairesInfo;
    'clearpay'?: ClearpayInfo;
    /**
    * The list of countries where a payment method is available. By default, all countries supported by the payment method.
    */
    'countries'?: Array<string>;
    'cup'?: GenericPmWithTdiInfo;
    /**
    * The list of currencies that a payment method supports. By default, all currencies supported by the payment method.
    */
    'currencies'?: Array<string>;
    /**
    * The list of custom routing flags to route payment to the intended acquirer.
    */
    'customRoutingFlags'?: Array<string>;
    'diners'?: GenericPmWithTdiInfo;
    'discover'?: GenericPmWithTdiInfo;
    'eftpos_australia'?: GenericPmWithTdiInfo;
    /**
    * Indicates whether the payment method is enabled (**true**) or disabled (**false**).
    */
    'enabled'?: boolean;
    'giroPay'?: GiroPayInfo;
    'girocard'?: GenericPmWithTdiInfo;
    'googlePay'?: GooglePayInfo;
    /**
    * The identifier of the resource.
    */
    'id': string;
    'ideal'?: GenericPmWithTdiInfo;
    'interac_card'?: GenericPmWithTdiInfo;
    'jcb'?: JCBInfo;
    'klarna'?: KlarnaInfo;
    'maestro'?: GenericPmWithTdiInfo;
    'mc'?: GenericPmWithTdiInfo;
    'mealVoucher_FR'?: MealVoucherFRInfo;
    'nyce'?: NyceInfo;
    'payme'?: PayMeInfo;
    'paypal'?: PayPalInfo;
    'pulse'?: PulseInfo;
    /**
    * Your reference for the payment method. Supported characters a-z, A-Z, 0-9.
    */
    'reference'?: string;
    /**
    * The sales channel.
    */
    'shopperInteraction'?: string;
    'sodexo'?: SodexoInfo;
    'sofort'?: SofortInfo;
    'star'?: StarInfo;
    /**
    * The unique identifier of the store for which to configure the payment method, if any.
    */
    'storeIds'?: Array<string>;
    'swish'?: SwishInfo;
    'ticket'?: TicketInfo;
    'twint'?: TwintInfo;
    /**
    * Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).
    */
    'type'?: string;
    /**
    * Payment method status. Possible values: * **valid** * **pending** * **invalid** * **rejected**
    */
    'verificationStatus'?: PaymentMethod.VerificationStatusEnum;
    'vipps'?: VippsInfo;
    'visa'?: GenericPmWithTdiInfo;
    'wechatpay'?: WeChatPayInfo;
    'wechatpay_pos'?: WeChatPayPosInfo;
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
export declare namespace PaymentMethod {
    enum VerificationStatusEnum {
        Valid = "valid",
        Pending = "pending",
        Invalid = "invalid",
        Rejected = "rejected"
    }
}
