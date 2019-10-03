import { Aggregate, IsAuditable } from '@app/core';

export interface Image extends Aggregate, IsAuditable {
  name: string;
  url: string;
}
