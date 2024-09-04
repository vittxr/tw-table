import React, { forwardRef, useRef, useState, useEffect } from 'react';
import { flexRender, useReactTable, getCoreRowModel, getFilteredRowModel, getSortedRowModel, getPaginationRowModel } from '@tanstack/react-table';
import clsx from 'clsx';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*! tailwindcss v3.4.10 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.mb-4{margin-bottom:1rem}.mr-2{margin-right:.5rem}.block{display:block}.flex{display:flex}.\\!table{display:table!important}.table{display:table}.h-14{height:3.5rem}.h-3{height:.75rem}.h-32{height:8rem}.w-3{width:.75rem}.w-full{width:100%}.min-w-48{min-width:12rem}.min-w-full{min-width:100%}.max-w-48{max-width:12rem}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.divide-gray-200>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgb(229 231 235/var(--tw-divide-opacity))}.overflow-x-auto{overflow-x:auto}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-md{border-radius:.375rem}.border{border-width:1px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-none{border-style:none}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bg-sky-100{--tw-bg-opacity:1;background-color:rgb(224 242 254/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.p-2{padding:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-3\\.5{padding-left:.875rem;padding-right:.875rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175/var(--tw-placeholder-opacity))}.placeholder-gray-400::placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175/var(--tw-placeholder-opacity))}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media screen and (max-width:600px){table{border:0}table thead{clip:rect(0 0 0 0);border:none;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}table tr{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}table td{border-bottom:1px solid #ddd;display:block;font-size:.8em;text-align:right}table td:before{content:attr(data-label);float:left;font-weight:700;text-transform:uppercase}table td:last-child{border-bottom:0}}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.focus\\:border-sky-500:focus{--tw-border-opacity:1;border-color:rgb(14 165 233/var(--tw-border-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-sky-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(14 165 233/var(--tw-ring-opacity))}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:bg-gray-200:disabled{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}@media (min-width:640px){.sm\\:rounded-lg{border-radius:.5rem}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}";
styleInject(css_248z,{"insertAt":"top"});

var TableRow = function TableRow(_ref) {
  var row = _ref.row,
    selection = _ref.selection;
  return React.createElement("tr", {
    className: clsx('border border-gray-200 hover:bg-gray-100', selection && row.getIsSelected() && 'bg-sky-100')
  }, row.getVisibleCells().map(function (cell, idx) {
    return React.createElement("td", {
      key: cell.id,
      className: "px-3.5 py-2 min-w-48 h-14 whitespace-nowrap"
    }, idx === 0 && selection && React.createElement("input", {
      type: "checkbox",
      className: "mr-2",
      checked: row.getIsSelected(),
      disabled: !row.getCanSelect(),
      onChange: row.getToggleSelectedHandler()
    }), flexRender(cell.column.columnDef.cell, cell.getContext()));
  }));
};

var Input = /*#__PURE__*/forwardRef(function (_ref, refProp) {
  var id = _ref.id,
    type = _ref.type,
    placeholder = _ref.placeholder,
    _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? '' : _ref$defaultValue,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _onChange = _ref.onChange,
    _ref$isLoading = _ref.isLoading,
    isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
    _onKeyDown = _ref.onKeyDown,
    _ref$autoFocus = _ref.autoFocus,
    autoFocus = _ref$autoFocus === void 0 ? false : _ref$autoFocus;
  var localRef = useRef(null);
  var ref = refProp || localRef;
  var _useState = useState(defaultValue),
    inputValue = _useState[0],
    setInputValue = _useState[1];
  useEffect(function () {
    setInputValue(defaultValue);
  }, [defaultValue]);
  if (isLoading) {
    return React.createElement("input", {
      className: 'block w-full px-3 py-2 border-2 border-gray-300 rounded-md skeleton',
      disabled: true
    });
  }
  return React.createElement("input", {
    id: id,
    name: id,
    type: type,
    placeholder: placeholder,
    autoComplete: id,
    value: inputValue,
    required: required,
    className: 'block w-full px-3 py-2 placeholder-gray-400 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm',
    onChange: function onChange(e) {
      setInputValue(e.target.value);
      _onChange && _onChange(e);
    },
    onKeyDown: function onKeyDown(e) {
      _onKeyDown && _onKeyDown(e);
    },
    ref: ref,
    autoFocus: autoFocus
  });
});

function TableFilter(_ref) {
  var _column$columnDef$met;
  var column = _ref.column;
  var columnFilterValue = column.getFilterValue();
  var _ref2 = (_column$columnDef$met = column.columnDef.meta) != null ? _column$columnDef$met : {},
    filterVariant = _ref2.filterVariant;
  return filterVariant === 'range' ? React.createElement("div", null, React.createElement("p", null, "not implemented lol")) : filterVariant === 'select' ? React.createElement("select", {
    onChange: function onChange(e) {
      return column.setFilterValue(e.target.value);
    },
    value: columnFilterValue == null ? void 0 : columnFilterValue.toString()
  }, React.createElement("option", {
    value: ""
  }, "not implemented lol")) : React.createElement(Input, {
    className: "border-none animate-scale-x",
    onChange: function onChange(e) {
      column.setFilterValue(e.target.value);
    },
    placeholder: column.columnDef.header + "...",
    type: "text",
    value: columnFilterValue != null ? columnFilterValue : '',
    autoFocus: true
  });
}

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}

var ChevronLeft = function ChevronLeft(_ref) {
  var className = _ref.className;
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: className
  }, React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.75 19.5 8.25 12l7.5-7.5"
  }));
};

var ChevronRight = function ChevronRight(_ref) {
  var className = _ref.className;
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: className
  }, React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m8.25 4.5 7.5 7.5-7.5 7.5"
  }));
};

var ChevronUp = function ChevronUp(_ref) {
  var className = _ref.className;
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: className
  }, React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 15.75 7.5-7.5 7.5 7.5"
  }));
};

var ChevronDown = function ChevronDown(_ref) {
  var className = _ref.className;
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: className
  }, React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
  }));
};

var MagnifyingGlass = function MagnifyingGlass(_ref) {
  var className = _ref.className;
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: className
  }, React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
};

var _excluded = ["name"];
var Icon = function Icon(props) {
  var name = props.name,
    svgProps = _objectWithoutPropertiesLoose(props, _excluded);
  var icons = {
    "chevron-left": React.createElement(ChevronLeft, Object.assign({}, svgProps)),
    'chevron-right': React.createElement(ChevronRight, Object.assign({}, svgProps)),
    'chevron-up': React.createElement(ChevronUp, Object.assign({}, svgProps)),
    'chevron-down': React.createElement(ChevronDown, Object.assign({}, svgProps)),
    'magnifying-glass': React.createElement(MagnifyingGlass, Object.assign({}, svgProps))
  };
  return icons[name];
};

var TableHead = function TableHead(_ref) {
  var headerGroup = _ref.headerGroup;
  var _useState = useState(null),
    targetSearchCol = _useState[0],
    setTargetSearchCol = _useState[1];
  return React.createElement("tr", {
    key: headerGroup.id,
    className: "w-full"
  }, headerGroup.headers.map(function (header) {
    return React.createElement("th", {
      key: header.id,
      className: "px-3.5 py-2 text-left min-w-48 max-w-48 h-14",
      onBlur: function onBlur() {
        if (header.column.getFilterValue()) return;
        setTargetSearchCol(null);
      },
      scope: 'col'
    }, targetSearchCol !== header.id && React.createElement("div", {
      className: "flex justify-between items-center"
    }, flexRender(header.column.columnDef.header, header.getContext()), React.createElement("div", {
      className: "flex space-x-2"
    }, header.column.getCanFilter() && React.createElement("button", {
      className: "p-2 rounded-full shadow-md hover:bg-gray-100",
      onClick: function onClick() {
        return header.column.getCanFilter() && setTargetSearchCol(header.id);
      }
    }, React.createElement(Icon, {
      name: "magnifying-glass",
      className: "h-3 w-3"
    })), header.column.getCanSort() && React.createElement("div", {
      className: "flex flex-col"
    }, React.createElement("button", {
      className: "p-2 rounded-full shadow-md hover:bg-gray-100",
      onClick: function onClick() {
        return header.column.toggleSorting();
      }
    }, header.column.getIsSorted() === 'desc' ? React.createElement(Icon, {
      name: "chevron-down",
      className: "h-3 w-3"
    }) : React.createElement(Icon, {
      name: "chevron-up",
      className: "h-3 w-3"
    }))))), targetSearchCol === header.id && header.column.getCanFilter() && React.createElement(TableFilter, {
      column: header.column
    }));
  }));
};

var PageControls = function PageControls(_ref) {
  var table = _ref.table;
  return React.createElement(React.Fragment, null, React.createElement("button", {
    className: "flex px-3 py-1 border rounded-full bg-gray-50 hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed",
    onClick: function onClick() {
      return table.firstPage();
    },
    disabled: !table.getCanPreviousPage()
  }, React.createElement(Icon, {
    name: "chevron-left",
    className: "h-3 w-3"
  }), React.createElement(Icon, {
    name: "chevron-left",
    className: "h-3 w-3"
  })), React.createElement("button", {
    className: "px-3 py-1 border rounded-full bg-gray-50 hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed",
    onClick: function onClick() {
      return table.previousPage();
    },
    disabled: !table.getCanPreviousPage()
  }, React.createElement(Icon, {
    name: "chevron-left",
    className: "h-3 w-3"
  })), React.createElement("button", {
    className: "px-3 py-1 border rounded-full bg-gray-50 hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed",
    onClick: function onClick() {
      return table.nextPage();
    },
    disabled: !table.getCanNextPage()
  }, React.createElement(Icon, {
    name: "chevron-right",
    className: "h-3 w-3"
  })), React.createElement("button", {
    className: "flex px-3 py-1 border rounded-full bg-gray-50 hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed",
    onClick: function onClick() {
      return table.lastPage();
    },
    disabled: !table.getCanNextPage()
  }, React.createElement(Icon, {
    name: "chevron-right",
    className: "h-3 w-3"
  }), React.createElement(Icon, {
    name: "chevron-right",
    className: "h-3 w-3"
  })));
};

var PageSizeControls = function PageSizeControls(_ref) {
  var table = _ref.table;
  return React.createElement("div", {
    className: "space-x-2"
  }, React.createElement("span", null, "Show"), React.createElement("select", {
    value: table.getState().pagination.pageSize,
    onChange: function onChange(e) {
      table.setPageSize(Number(e.target.value));
    },
    className: "border rounded px-2 py-1 bg-white text-sm"
  }, [10, 20, 30, 40, 50].map(function (pageSize) {
    return React.createElement("option", {
      key: pageSize,
      value: pageSize
    }, pageSize);
  })));
};

var Info = function Info(_ref) {
  var table = _ref.table;
  return React.createElement("div", {
    className: "flex justify-between"
  }, React.createElement("div", {
    className: "text-sm text-gray-600"
  }, "Showing ", table.getRowModel().rows.length.toLocaleString(), " of", ' ', table.getRowCount().toLocaleString(), " Rows"), React.createElement("div", null, React.createElement("span", {
    className: "flex items-center gap-1 text-sm"
  }, React.createElement("div", null, "Page"), React.createElement("strong", null, table.getState().pagination.pageIndex + 1, " of", ' ', table.getPageCount().toLocaleString()))));
};

var Pagination = function Pagination(_ref) {
  var table = _ref.table;
  return React.createElement("div", {
    className: "py-2"
  }, React.createElement("div", {
    className: "flex items-center justify-between gap-4 mb-4"
  }, React.createElement("div", {
    className: "flex items-center gap-2"
  }, React.createElement(PageControls, {
    table: table
  })), React.createElement(PageSizeControls, {
    table: table
  })), React.createElement(Info, {
    table: table
  }));
};

var Table = function Table(_ref) {
  var columns = _ref.columns,
    data = _ref.data;
  var _React$useState = React.useState([]),
    columnFilters = _React$useState[0],
    setColumnFilters = _React$useState[1];
  var _React$useState2 = React.useState([]),
    sorting = _React$useState2[0],
    setSorting = _React$useState2[1];
  var _React$useState3 = React.useState({
      pageIndex: 0,
      pageSize: 10
    }),
    pagination = _React$useState3[0],
    setPagination = _React$useState3[1];
  var table = useReactTable({
    columns: columns,
    data: data,
    filterFns: {},
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    state: {
      sorting: sorting,
      pagination: pagination,
      columnFilters: columnFilters
    },
    enableSortingRemoval: false
  });
  return React.createElement("div", {
    className: "flex flex-col flex-end"
  }, React.createElement("div", {
    className: "overflow-x-auto"
  }, React.createElement("div", {
    className: "shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg"
  }, React.createElement("table", {
    className: "min-w-full divide-y divide-gray-200"
  }, React.createElement("thead", {
    className: "bg-gray-50 border"
  }, table.getHeaderGroups().map(function (headerGroup) {
    return React.createElement(TableHead, {
      key: headerGroup.id,
      headerGroup: headerGroup
    });
  })), React.createElement("tbody", null, table.getRowModel().rows.length ? table.getRowModel().rows.map(function (row) {
    return React.createElement(TableRow, {
      key: row.id,
      row: row
    });
  }) : React.createElement("tr", {
    className: "text-center h-32"
  }, React.createElement("td", {
    colSpan: 12
  }, "Empty")))))), pagination && React.createElement(Pagination, {
    table: table
  }));
};

export { Table };
//# sourceMappingURL=tw-table.esm.js.map
