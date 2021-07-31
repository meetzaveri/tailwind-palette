;(this['webpackJsonptailwind-shades-generator'] =
    this['webpackJsonptailwind-shades-generator'] || []).push([
    [0],
    {
        211: function (e, t, n) {},
        212: function (e, t, n) {
            'use strict'
            n.r(t)
            var c = n(0),
                s = n.n(c),
                a = n(10),
                l = n.n(a),
                r = n(26),
                i = (n(98), n(8)),
                o = n(28),
                d = n.n(o),
                x = n.p + '../media/settings.5bae0488.svg',
                u = (n(103), n(1)),
                j = function (e) {
                    var t = e.show,
                        n = e.toggle,
                        s = c.useState(!1),
                        a = Object(i.a)(s, 2),
                        l = a[0],
                        r = a[1],
                        o = c.useRef(document.createElement('div'))
                    c.useEffect(function () {
                        return (
                            document.addEventListener('mousedown', j, !1),
                            function () {
                                document.removeEventListener('mousedown', j, !1)
                            }
                        )
                    }, [])
                    var j = function (e) {
                            console.log(
                                'handle click target',
                                e.target,
                                o.current.contains(e.target)
                            ),
                                (o && o.current.contains(e.target)) || r(!1)
                        },
                        h = function () {
                            console.log('on close help tooltip'), r(!l)
                        }
                    return Object(u.jsx)(u.Fragment, {
                        children: Object(u.jsxs)('div', {
                            className: 'fixed right-0 mr-4 mt-4  w-12 ',
                            ref: o,
                            children: [
                                Object(u.jsx)('a', {
                                    className:
                                        'p-2 w-12 bg-gray-600 rounded-md flex items-center',
                                    href: '',
                                    onClick: function (e) {
                                        e.preventDefault(), h()
                                    },
                                    children: Object(u.jsx)('img', {
                                        width: 30,
                                        height: 30,
                                        className:
                                            'transition-transform ease-in-out duration-300',
                                        src: x,
                                        style: {
                                            transform: l
                                                ? 'rotate(90deg)'
                                                : 'rotate(0deg)',
                                        },
                                        alt: 'settings',
                                    }),
                                }),
                                Object(u.jsx)('div', {
                                    className: 'relative',
                                    children: Object(u.jsxs)('div', {
                                        id: 'help-tooltip-box',
                                        tabIndex: 0,
                                        style: {
                                            opacity: l ? 1 : 0,
                                            visibility: l
                                                ? 'visible'
                                                : 'hidden',
                                        },
                                        className:
                                            ' mt-1 px-2 py-2  w-72   shadow-md absolute outline-none right-0 border border-gray-200  transition-all ease-in-out duration-300 ',
                                        onBlur: function (e) {
                                            o.current.contains(e.target) || h()
                                        },
                                        children: [
                                            Object(u.jsxs)('div', {
                                                className:
                                                    'flex items-center  py-2 ',
                                                children: [
                                                    Object(u.jsx)('div', {
                                                        className:
                                                            'w-2/3 text-md',
                                                        children:
                                                            'Show Hex Code',
                                                    }),
                                                    Object(u.jsx)('div', {
                                                        className:
                                                            'w-1/3 text-right pr-2',
                                                        children: Object(u.jsx)(
                                                            d.a,
                                                            {
                                                                defaultChecked:
                                                                    t.hex,
                                                                icons: !1,
                                                                checked: t.hex,
                                                                tabIndex: 0,
                                                                name: 'showHexToggle',
                                                                onChange:
                                                                    function () {
                                                                        return n.hex(
                                                                            !t.hex
                                                                        )
                                                                    },
                                                            }
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            Object(u.jsxs)('div', {
                                                className:
                                                    'flex items-center border-t border-gray-200 py-2',
                                                children: [
                                                    Object(u.jsx)('div', {
                                                        className:
                                                            'w-2/3 text-md',
                                                        children: 'Show Text',
                                                    }),
                                                    Object(u.jsx)('div', {
                                                        className:
                                                            'w-1/3 text-right pr-2',
                                                        children: Object(u.jsx)(
                                                            d.a,
                                                            {
                                                                defaultChecked:
                                                                    t.text,
                                                                icons: !1,
                                                                checked: t.text,
                                                                tabIndex: 0,
                                                                name: 'showText',
                                                                onChange:
                                                                    function () {
                                                                        return n.text(
                                                                            !t.text
                                                                        )
                                                                    },
                                                            }
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            Object(u.jsxs)('div', {
                                                className:
                                                    'flex items-center border-t border-gray-200 py-2',
                                                children: [
                                                    Object(u.jsx)('div', {
                                                        className:
                                                            'w-2/3 text-md',
                                                        children:
                                                            'Show Tints and Shades',
                                                    }),
                                                    Object(u.jsx)('div', {
                                                        className:
                                                            'w-1/3 text-right pr-2',
                                                        children: Object(u.jsx)(
                                                            d.a,
                                                            {
                                                                defaultChecked:
                                                                    t.lightDarkTint,
                                                                icons: !1,
                                                                checked:
                                                                    t.lightDarkTint,
                                                                tabIndex: 0,
                                                                name: 'showLightDarkTints',
                                                                onChange:
                                                                    function () {
                                                                        return n.lightDarkTint(
                                                                            !t.lightDarkTint
                                                                        )
                                                                    },
                                                            }
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    })
                },
                h = n(84),
                m = function (e) {
                    var t = e.setShowOutput,
                        n = c.useState('ff0059'),
                        s = Object(i.a)(n, 2),
                        a = s[0],
                        l = s[1]
                    return Object(u.jsx)('div', {
                        className: 'w-full sm:w-6/12 flex items-center  ',
                        children: Object(u.jsxs)('div', {
                            className: 'flex flex-wrap px-4 py-6  ',
                            children: [
                                Object(u.jsx)('div', {
                                    className: 'w-full lg:w-1/2',
                                    children: Object(u.jsx)(h.a, {
                                        className: 'cursor-pointer',
                                        color: '#'.concat(a),
                                        onChangeComplete: function (e) {
                                            var t = e.hex.replace('#', '')
                                            l(t)
                                        },
                                    }),
                                }),
                                Object(u.jsx)('div', {
                                    className: 'w-full lg:px-4 lg:w-1/2',
                                    children: Object(u.jsxs)('div', {
                                        className:
                                            'h-full flex flex-col flex-shrink-0 items-end justify-between  ',
                                        style: { width: '245px' },
                                        children: [
                                            Object(u.jsxs)('div', {
                                                className:
                                                    ' py-2 text-lg font-semibold text-gray-700',
                                                children: [
                                                    Object(u.jsx)('span', {
                                                        role: 'img',
                                                        'aria-label':
                                                            'backhand-left',
                                                        children:
                                                            '\ud83d\udc48',
                                                    }),
                                                    ' ',
                                                    'Pick a color or type your color hexcode directly',
                                                ],
                                            }),
                                            Object(u.jsxs)('form', {
                                                action: '',
                                                className: 'w-full ',
                                                children: [
                                                    Object(u.jsxs)('div', {
                                                        className: 'pb-4',
                                                        children: [
                                                            Object(u.jsx)(
                                                                'label',
                                                                {
                                                                    htmlFor:
                                                                        'email',
                                                                    className:
                                                                        'text-sm block font-bold pb-2',
                                                                    children:
                                                                        'Color',
                                                                }
                                                            ),
                                                            Object(u.jsxs)(
                                                                'div',
                                                                {
                                                                    className:
                                                                        'flex relative',
                                                                    children: [
                                                                        Object(
                                                                            u.jsx
                                                                        )(
                                                                            'div',
                                                                            {
                                                                                className:
                                                                                    'absolute top-2 left-2 text-lg',
                                                                                children:
                                                                                    '#',
                                                                            }
                                                                        ),
                                                                        Object(
                                                                            u.jsx
                                                                        )(
                                                                            'input',
                                                                            {
                                                                                type: 'hexcode',
                                                                                name: 'hexcode',
                                                                                id: '',
                                                                                value: a,
                                                                                onChange:
                                                                                    function (
                                                                                        e
                                                                                    ) {
                                                                                        var t =
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                        if (
                                                                                            t.includes(
                                                                                                '#'
                                                                                            )
                                                                                        ) {
                                                                                            var n =
                                                                                                t.indexOf(
                                                                                                    '#'
                                                                                                )
                                                                                            t =
                                                                                                t.slice(
                                                                                                    n +
                                                                                                        1,
                                                                                                    t.length
                                                                                                )
                                                                                        }
                                                                                        console.log(
                                                                                            'on change input',
                                                                                            t
                                                                                        ),
                                                                                            l(
                                                                                                t
                                                                                            )
                                                                                    },
                                                                                className:
                                                                                    'pl-6 pr-16 py-2 w-full text-lg rounded-md border border-gray-300  focus:outline-none focus:shadow-outline ',
                                                                                placeholder:
                                                                                    '4ef455',
                                                                            }
                                                                        ),
                                                                        Object(
                                                                            u.jsx
                                                                        )(
                                                                            'span',
                                                                            {
                                                                                className:
                                                                                    'mt-2 rounded-md w-7 h-7 ',
                                                                                style: {
                                                                                    background:
                                                                                        '#'.concat(
                                                                                            a
                                                                                        ),
                                                                                    marginLeft:
                                                                                        '-35px',
                                                                                },
                                                                            }
                                                                        ),
                                                                    ],
                                                                }
                                                            ),
                                                        ],
                                                    }),
                                                    Object(u.jsx)('div', {
                                                        className: 'w-full',
                                                        children: Object(u.jsx)(
                                                            'button',
                                                            {
                                                                className:
                                                                    'w-full  bg-gray-700 hover:bg-gray-500  text-white font-bold px-4 py-2 rounded  focus:outline-none focus:shadow-outline',
                                                                type: 'button',
                                                                onClick:
                                                                    function () {
                                                                        t(a)
                                                                    },
                                                                children:
                                                                    'Generate',
                                                            }
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    })
                },
                b = n.p + '../media/copy.b139afe4.svg',
                f = function (e) {
                    var t = e.item,
                        n = e.index,
                        s = Object(r.useToasts)().addToast,
                        a = Object(c.useContext)(k)
                    return (
                        console.log('settingsContextValue', a),
                        Object(u.jsx)(c.Fragment, {
                            children: Object(u.jsx)('div', {
                                className:
                                    'rounded-lg w-full sm:w-9/12 lg:w-5/12 xl:w-3/12  mr-3 mb-3  overflow-hidden',
                                children: Object(u.jsxs)('div', {
                                    className: '',
                                    children: [
                                        Object(u.jsx)('div', {
                                            className: 'h-20 relative',
                                            style: {
                                                background: '#'.concat(t),
                                            },
                                            children: a.text
                                                ? Object(u.jsxs)('div', {
                                                      className:
                                                          'pb-2 absolute bottom-1 w-full text-center',
                                                      children: [
                                                          Object(u.jsx)(
                                                              'span',
                                                              {
                                                                  className:
                                                                      'text-black text-sm mx-2',
                                                                  children: 'A',
                                                              }
                                                          ),
                                                          Object(u.jsx)(
                                                              'span',
                                                              {
                                                                  className:
                                                                      'text-black text-lg mx-2',
                                                                  children: 'A',
                                                              }
                                                          ),
                                                          Object(u.jsx)(
                                                              'span',
                                                              {
                                                                  className:
                                                                      'text-white text-sm mx-2',
                                                                  children: 'A',
                                                              }
                                                          ),
                                                          Object(u.jsx)(
                                                              'span',
                                                              {
                                                                  className:
                                                                      'text-white text-lg mx-2',
                                                                  children: 'A',
                                                              }
                                                          ),
                                                      ],
                                                  })
                                                : null,
                                        }),
                                        Object(u.jsxs)('div', {
                                            className:
                                                'py-4 px-2 flex items-center justify-between bg-gray-100',
                                            children: [
                                                Object(u.jsx)('div', {
                                                    className: 'text-gray-600',
                                                    children: 100 * n,
                                                }),
                                                Object(u.jsxs)('div', {
                                                    className:
                                                        'color-box cursor-pointer hover:underline relative text-gray-600',
                                                    onClick: function (e) {
                                                        e.stopPropagation(),
                                                            navigator.clipboard.writeText(
                                                                '#'.concat(
                                                                    t.toUpperCase()
                                                                )
                                                            ),
                                                            console.log(
                                                                'on click copy hexcode'
                                                            ),
                                                            s(
                                                                'Hexcode copied',
                                                                {
                                                                    appearance:
                                                                        'success',
                                                                }
                                                            )
                                                    },
                                                    children: [
                                                        a.hex
                                                            ? '#'.concat(
                                                                  t.toUpperCase()
                                                              )
                                                            : '',
                                                        Object(u.jsx)('span', {
                                                            className:
                                                                ' w-20  text-xs absolute -top-7 right-0  color-box-tooltip bg-gray-600 text-white px-1 py-1 cursor-pointer',
                                                            children:
                                                                'click to copy',
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        })
                    )
                }
            function g(e) {
                return (function (e, t) {
                    for (var n = '' + e; n.length < t; ) n = '0' + n
                    return n
                })(Math.min(Math.max(Math.round(e), 0), 255).toString(16), 2)
            }
            function p(e) {
                return g(e.red) + g(e.green) + g(e.blue)
            }
            function O(e, t) {
                for (
                    var n = (function (e) {
                            return {
                                red: parseInt(e.substr(0, 2), 16),
                                green: parseInt(e.substr(2, 2), 16),
                                blue: parseInt(e.substr(4, 2), 16),
                            }
                        })(e),
                        c = [],
                        s = 0;
                    s < 10;
                    s++
                )
                    (c[s] = p(t(n, s))),
                        console.log('colorValue calc tints', p(t(n, s)))
                return console.log('colorValue calc tints', c), c
            }
            function v(e, t) {
                return {
                    red: e.red * (1 - 0.1 * t),
                    green: e.green * (1 - 0.1 * t),
                    blue: e.blue * (1 - 0.1 * t),
                }
            }
            function w(e, t) {
                return {
                    red: e.red + (255 - e.red) * t * 0.1,
                    green: e.green + (255 - e.green) * t * 0.1,
                    blue: e.blue + (255 - e.blue) * t * 0.1,
                }
            }
            var N = function (e) {
                    var t = e.hexcode,
                        n = e.showOutput,
                        s = (e.onHideOutput, Object(c.useContext)(k)),
                        a = O(t, w).concat('ffffff'),
                        l = (function (e) {
                            return O(e, v).concat('000000')
                        })(t),
                        r = [],
                        i = { light: {}, dark: {}, mix: {} }
                    a.reverse().forEach(function (e, t) {
                        t > 0 && t % 2 === 0 && r.push(e),
                            (i.light[100 * t] = '#'.concat(e.toUpperCase()))
                    }),
                        l.forEach(function (e, t) {
                            t > 0 && t % 2 === 0 && '000000' !== e && r.push(e),
                                (i.dark[100 * t] = '#'.concat(e.toUpperCase()))
                        }),
                        r.forEach(function (e, t) {
                            i.mix[100 * t] = '#'.concat(e.toUpperCase())
                        }),
                        !1 === s.lightDarkTint &&
                            (delete i.light, delete i.dark),
                        console.log('lightPalette ', a, s.lightDarkTint)
                    var o = JSON.stringify(i)
                    return Object(u.jsx)('div', {
                        className: 'my-4',
                        children: Object(u.jsx)('div', {
                            className:
                                ' transition-all duration-200 ease-in-out bg-white py-8 '.concat(
                                    n ? 'opacity-100 ' : 'opacity-0  '
                                ),
                            children: Object(u.jsxs)('div', {
                                className: 'w-full flex flex-wrap ',
                                children: [
                                    Object(u.jsxs)('div', {
                                        className:
                                            'w-full sm:w-6/12 xl:w-8/12  px-4',
                                        children: [
                                            Object(u.jsxs)('div', {
                                                className: 'w-full mt-6',
                                                children: [
                                                    Object(u.jsxs)('div', {
                                                        className:
                                                            'text-xl  font-semibold text-gray-700',
                                                        children: [
                                                            'Mix',
                                                            ' ',
                                                            Object(u.jsx)(
                                                                'span',
                                                                {
                                                                    className:
                                                                        'text-sm text-gray-500',
                                                                    children:
                                                                        '(general theme)',
                                                                }
                                                            ),
                                                        ],
                                                    }),
                                                    Object(u.jsx)('div', {
                                                        className:
                                                            'w-full mt-4 flex flex-wrap items-center',
                                                        children: r.map(
                                                            function (e, t) {
                                                                return Object(
                                                                    u.jsx
                                                                )(
                                                                    c.Fragment,
                                                                    {
                                                                        children:
                                                                            Object(
                                                                                u.jsx
                                                                            )(
                                                                                f,
                                                                                {
                                                                                    item: e,
                                                                                    index: t,
                                                                                }
                                                                            ),
                                                                    },
                                                                    t
                                                                )
                                                            }
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            s.lightDarkTint
                                                ? Object(u.jsxs)(u.Fragment, {
                                                      children: [
                                                          Object(u.jsxs)(
                                                              'div',
                                                              {
                                                                  className:
                                                                      'w-full mt-6',
                                                                  children: [
                                                                      Object(
                                                                          u.jsxs
                                                                      )('div', {
                                                                          className:
                                                                              'text-xl  font-semibold text-gray-700',
                                                                          children:
                                                                              [
                                                                                  'Tints',
                                                                                  ' ',
                                                                                  Object(
                                                                                      u.jsx
                                                                                  )(
                                                                                      'span',
                                                                                      {
                                                                                          className:
                                                                                              'text-sm text-gray-500',
                                                                                          children:
                                                                                              '(light theme)',
                                                                                      }
                                                                                  ),
                                                                              ],
                                                                      }),
                                                                      Object(
                                                                          u.jsx
                                                                      )('div', {
                                                                          className:
                                                                              'w-full mt-4 flex flex-wrap items-center',
                                                                          children:
                                                                              a.map(
                                                                                  function (
                                                                                      e,
                                                                                      t
                                                                                  ) {
                                                                                      return 'ffffff' !==
                                                                                          e
                                                                                          ? Object(
                                                                                                u.jsx
                                                                                            )(
                                                                                                c.Fragment,
                                                                                                {
                                                                                                    children:
                                                                                                        Object(
                                                                                                            u.jsx
                                                                                                        )(
                                                                                                            f,
                                                                                                            {
                                                                                                                item: e,
                                                                                                                index: t,
                                                                                                            }
                                                                                                        ),
                                                                                                },
                                                                                                t
                                                                                            )
                                                                                          : null
                                                                                  }
                                                                              ),
                                                                      }),
                                                                  ],
                                                              }
                                                          ),
                                                          Object(u.jsxs)(
                                                              'div',
                                                              {
                                                                  className:
                                                                      'w-full mt-10 pb-8 ',
                                                                  children: [
                                                                      Object(
                                                                          u.jsxs
                                                                      )('div', {
                                                                          className:
                                                                              ' text-xl font-semibold text-gray-700',
                                                                          children:
                                                                              [
                                                                                  'Shades',
                                                                                  ' ',
                                                                                  Object(
                                                                                      u.jsx
                                                                                  )(
                                                                                      'span',
                                                                                      {
                                                                                          className:
                                                                                              'text-sm text-gray-500',
                                                                                          children:
                                                                                              '(dark theme)',
                                                                                      }
                                                                                  ),
                                                                              ],
                                                                      }),
                                                                      Object(
                                                                          u.jsx
                                                                      )('div', {
                                                                          className:
                                                                              'w-full mt-4 flex flex-wrap items-center',
                                                                          children:
                                                                              l.map(
                                                                                  function (
                                                                                      e,
                                                                                      t
                                                                                  ) {
                                                                                      return '000000' !==
                                                                                          e
                                                                                          ? Object(
                                                                                                u.jsx
                                                                                            )(
                                                                                                c.Fragment,
                                                                                                {
                                                                                                    children:
                                                                                                        Object(
                                                                                                            u.jsx
                                                                                                        )(
                                                                                                            f,
                                                                                                            {
                                                                                                                item: e,
                                                                                                                index: t,
                                                                                                            }
                                                                                                        ),
                                                                                                },
                                                                                                t
                                                                                            )
                                                                                          : null
                                                                                  }
                                                                              ),
                                                                      }),
                                                                  ],
                                                              }
                                                          ),
                                                      ],
                                                  })
                                                : null,
                                        ],
                                    }),
                                    Object(u.jsxs)('div', {
                                        className:
                                            'w-full sm:w-6/12 xl:w-4/12 px-4 my-6',
                                        children: [
                                            Object(u.jsxs)('div', {
                                                className: 'text-xl font-bold',
                                                children: [
                                                    'Generated Tailwind config',
                                                    ' ',
                                                ],
                                            }),
                                            Object(u.jsxs)('div', {
                                                className:
                                                    'mt-2 relative code-parent-root',
                                                children: [
                                                    Object(u.jsxs)('pre', {
                                                        className:
                                                            ' text-md bg-gray-900 rounded-lg p-4 text-gray-300 ',
                                                        children: [
                                                            'mix: {\n  '.concat(
                                                                r
                                                                    .map(
                                                                        function (
                                                                            e,
                                                                            t
                                                                        ) {
                                                                            return '   '
                                                                                .concat(
                                                                                    100 *
                                                                                        t,
                                                                                    ": '#"
                                                                                )
                                                                                .concat(
                                                                                    e.toUpperCase(),
                                                                                    "'"
                                                                                )
                                                                        }
                                                                    )
                                                                    .join(
                                                                        ', \n'
                                                                    ),
                                                                '\n},'
                                                            ),
                                                            s.lightDarkTint
                                                                ? Object(
                                                                      u.jsxs
                                                                  )(
                                                                      u.Fragment,
                                                                      {
                                                                          children:
                                                                              [
                                                                                  '\n\nlight: {\n  '.concat(
                                                                                      a
                                                                                          .map(
                                                                                              function (
                                                                                                  e,
                                                                                                  t
                                                                                              ) {
                                                                                                  return '   '
                                                                                                      .concat(
                                                                                                          100 *
                                                                                                              t,
                                                                                                          ": '#"
                                                                                                      )
                                                                                                      .concat(
                                                                                                          e.toUpperCase(),
                                                                                                          "'"
                                                                                                      )
                                                                                              }
                                                                                          )
                                                                                          .join(
                                                                                              ', \n'
                                                                                          ),
                                                                                      '\n},'
                                                                                  ),
                                                                                  '\n\ndark: {\n  '.concat(
                                                                                      l
                                                                                          .map(
                                                                                              function (
                                                                                                  e,
                                                                                                  t
                                                                                              ) {
                                                                                                  return '   '
                                                                                                      .concat(
                                                                                                          100 *
                                                                                                              t,
                                                                                                          ": '#"
                                                                                                      )
                                                                                                      .concat(
                                                                                                          e.toUpperCase(),
                                                                                                          "'"
                                                                                                      )
                                                                                              }
                                                                                          )
                                                                                          .join(
                                                                                              ', \n'
                                                                                          ),
                                                                                      '\n}'
                                                                                  ),
                                                                              ],
                                                                      }
                                                                  )
                                                                : null,
                                                        ],
                                                    }),
                                                    Object(u.jsx)('a', {
                                                        href: '',
                                                        className:
                                                            ' code-copy-section transition-opacity ease-in-out duration-300 bg-gray-200 rounded-sm px-2 py-2 absolute right-4 top-4',
                                                        onClick: function (e) {
                                                            e.preventDefault(),
                                                                navigator.clipboard.writeText(
                                                                    o.substring(
                                                                        1,
                                                                        o.length -
                                                                            1
                                                                    )
                                                                )
                                                        },
                                                        children: Object(u.jsx)(
                                                            'img',
                                                            {
                                                                width: '30',
                                                                height: '30',
                                                                src: b,
                                                                alt: 'clipboard',
                                                            }
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    })
                },
                y = n.p + '../media/spam.4f5bc168.svg',
                k = (n(211), s.a.createContext({})),
                C = function () {
                    var e = s.a.useState(!1),
                        t = Object(i.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        a = s.a.useState(''),
                        l = Object(i.a)(a, 2),
                        r = l[0],
                        o = l[1],
                        d = s.a.useState(!0),
                        x = Object(i.a)(d, 2),
                        h = x[0],
                        b = x[1],
                        f = s.a.useState(!0),
                        g = Object(i.a)(f, 2),
                        p = g[0],
                        O = g[1],
                        v = s.a.useState(!0),
                        w = Object(i.a)(v, 2),
                        C = w[0],
                        T = w[1],
                        S = { hex: h, text: p, lightDarkTint: C }
                    return Object(u.jsx)('section', {
                        className: ' w-full px-8',
                        children: Object(u.jsx)('div', {
                            className: 'w-full relative ',
                            children: Object(u.jsxs)(k.Provider, {
                                value: S,
                                children: [
                                    Object(u.jsx)(j, {
                                        show: {
                                            hex: h,
                                            text: p,
                                            lightDarkTint: C,
                                        },
                                        toggle: {
                                            hex: b,
                                            text: O,
                                            lightDarkTint: T,
                                        },
                                    }),
                                    Object(u.jsx)(m, {
                                        setShowOutput: function (e) {
                                            o(e), c(!0)
                                        },
                                    }),
                                    n
                                        ? Object(u.jsx)('div', {
                                              className:
                                                  'transition-all duration-500 ease-in-out',
                                              children: Object(u.jsx)(N, {
                                                  hexcode: r,
                                                  showOutput: n,
                                                  onHideOutput: function () {
                                                      return c(!1)
                                                  },
                                              }),
                                          })
                                        : Object(u.jsxs)('div', {
                                              className: 'mt-16',
                                              children: [
                                                  Object(u.jsx)('div', {
                                                      className:
                                                          'flex items-center justify-center p-10',
                                                      children: Object(u.jsx)(
                                                          'img',
                                                          {
                                                              width: '150',
                                                              height: '150',
                                                              src: y,
                                                              alt: 'color-palette',
                                                          }
                                                      ),
                                                  }),
                                                  Object(u.jsxs)('div', {
                                                      className:
                                                          'text-xl font-bold text-center',
                                                      children: [
                                                          'No color palette to show. Please select or type color palette from above input',
                                                          ' ',
                                                      ],
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        }),
                    })
                },
                T = function (e) {
                    e &&
                        e instanceof Function &&
                        n
                            .e(3)
                            .then(n.bind(null, 214))
                            .then(function (t) {
                                var n = t.getCLS,
                                    c = t.getFID,
                                    s = t.getFCP,
                                    a = t.getLCP,
                                    l = t.getTTFB
                                n(e), c(e), s(e), a(e), l(e)
                            })
                }
            l.a.render(
                Object(u.jsx)(s.a.StrictMode, {
                    children: Object(u.jsx)(r.ToastProvider, {
                        autoDismiss: !0,
                        autoDismissTimeout: 1500,
                        children: Object(u.jsx)(C, {}),
                    }),
                }),
                document.getElementById('root')
            ),
                T()
        },
        98: function (e, t, n) {},
    },
    [[212, 1, 2]],
])
//# sourceMappingURL=main.93e7ba6f.chunk.js.map
