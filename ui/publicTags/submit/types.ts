import type { AddressMetadataTagType } from 'types/api/addressMetadata';

export interface FormFields {
  requesterName: string;
  requesterEmail: string;
  companyName: string | undefined;
  companyWebsite: string | undefined;
  addresses: Array<{ hash: string }>;
  tags: Array<FormFieldTag>;
  description: string | undefined;
}

export interface FormFieldTag {
  name: string;
  type: {
    label: string;
    value: AddressMetadataTagType;
  };
  url: string | undefined;
  bgColor: string | undefined;
  textColor: string | undefined;
  tooltipDescription: string | undefined;
}
