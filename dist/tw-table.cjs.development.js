'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactTable = require('@tanstack/react-table');
var clsx = _interopDefault(require('clsx'));

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

var css_248z = "/*! tailwindcss v3.4.10 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.absolute{position:absolute}.mb-2\\.5{margin-bottom:.625rem}.mb-4{margin-bottom:1rem}.mr-2{margin-right:.5rem}.block{display:block}.flex{display:flex}.\\!table{display:table!important}.table{display:table}.h-14{height:3.5rem}.h-3{height:.75rem}.h-32{height:8rem}.h-px{height:1px}.w-3{width:.75rem}.w-full{width:100%}.w-px{width:1px}.min-w-48{min-width:12rem}.min-w-full{min-width:100%}.max-w-48{max-width:12rem}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.divide-gray-200>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgb(229 231 235/var(--tw-divide-opacity))}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-md{border-radius:.375rem}.border{border-width:1px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-none{border-style:none}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bg-sky-100{--tw-bg-opacity:1;background-color:rgb(224 242 254/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.p-0{padding:0}.p-2{padding:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-3\\.5{padding-left:.875rem;padding-right:.875rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-sm{font-size:.875rem;line-height:1.25rem}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175/var(--tw-placeholder-opacity))}.placeholder-gray-400::placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175/var(--tw-placeholder-opacity))}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.before\\:float-left:before{content:var(--tw-content);float:left}.before\\:font-bold:before{content:var(--tw-content);font-weight:700}.before\\:content-\\[attr\\(data-label\\)\\]:before{--tw-content:attr(data-label);content:var(--tw-content)}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.focus\\:border-sky-500:focus{--tw-border-opacity:1;border-color:rgb(14 165 233/var(--tw-border-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-sky-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(14 165 233/var(--tw-ring-opacity))}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:bg-gray-200:disabled{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}@media (min-width:640px){.sm\\:static{position:static}.sm\\:mb-0{margin-bottom:0}.sm\\:table-cell{display:table-cell}.sm\\:table-row{display:table-row}.sm\\:rounded-lg{border-radius:.5rem}.sm\\:border-none{border-style:none}.sm\\:text-left{text-align:left}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}.sm\\:before\\:float-none:before{content:var(--tw-content);float:none}.sm\\:before\\:font-normal:before{content:var(--tw-content);font-weight:400}.sm\\:before\\:content-\\[\\'\\'\\]:before{--tw-content:\"\";content:var(--tw-content)}}";
styleInject(css_248z,{"insertAt":"top"});

var MOBILE_TABLE_HEAD_CLASSNAMES = {
  'card': "border-none h-px m-negative-1 overflow-hidden p-0 absolute sm:static w-px",
  "scroll": ""
};
var MOBILE_TABLE_ROW_CLASSNAMES = {
  'card': "border sm:border-none block sm:table-row mb-2.5 sm:mb-0",
  "scroll": ""
};
var MOBILE_TABLE_DESCRIPTION_CLASSNAMES = {
  'card': "border-b flex justify-between items-center sm:table-cell text-right sm:text-left before:content-[attr(data-label)] sm:before:content-[''] before:float-left sm:before:float-none before:font-bold sm:before:font-normal",
  "scroll": ""
};

var TableRow = function TableRow(_ref) {
  var row = _ref.row,
    selection = _ref.selection,
    responsivenessType = _ref.responsivenessType;
  console.log('row', row);
  return React__default.createElement("tr", {
    className: clsx('border-gray-200', selection && row.getIsSelected() && 'bg-sky-100', responsivenessType && MOBILE_TABLE_ROW_CLASSNAMES[responsivenessType])
  }, row.getVisibleCells().map(function (cell, idx) {
    return React__default.createElement("td", {
      key: cell.id,
      "data-label": cell.column.columnDef.header,
      className: clsx("px-3.5 py-2 min-w-48 h-14 whitespace-nowrap", responsivenessType && MOBILE_TABLE_DESCRIPTION_CLASSNAMES[responsivenessType])
    }, idx === 0 && selection && React__default.createElement("input", {
      type: "checkbox",
      className: "mr-2",
      checked: row.getIsSelected(),
      disabled: !row.getCanSelect(),
      onChange: row.getToggleSelectedHandler()
    }), reactTable.flexRender(cell.column.columnDef.cell, cell.getContext()));
  }));
};

var Input = /*#__PURE__*/React.forwardRef(function (_ref, refProp) {
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
  var localRef = React.useRef(null);
  var ref = refProp || localRef;
  var _useState = React.useState(defaultValue),
    inputValue = _useState[0],
    setInputValue = _useState[1];
  React.useEffect(function () {
    setInputValue(defaultValue);
  }, [defaultValue]);
  if (isLoading) {
    return React__default.createElement("input", {
      className: 'block w-full px-3 py-2 border-2 border-gray-300 rounded-md skeleton',
      disabled: true
    });
  }
  return React__default.createElement("input", {
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
  return filterVariant === 'range' ? React__default.createElement("div", null, React__default.createElement("p", null, "not implemented lol")) : filterVariant === 'select' ? React__default.createElement("select", {
    onChange: function onChange(e) {
      return column.setFilterValue(e.target.value);
    },
    value: columnFilterValue == null ? void 0 : columnFilterValue.toString()
  }, React__default.createElement("option", {
    value: ""
  }, "not implemented lol")) : React__default.createElement(Input, {
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
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: className
  }, React__default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.75 19.5 8.25 12l7.5-7.5"
  }));
};

var ChevronRight = function ChevronRight(_ref) {
  var className = _ref.className;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: className
  }, React__default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m8.25 4.5 7.5 7.5-7.5 7.5"
  }));
};

var ChevronUp = function ChevronUp(_ref) {
  var className = _ref.className;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: className
  }, React__default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 15.75 7.5-7.5 7.5 7.5"
  }));
};

var ChevronDown = function ChevronDown(_ref) {
  var className = _ref.className;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: className
  }, React__default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
  }));
};

var MagnifyingGlass = function MagnifyingGlass(_ref) {
  var className = _ref.className;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: className
  }, React__default.createElement("path", {
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
    "chevron-left": React__default.createElement(ChevronLeft, Object.assign({}, svgProps)),
    'chevron-right': React__default.createElement(ChevronRight, Object.assign({}, svgProps)),
    'chevron-up': React__default.createElement(ChevronUp, Object.assign({}, svgProps)),
    'chevron-down': React__default.createElement(ChevronDown, Object.assign({}, svgProps)),
    'magnifying-glass': React__default.createElement(MagnifyingGlass, Object.assign({}, svgProps))
  };
  return icons[name];
};

var TableHead = function TableHead(_ref) {
  var headerGroup = _ref.headerGroup;
  var _useState = React.useState(null),
    targetSearchCol = _useState[0],
    setTargetSearchCol = _useState[1];
  return React__default.createElement("tr", {
    key: headerGroup.id,
    className: clsx("w-full", MOBILE_TABLE_ROW_CLASSNAMES)
  }, headerGroup.headers.map(function (header) {
    return React__default.createElement("th", {
      key: header.id,
      className: "px-3.5 py-2 text-left min-w-48 max-w-48 h-14",
      onBlur: function onBlur() {
        if (header.column.getFilterValue()) return;
        setTargetSearchCol(null);
      },
      scope: 'col'
    }, targetSearchCol !== header.id && React__default.createElement("div", {
      className: "flex justify-between items-center"
    }, reactTable.flexRender(header.column.columnDef.header, header.getContext()), React__default.createElement("div", {
      className: "flex space-x-2"
    }, header.column.getCanFilter() && React__default.createElement("button", {
      className: "p-2 rounded-full shadow-md hover:bg-gray-100",
      onClick: function onClick() {
        return header.column.getCanFilter() && setTargetSearchCol(header.id);
      }
    }, React__default.createElement(Icon, {
      name: "magnifying-glass",
      className: "h-3 w-3"
    })), header.column.getCanSort() && React__default.createElement("div", {
      className: "flex flex-col"
    }, React__default.createElement("button", {
      className: "p-2 rounded-full shadow-md hover:bg-gray-100",
      onClick: function onClick() {
        return header.column.toggleSorting();
      }
    }, header.column.getIsSorted() === 'desc' ? React__default.createElement(Icon, {
      name: "chevron-down",
      className: "h-3 w-3"
    }) : React__default.createElement(Icon, {
      name: "chevron-up",
      className: "h-3 w-3"
    }))))), targetSearchCol === header.id && header.column.getCanFilter() && React__default.createElement(TableFilter, {
      column: header.column
    }));
  }));
};

var PageControls = function PageControls(_ref) {
  var table = _ref.table;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("button", {
    className: "flex px-3 py-1 border rounded-full bg-gray-50 hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed",
    onClick: function onClick() {
      return table.firstPage();
    },
    disabled: !table.getCanPreviousPage()
  }, React__default.createElement(Icon, {
    name: "chevron-left",
    className: "h-3 w-3"
  }), React__default.createElement(Icon, {
    name: "chevron-left",
    className: "h-3 w-3"
  })), React__default.createElement("button", {
    className: "px-3 py-1 border rounded-full bg-gray-50 hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed",
    onClick: function onClick() {
      return table.previousPage();
    },
    disabled: !table.getCanPreviousPage()
  }, React__default.createElement(Icon, {
    name: "chevron-left",
    className: "h-3 w-3"
  })), React__default.createElement("button", {
    className: "px-3 py-1 border rounded-full bg-gray-50 hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed",
    onClick: function onClick() {
      return table.nextPage();
    },
    disabled: !table.getCanNextPage()
  }, React__default.createElement(Icon, {
    name: "chevron-right",
    className: "h-3 w-3"
  })), React__default.createElement("button", {
    className: "flex px-3 py-1 border rounded-full bg-gray-50 hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed",
    onClick: function onClick() {
      return table.lastPage();
    },
    disabled: !table.getCanNextPage()
  }, React__default.createElement(Icon, {
    name: "chevron-right",
    className: "h-3 w-3"
  }), React__default.createElement(Icon, {
    name: "chevron-right",
    className: "h-3 w-3"
  })));
};

var PageSizeControls = function PageSizeControls(_ref) {
  var table = _ref.table;
  return React__default.createElement("div", {
    className: "space-x-2"
  }, React__default.createElement("span", null, "Show"), React__default.createElement("select", {
    value: table.getState().pagination.pageSize,
    onChange: function onChange(e) {
      table.setPageSize(Number(e.target.value));
    },
    className: "border rounded px-2 py-1 bg-white text-sm"
  }, [10, 20, 30, 40, 50].map(function (pageSize) {
    return React__default.createElement("option", {
      key: pageSize,
      value: pageSize
    }, pageSize);
  })));
};

var Info = function Info(_ref) {
  var table = _ref.table;
  return React__default.createElement("div", {
    className: "flex justify-between"
  }, React__default.createElement("div", {
    className: "text-sm text-gray-600"
  }, "Showing ", table.getRowModel().rows.length.toLocaleString(), " of", ' ', table.getRowCount().toLocaleString(), " Rows"), React__default.createElement("div", null, React__default.createElement("span", {
    className: "flex items-center gap-1 text-sm"
  }, React__default.createElement("div", null, "Page"), React__default.createElement("strong", null, table.getState().pagination.pageIndex + 1, " of", ' ', table.getPageCount().toLocaleString()))));
};

var Pagination = function Pagination(_ref) {
  var table = _ref.table;
  return React__default.createElement("div", {
    className: "py-2"
  }, React__default.createElement("div", {
    className: "flex items-center justify-between gap-4 mb-4"
  }, React__default.createElement("div", {
    className: "flex items-center gap-2"
  }, React__default.createElement(PageControls, {
    table: table
  })), React__default.createElement(PageSizeControls, {
    table: table
  })), React__default.createElement(Info, {
    table: table
  }));
};

var Table = function Table(_ref) {
  var columns = _ref.columns,
    data = _ref.data,
    _ref$responsivenessTy = _ref.responsivenessType,
    responsivenessType = _ref$responsivenessTy === void 0 ? 'card' : _ref$responsivenessTy;
  var _React$useState = React__default.useState([]),
    columnFilters = _React$useState[0],
    setColumnFilters = _React$useState[1];
  var _React$useState2 = React__default.useState([]),
    sorting = _React$useState2[0],
    setSorting = _React$useState2[1];
  var _React$useState3 = React__default.useState({
      pageIndex: 0,
      pageSize: 10
    }),
    pagination = _React$useState3[0],
    setPagination = _React$useState3[1];
  var table = reactTable.useReactTable({
    columns: columns,
    data: data,
    filterFns: {},
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: reactTable.getCoreRowModel(),
    getFilteredRowModel: reactTable.getFilteredRowModel(),
    getSortedRowModel: reactTable.getSortedRowModel(),
    getPaginationRowModel: reactTable.getPaginationRowModel(),
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    state: {
      sorting: sorting,
      pagination: pagination,
      columnFilters: columnFilters
    },
    enableSortingRemoval: false
  });
  return React__default.createElement("div", {
    className: "flex flex-col flex-end"
  }, React__default.createElement("div", {
    className: "overflow-x-auto"
  }, React__default.createElement("div", {
    className: "shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg"
  }, React__default.createElement("table", {
    className: "min-w-full divide-y divide-gray-200"
  }, React__default.createElement("thead", {
    className: clsx('bg-gray-50 border', responsivenessType && MOBILE_TABLE_HEAD_CLASSNAMES[responsivenessType])
  }, table.getHeaderGroups().map(function (headerGroup) {
    return React__default.createElement(TableHead, {
      key: headerGroup.id,
      headerGroup: headerGroup,
      responsivenessType: responsivenessType
    });
  })), React__default.createElement("tbody", null, table.getRowModel().rows.length ? table.getRowModel().rows.map(function (row) {
    return React__default.createElement(TableRow, {
      key: row.id,
      row: row,
      responsivenessType: responsivenessType
    });
  }) : React__default.createElement("tr", {
    className: "text-center h-32"
  }, React__default.createElement("td", {
    colSpan: 12
  }, "Empty")))))), pagination && React__default.createElement(Pagination, {
    table: table
  }));
};

exports.Table = Table;
//# sourceMappingURL=tw-table.cjs.development.js.map
