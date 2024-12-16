import Service from "../../service";
import Client from "../../client";
import { GrantOffer, GrantOffers } from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
export declare class GrantOffersApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Get all available grant offers
    * @param requestOptions {@link IRequest.Options }
    * @param accountHolderId {@link string } The unique identifier of the grant account.
    * @return {@link GrantOffers }
    */
    getAllAvailableGrantOffers(accountHolderId?: string, requestOptions?: IRequest.Options): Promise<GrantOffers>;
    /**
    * @summary Get a grant offer
    * @param grantOfferId {@link string } The unique identifier of the grant offer.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GrantOffer }
    */
    getGrantOffer(grantOfferId: string, requestOptions?: IRequest.Options): Promise<GrantOffer>;
}
