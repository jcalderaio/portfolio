import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "color": "#444",
        "fontSize": 16
    },
    "a": {
        "color": "#009688"
    },
    "blockquote": {
        "borderLeft": "5px solid navy",
        "color": "navy",
        "fontSize": "125%",
        "fontWeight": "400",
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "paddingLeft": 1.5
    },
    "text-center": {
        "textAlign": "center"
    },
    "my-blue": {
        "backgroundColor": "#337ab7"
    },
    "nav": {
        "background": "white",
        "boxShadow": "none",
        "height": 0
    },
    "nav i": {
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "position": "relative",
        "top": 5
    },
    "main": {
        "background": "url(../../img/bg.png) repeat",
        "paddingLeft": 190
    },
    "ulside-nav": {
        "width": 190
    },
    "ulside-nav li": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ulside-navfixed a": {
        "boxSizing": "content-box",
        "color": "#444",
        "display": "block",
        "lineHeight": "100%",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 12,
        "paddingLeft": 0
    },
    "ultable-of-contents lilogo aactive": {
        "border": "none",
        "fontWeight": "200"
    },
    "ultable-of-contents lilogo a:hover": {
        "border": "none",
        "fontWeight": "200"
    },
    "ulside-navfixed lilogo": {
        "backgroundColor": "#fafafa",
        "borderBottom": "1px solid #ddd",
        "boxSizing": "content-box",
        "minHeight": 90,
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 40,
        "paddingLeft": 30
    },
    "ulside-navfixed lilogo a": {
        "fontWeight": "200",
        "lineHeight": "100%"
    },
    "ultable-of-contents li:not(logo) aactive": {
        "backgroundColor": "#fafafa",
        "borderLeft": "3px solid"
    },
    "ultable-of-contents li:not(logo) a:hover": {
        "backgroundColor": "#fafafa",
        "borderLeft": "3px solid"
    },
    "ulside-navfixedtable-of-contents li:not(logo) a span": {
        "color": "#333 !important"
    },
    "ulslide-out li:not(logo) a span": {
        "color": "#333 !important"
    },
    "lilogo span": {
        "display": "block",
        "fontSize": 14
    },
    "container": {
        "width": "95%"
    },
    "h3": {
        "fontWeight": "200",
        "marginBottom": 60,
        "marginTop": 0,
        "paddingTop": 30,
        "paddingRight": 40,
        "paddingBottom": 30,
        "paddingLeft": 40,
        "textTransform": "uppercase"
    },
    "section": {
        "paddingBottom": 30,
        "paddingTop": 0
    },
    "full-height": {
        "height": 100 * vh
    },
    "introsection": {
        "background": "url(../../img/john-calderaio.jpg) no-repeat center center/cover",
        "position": "relative",
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "introsection container": {
        "color": "white",
        "fontWeight": "200",
        "left": 0,
        "position": "absolute",
        "top": 0
    },
    "introsection container *:not(span)": {
        "fontWeight": "300",
        "lineHeight": "150%",
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30,
        "textShadow": "1px 1px 5px rgba(0, 0, 0, 0.5)"
    },
    "introsection underline": {
        "borderBottom": "5px solid #2196f3",
        "font": "bold"
    },
    "waves-effectwaves-blue waves-ripple": {
        "backgroundColor": "rgba(33, 150, 243, 0.2)"
    },
    "card": {
        "marginBottom": 60
    },
    "card role": {
        "fontSize": 1.25,
        "position": "absolute",
        "right": 38,
        "top": 35
    },
    "card a": {
        "marginRight": 0
    },
    "card card-content": {
        "paddingBottom": 30
    },
    "card card-content p": {
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "card h5": {
        "fontSize": 1.5,
        "marginBottom": -0.5,
        "marginTop": 2
    },
    "card h6": {
        "fontWeight": "300",
        "letterSpacing": 1,
        "marginTop": 2,
        "textTransform": "uppercase"
    },
    "experience card-action": {
        "backgroundColor": "rgba(0, 0, 0, 0.02)",
        "border": "none"
    },
    "experience card cols12m2 a": {
        "display": "block"
    },
    "experience card cols12m2 a img": {
        "maxHeight": 60
    },
    "card-action span": {
        "fontSize": "85%",
        "color": "#999"
    },
    "card ul": {
        "marginBottom": 0
    },
    "card ul li": {
        "lineHeight": "200%",
        "listStyleType": "disc",
        "marginLeft": 24
    },
    "card ul li li": {
        "color": "#777",
        "fontSize": 13
    },
    "card card-title": {
        "fontSize": 24
    },
    "card iright": {
        "marginLeft": 10
    },
    "ahoverline": {
        "borderBottom": "3px solid transparent !important",
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 0,
        "paddingLeft": 3,
        "transition": "0.25s all",
        "MozTransition": "0.25s all",
        "WebkitTransition": "0.25s all"
    },
    "ahoverline:hover": {
        "borderBottom": "2px solid navy !important"
    },
    "skills cardlarge": {
        "height": 360
    },
    "skills h4": {
        "borderBottom": "1px solid #ddd",
        "marginBottom": 30,
        "paddingBottom": 20
    },
    "skills col imgresponsive-img": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "maxHeight": 100,
        "paddingBottom": 10,
        "textAlign": "center",
        "verticalAlign": "middle",
        "display": "table-cell"
    },
    "cardlarge card-content p": {
        "color": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 30,
        "paddingRight": 0,
        "paddingBottom": 30,
        "paddingLeft": 0
    },
    "experience card-content row": {
        "borderBottom": "1px solid #ddd",
        "paddingBottom": 10
    },
    "cardlarge card-image": {
        "height": 230
    },
    "cardlarge card-content": {
        "height": "auto"
    },
    "cardmedium card-image": {
        "height": 240
    },
    "card-action abtn-floating": {
        "marginBottom": 0
    },
    "contact a:not(btn-floating)": {
        "bottom": 6,
        "left": 20,
        "position": "relative"
    },
    "experience cols12m2": {
        "textAlign": "center"
    },
    "fa-external-link:before": {
        "left": 3,
        "position": "relative",
        "top": 2
    },
    "small": {
        "display": "none"
    },
    "signature": {
        "fontFamily": "'Tangerine', serif",
        "fontSize": 2,
        "textShadow": "4px 4px 4px #aaa"
    }
});