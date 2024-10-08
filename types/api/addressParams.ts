import type { AddressMetadataTagApi } from './addressMetadata';

export interface AddressImplementation {
  address: string;
  name?: string | null;
}

export interface AddressTag {
  label: string;
  display_name: string;
  address_hash: string;
}

export interface WatchlistName {
  label: string;
  display_name: string;
}

export interface UserTags {
  private_tags: Array<AddressTag> | null;
  watchlist_names: Array<WatchlistName> | null;
  public_tags: Array<AddressTag> | null;
}

export type AddressParamBasic = {
  hash: string;
  implementations: Array<AddressImplementation> | null;
  name: string | null;
  is_contract: boolean;
  is_verified: boolean | null;
  ens_domain_name: string | null;
  metadata?: {
    reputation: number | null;
    tags: Array<AddressMetadataTagApi>;
  } | null;
}

export type AddressParam = UserTags & AddressParamBasic;
