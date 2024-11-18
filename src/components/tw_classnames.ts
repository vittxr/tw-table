export const CARD_TABLE_HEAD_CLASSNAMES =
  'border-none h-px m-negative-1 overflow-hidden p-0 absolute w-px';
export const CARD_TABLE_ROW_CLASSNAMES = 'border block mt-2.5';
export const CARD_TABLE_DESCRIPTiON_CLASSNAMES =
  'border-b flex justify-between items-center text-right before:content-[attr(data-label)] before:float-left before:font-bold';

export const TABLE_HEAD_CLASSNAMES = {
  card: CARD_TABLE_HEAD_CLASSNAMES,
  scroll: '',
};
export const TABLE_ROW_CLASSNAMES = {
  card: CARD_TABLE_ROW_CLASSNAMES,
  scroll: '',
};
export const TABLE_DESCRIPTION_CLASSNAMES = {
  card: CARD_TABLE_DESCRIPTiON_CLASSNAMES,
  scroll: '',
};

export const RESPONSIVE_TABLE_HEAD_CLASSNAMES = {
  card: CARD_TABLE_HEAD_CLASSNAMES + ' sm:static',
  scroll: '',
};
export const RESPONSIVE_TABLE_ROW_CLASSNAMES = {
  card: CARD_TABLE_ROW_CLASSNAMES + ' sm:border-none sm:table-row sm:mt-0',
  scroll: '',
};
export const RESPONSIVE_TABLE_DESCRIPTION_CLASSNAMES = {
  card:
    CARD_TABLE_DESCRIPTiON_CLASSNAMES +
    " sm:table-cell sm:text-left sm:before:content-[''] sm:before:float-none sm:before:font-normal",
  scroll: '',
};
