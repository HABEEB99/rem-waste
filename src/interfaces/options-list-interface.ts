/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace IOptionsList {
  export type IOptions = IOption[];

  export interface IOption {
    id: number;
    size: number;
    hire_period_days: number;
    transport_cost?: number | null;
    per_tonne_cost?: number | null;
    price_before_vat: number;
    vat: number;
    postcode: string;
    area: unknown;
    forbidden: boolean;
    created_at: string;
    updated_at: string;
    allowed_on_road: boolean;
    allows_heavy_waste: boolean;
  }
}
