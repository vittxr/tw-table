export const CARD_TABLE_HEAD_CLASSNAMES =
  'border-none h-px m-negative-1 overflow-hidden p-0 absolute w-px';
export const CARD_TABLE_ROW_CLASSNAMES = 'border block mt-2.5';
export const CARD_TABLE_DESCRIPTiON_CLASSNAMES =
  'border-b flex justify-between items-center text-right before:content-[attr(data-label)] before:float-left before:font-bold pl-8';

export const SCROLL_TABLE_HEAD_CLASSNAMES = 'border-none';
export const SCROLL_TABLE_DESCRIPTION_CLASSNAMES = 'border-b';

export const CARD_CHECKBOX_CLASSNAMES = 'absolute left-2';
export const SCROLL_CHECKBOX_CLASSNAMES = 'mr-2';

export const TABLE_HEAD_CLASSNAMES = {
  card: CARD_TABLE_HEAD_CLASSNAMES,
  scroll: SCROLL_TABLE_HEAD_CLASSNAMES,
};
export const TABLE_ROW_CLASSNAMES = {
  card: CARD_TABLE_ROW_CLASSNAMES,
  scroll: '',
};
export const TABLE_DESCRIPTION_CLASSNAMES = {
  card: CARD_TABLE_DESCRIPTiON_CLASSNAMES,
  scroll: SCROLL_TABLE_DESCRIPTION_CLASSNAMES,
};
export const TABLE_ROW_CHECKBOX_CLASSNAMES = {
  card: CARD_CHECKBOX_CLASSNAMES,
  scroll: SCROLL_CHECKBOX_CLASSNAMES,
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
    " sm:table-cell sm:text-left sm:before:content-[''] sm:before:float-none sm:before:font-normal sm:pl-3.5",
  scroll: '',
};
export const RESPONSIVE_TABLE_ROW_CHECKBOX_CLASSNAMES = {
  card: CARD_CHECKBOX_CLASSNAMES + ' sm:static sm:mr-2',
  scroll: '',
};
