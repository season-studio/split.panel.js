# split.panel.js

This library provides the functions to implement the split views in web page.

The functions as follow:
- support horizontal and vertical split view
- support specified the minum size of each panel in the CSS
- support swaping the size of panel by double click the split-bar of the panel or by calling the API
- support the custom style of the split view

This library can be embeded this library by \<script\> tag in web page directly. And it can also be used as an ES6 module.

## Example
```html
<html>
<head>
    <link rel="stylesheet" href="splitpanel.default.css" />
    <script type="text/javascript" src="splitpanel.js"></script>
</head>
<body>
    <div id="container" style="width:640px; height: 480px;">
        <div style="width: 320px;" d-split-auto="true">
            the first panel
        </div>
        <div style="min-width: 100px; width: 320px;">
            the second panel
        </div>
    </div>
    <script type="text/javascript">
        SplitPanel.init(document.getElementById("container"));
    </script>
</body>
</html>
```
The entire example page is [here](https://season-studio.github.io/demos/split-panel-js/index.html)

* * *
## API
<a name="init"></a>

## init(_containerElement, [_typeOrOpt])
initialize a splite view

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| _containerElement | <code>HTMLElement</code> |  | the element of the split view container |
| [_typeOrOpt] | <code>String</code> \| <code>Object</code> |  | type of the split view or the options of the view. |
| [_typeOrOpt.type] | <code>String</code> | <code>&quot;horizontal&quot;</code> | type of the split view, can be set as "horizontal" or "vertical" |
| [_typeOrOpt.autoswap] | <code>Boolean</code> | <code>true</code> | if the panel can be swap size when double click the split bar |
| [_typeOrOpt.swapsize] | <code>Number</code> | <code>26</code> | the delta size when swaping a panel to big status if the panel has no specified size |

<a name="dispose"></a>

## dispose(_containerElement)
dispose a split view

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| _containerElement | <code>HTMLElement</code> | the element of the split view container |

<a name="swap"></a>

## swap(_element)
trigger swaping the size of the panel

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| _element | <code>HTMLElement</code> | the element of the panel or an descendant element in the panel |

<a name="resetView"></a>

## resetView(_containerElement)
reset the split view.If change the contents of the view, you must call this function to reset the view.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| _containerElement | <code>HTMLElement</code> | the element of the splite view container |

### style of the element used for the split view
- **width | height**
  the initial size of the panel, width for the horizontal panel, height for the vertical panel
- **min-width | min-height**
  the minum size of the panel, min-width for the horizontal panel, min-height for the vertical panel

### attributes of the element used for the split view
- **d-split-auto**
  "true" for auto-size the panel in initializtion, unset this attribute will be treated as "false".
  if none panel set this attribute as "true", the library will set the first panel in the view as a auto-size panel.
- **other attributes start with "d-split-"**
  **RESERVED** for the library. Don't be used manually.

* * *
## Customize style of the split view
see in the [custom-style](https://github.com/season-studio/split.panel.js/blob/master/docs/custom-style.md) document.

* * *
&copy; 2021 Season Studio ([email: season-studio@outlook.com](mailto:season-studio@outlook.com))