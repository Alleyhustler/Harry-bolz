(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    1538: function(e, t, n) {
        Promise.resolve().then(n.bind(n, 7815))
    },
    7815: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return T
            }
        });
        var r = n(7437)
          , a = n(2265)
          , o = n(8057)
          , s = n.n(o);
        function i(e) {
            let {onLoadingComplete: t, audioSrc: n} = e
              , [o,i] = (0,
            a.useState)(0)
              , [l,c] = (0,
            a.useState)("   ")
              , [d,u] = (0,
            a.useState)(!1)
              , [m,_] = (0,
            a.useState)(null);
            (0,
            a.useEffect)( () => {
                let e = setInterval( () => {
                    i(t => t >= 100 ? (clearInterval(e),
                    100) : t + 1)
                }
                , 50);
                return () => clearInterval(e)
            }
            , []),
            (0,
            a.useEffect)( () => {
                let e = setInterval( () => {
                    c(e => e.substring(1) + (" " === e[2] ? "." : " "))
                }
                , 500);
                return () => clearInterval(e)
            }
            , []),
            (0,
            a.useEffect)( () => {
                100 !== o || d || _(new (window.AudioContext || window.webkitAudioContext))
            }
            , [o, d]);
            let h = (0,
            a.useCallback)( () => {
                if (m) {
                    let e = m.createBufferSource();
                    fetch(n).then(e => e.arrayBuffer()).then(e => m.decodeAudioData(e)).then(n => {
                        e.buffer = n,
                        e.connect(m.destination),
                        e.start(0),
                        setTimeout(t, 1e3)
                    }
                    ).catch(e => console.error("Error playing audio:", e))
                }
            }
            , [m, n, t]);
            return (0,
            r.jsx)("div", {
                className: "".concat(s().loadingScreen, " ").concat(d ? s().fadeOut : ""),
                children: (0,
                r.jsxs)("div", {
                    className: s().loadingContent,
                    children: [(0,
                    r.jsx)("div", {
                        className: s().logo,
                        children: (0,
                        r.jsx)("img", {
                            src: "images/Indian_Rupee_symbol.svg-rPKrErLvzd1VQ6UfUwvioAtZ0Ewi7t.png",
                            alt: "Indian Rupee Symbol",
                            className: s().rupeeSymbol
                        })
                    }), (0,
                    r.jsx)("h1", {
                        className: s().title,
                        children: "HARRY BOLZ TERMINAL"
                    }), (0,
                    r.jsxs)("div", {
                        className: s().loadingBarContainer,
                        children: [(0,
                        r.jsx)("div", {
                            className: s().loadingBar,
                            children: (0,
                            r.jsx)("div", {
                                className: s().progress,
                                style: {
                                    width: "".concat(o, "%")
                                }
                            })
                        }), (0,
                        r.jsxs)("div", {
                            className: s().loadingPercentage,
                            children: [o, "%"]
                        })]
                    }), (0,
                    r.jsx)("div", {
                        className: s().loadingMessages,
                        children: (0,
                        r.jsxs)("div", {
                            className: s().loadingText,
                            children: [(0,
                            r.jsx)("span", {
                                children: "loading terminal server in mumbai"
                            }), (0,
                            r.jsx)("span", {
                                className: s().dots,
                                children: l
                            })]
                        })
                    }), 100 === o && (0,
                    r.jsx)("div", {
                        className: s().audioButtonContainer,
                        children: (0,
                        r.jsx)("button", {
                            onClick: () => {
                                u(!0),
                                setTimeout( () => {
                                    h(),
                                    t()
                                }
                                , 500)
                            }
                            ,
                            className: "".concat(s().enterTerminalButton, " ").concat(d ? "" : s().buttonVisible),
                            disabled: d,
                            children: "ENTER TERMINAL"
                        })
                    })]
                })
            })
        }
        var l = n(1042);
        let c = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
          , d = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return t.filter( (e, t, n) => !!e && "" !== e.trim() && n.indexOf(e) === t).join(" ").trim()
        };
        var u = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        let m = (0,
        a.forwardRef)( (e, t) => {
            let {color: n="currentColor", size: r=24, strokeWidth: o=2, absoluteStrokeWidth: s, className: i="", children: l, iconNode: c, ...m} = e;
            return (0,
            a.createElement)("svg", {
                ref: t,
                ...u,
                width: r,
                height: r,
                stroke: n,
                strokeWidth: s ? 24 * Number(o) / Number(r) : o,
                className: d("lucide", i),
                ...m
            }, [...c.map(e => {
                let[t,n] = e;
                return (0,
                a.createElement)(t, n)
            }
            ), ...Array.isArray(l) ? l : [l]])
        }
        )
          , _ = ( (e, t) => {
            let n = (0,
            a.forwardRef)( (n, r) => {
                let {className: o, ...s} = n;
                return (0,
                a.createElement)(m, {
                    ref: r,
                    iconNode: t,
                    className: d("lucide-".concat(c(e)), o),
                    ...s
                })
            }
            );
            return n.displayName = "".concat(e),
            n
        }
        )("Twitter", [["path", {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6"
        }]]);
        var h = n(5939)
          , g = n.n(h);
        function x() {
            return (0,
            r.jsxs)("a", {
                href: "https://x.com/harry_bolz_",
                target: "_blank",
                rel: "noopener noreferrer",
                className: g().twitterButton,
                children: [(0,
                r.jsx)(_, {
                    size: 20
                }), (0,
                r.jsx)("span", {
                    children: "Socials"
                })]
            })
        }
        var f = n(7475)
          , j = n.n(f);
        function v() {
            return (0,
            r.jsx)("a", {
                href: "https://pump.fun/profile/Di3NjADDVhzHR4SoktfMwYW2uUdtmWBQH2Xf51SRnjsC",
                target: "_blank",
                rel: "noopener noreferrer",
                className: j().buyJeetButton,
                children: "Buy $JEET"
            })
        }
        var w = n(667)
          , p = n.n(w);
        function S() {
            let[e,t] = (0,
            a.useState)(!1);
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)("button", {
                    className: p().comingSoonButton,
                    onClick: () => {
                        t(!0)
                    }
                    ,
                    children: "Training Camp 2.0"
                }), e && (0,
                r.jsx)("div", {
                    className: p().overlay,
                    children: (0,
                    r.jsxs)("div", {
                        className: p().card,
                        children: [(0,
                        r.jsx)("button", {
                            className: p().closeButton,
                            onClick: () => {
                                t(!1)
                            }
                            ,
                            children: "X"
                        }), (0,
                        r.jsx)("p", {
                            className: p().cardContent,
                            children: "We upgrade the tech soon"
                        })]
                    })
                })]
            })
        }
        var N = n(6777)
          , b = n.n(N);
        function T() {
            let[e,t] = (0,
            a.useState)(!0);
            return (0,
            a.useEffect)( () => {
                "true" !== localStorage.getItem("hasSeenLoading") ? t(!0) : t(!1)
            }
            , []),
            (0,
            r.jsxs)("main", {
                className: b().main,
                children: [e ? (0,
                r.jsx)(i, {
                    onLoadingComplete: () => {
                        t(!1),
                        localStorage.setItem("hasSeenLoading", "true"),
                        window.dispatchEvent(new Event("storage"))
                    }
                    ,
                    audioSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Unbenanntes%20Video-JR9FqkNf77B7iU2GZh0pqCvCOP8uCr.mp4"
                }) : (0,
                r.jsx)(l.Z, {}), (0,
                r.jsx)(x, {}), (0,
                r.jsx)(v, {}), (0,
                r.jsx)(S, {})]
            })
        }
    },
    1042: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return d
            }
        });
        var r = n(7437)
          , a = n(2265)
          , o = n(2393)
          , s = n.n(o)
          , i = n(7648);
        let l = [{
            question: "Dev just locked supply for 3 months, what do you do?",
            correctAnswer: "I jeet"
        }, {
            question: "Ansem just bought in with sphere money, what do you do?",
            correctAnswer: "I jeet"
        }, {
            question: "your friend just jeeted on you, what do you do?",
            correctAnswer: "I jeet"
        }, {
            question: "0% bundles, 320 holders, 21k market cap, what do you do?",
            correctAnswer: "I jeet"
        }, {
            question: "down 30% in 1 second, what do you do?",
            correctAnswer: "I jeet"
        }, {
            question: "you're literally up a house right now on $JEET, what do you do?",
            correctAnswer: "I jeet"
        }, {
            question: "youre about to send this site to a friend, what do you do?",
            correctAnswer: "I jeet"
        }]
          , c = e => {
            let t = l.map( (e, t) => t).filter(t => !e.includes(t));
            if (0 === t.length)
                return -1;
            let n = Math.floor(Math.random() * t.length);
            return t[n]
        }
        ;
        function d() {
            let[e,t] = (0,
            a.useState)("00:00:00")
              , [n,o] = (0,
            a.useState)(87)
              , [d,u] = (0,
            a.useState)(999)
              , [m,_] = (0,
            a.useState)(95)
              , [h,g] = (0,
            a.useState)(0)
              , [x,f] = (0,
            a.useState)([])
              , [j,v] = (0,
            a.useState)(!1)
              , [w,p] = (0,
            a.useState)(!1)
              , [S,N] = (0,
            a.useState)("normal")
              , [b,T] = (0,
            a.useState)(!1)
              , [C,B] = (0,
            a.useState)([])
              , y = (0,
            a.useRef)(null)
              , E = (0,
            a.useRef)(null);
            (0,
            a.useEffect)( () => {
                let e = setInterval( () => {
                    t(new Date().toLocaleTimeString("en-US", {
                        hour12: !1
                    })),
                    o(Math.floor(20 * Math.random()) + 75),
                    u(Math.floor(200 * Math.random()) + 800),
                    _(Math.floor(10 * Math.random()) + 90)
                }
                , 1e3);
                return () => clearInterval(e)
            }
            , []),
            (0,
            a.useEffect)( () => {
                let e = window.AudioContext || window.webkitAudioContext;
                return y.current = new e,
                fetch("https://github.com/Alleyhustler/pad/blob/main/elo.mp3").then(e => e.arrayBuffer()).then(e => y.current.decodeAudioData(e)).then(e => {
                    E.current = e
                }
                ).catch(e => console.error("Error loading audio:", e)),
                () => {
                    y.current && y.current.close()
                }
            }
            , []),
            (0,
            a.useEffect)( () => {
                j || l.length
            }
            , [h, j, b]);
            let A = () => {
                if (y.current && E.current) {
                    let e = y.current.createBufferSource();
                    e.buffer = E.current,
                    e.connect(y.current.destination),
                    e.start(0)
                }
            }
              , k = () => {
                let e = c(C);
                -1 !== e ? (g(e),
                B(t => [...t, e]),
                N(e => "normal" === e ? "reversed" : "normal")) : (p(!0),
                v(!0))
            }
              , L = e => {
                e === l[h].correctAnswer ? (A(),
                k()) : v(!0)
            }
            ;
            return (0,
            r.jsx)("div", {
                className: s().terminalContainer,
                children: (0,
                r.jsxs)("div", {
                    className: s().terminal,
                    children: [(0,
                    r.jsxs)("div", {
                        className: s().windowControls,
                        children: [(0,
                        r.jsx)("span", {
                            className: s().close
                        }), (0,
                        r.jsx)("span", {
                            className: s().minimize
                        }), (0,
                        r.jsx)("span", {
                            className: s().maximize
                        }), (0,
                        r.jsx)("span", {
                            className: s().title,
                            children: "Harry Bolz Terminal - $BOLZT"
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: s().stats,
                        children: [(0,
                        r.jsxs)("span", {
                            children: ["CPU: ", n, "%"]
                        }), (0,
                        r.jsxs)("span", {
                            children: ["NET: ", d, "Mb/s"]
                        }), (0,
                        r.jsxs)("span", {
                            children: ["PWR: ", m, "%"]
                        }), (0,
                        r.jsxs)("span", {
                            className: s().rightAlign,
                            children: [(0,
                            r.jsx)("span", {
                                className: s().status,
                                children: "ai-connected"
                            }), (0,
                            r.jsx)("span", {
                                children: e
                            })]
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: s().content,
                        children: [(0,
                        r.jsxs)("div", {
                            className: s().logoContainer,
                            children: [(0,
                            r.jsx)("img", {
                                src: "/Elon.png",
                                alt: "Jeet Terminal Logo",
                                className: s().logo
                            }), (0,
                            r.jsxs)("div", {
                                className: s().logoText,
                                children: [(0,
                                r.jsx)("div", {
                                    className: s().terminalTitle,
                                    children: "HARRY BOLZ TERMINAL"
                                }), (0,
                                r.jsx)("div", {
                                    className: s().greeting,
                                    children: "Hello degen i'm harry bolz the new Elon musk, you must"
                                })]
                            })]
                        }), (0,
                        r.jsx)("div", {
                            className: s().divider
                        }), (0,
                        r.jsx)("div", {
                            className: s().gameArea,
                            children: b ? j ? w ? (0,
                            r.jsxs)("div", {
                                className: s().winner,
                                children: [(0,
                                r.jsx)("p", {
                                    children: "Congratulations! You've successfully jeeted on all questions!"
                                }), (0,
                                r.jsx)(i.default, {
                                    href: "https://twitter.com/intent/tweet?text=I%20successfully%20passed%20the%20Jeet%20test.%20maybe%20I%27m%20still%20holding%20my%20$JEET,%20dev%20just%20locked%20supply(he%20did)%20check%20out%20@jeet_terminal",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: s().twitterLink,
                                    children: "Claim your Jeet Certificate"
                                })]
                            }) : (0,
                            r.jsxs)("div", {
                                className: s().gameOver,
                                children: [(0,
                                r.jsx)("p", {
                                    children: "Wrong answer sir, you failed."
                                }), (0,
                                r.jsx)("button", {
                                    className: s().tryAgainButton,
                                    onClick: () => {
                                        g(c([])),
                                        B([]),
                                        v(!1),
                                        p(!1),
                                        T(!1),
                                        N("normal")
                                    }
                                    ,
                                    children: "Try again"
                                })]
                            }) : (0,
                            r.jsxs)(r.Fragment, {
                                children: [(0,
                                r.jsx)("p", {
                                    className: s().question,
                                    children: l[h].question
                                }), (0,
                                r.jsx)("div", {
                                    className: s().buttonContainer,
                                    children: "normal" === S ? (0,
                                    r.jsxs)(r.Fragment, {
                                        children: [(0,
                                        r.jsx)("button", {
                                            className: s().answerButton,
                                            onClick: () => L("I hold"),
                                            children: "I hold"
                                        }), (0,
                                        r.jsx)("button", {
                                            className: s().answerButton,
                                            onClick: () => L("I jeet"),
                                            children: "I jeet"
                                        })]
                                    }) : (0,
                                    r.jsxs)(r.Fragment, {
                                        children: [(0,
                                        r.jsx)("button", {
                                            className: s().answerButton,
                                            onClick: () => L("I jeet"),
                                            children: "I jeet"
                                        }), (0,
                                        r.jsx)("button", {
                                            className: s().answerButton,
                                            onClick: () => L("I hold"),
                                            children: "I hold"
                                        })]
                                    })
                                })]
                            }) : (0,
                            r.jsx)("div", {
                                className: s().startScreen,
                                children: (0,
                                r.jsxs)("div", {
                                    className: s().startContent,
                                    children: [(0,
                                    r.jsx)("div", {
                                        className: s().testInvitation,
                                        children: "HEAR WHAT DOES HARRY HAVE TO SAY"
                                    }), (0,
                                    r.jsx)("button", {
                                        className: s().startButton,
                                        onClick: () => {
                                            let e = c([]);
                                            g(e),
                                            B([e]),
                                            T(!0)
                                        }
                                        ,
                                        children: "HEAR"
                                    })]
                                })
                            })
                        })]
                    })]
                })
            })
        }
    },
    6777: function(e) {
        e.exports = {
            main: "page_main__nw1Wk"
        }
    },
    7475: function(e) {
        e.exports = {
            buyJeetButton: "BuyJeetButton_buyJeetButton__sc3kQ"
        }
    },
    667: function(e) {
        e.exports = {
            comingSoonButton: "ComingSoonButton_comingSoonButton__75NoD",
            overlay: "ComingSoonButton_overlay__PE4rq",
            card: "ComingSoonButton_card__PWaqH",
            closeButton: "ComingSoonButton_closeButton__vnuNq",
            cardContent: "ComingSoonButton_cardContent__yWC8j"
        }
    },
    8057: function(e) {
        e.exports = {
            loadingScreen: "LoadingScreen_loadingScreen__lRm3o",
            fadeOut: "LoadingScreen_fadeOut__99rYa",
            loadingContent: "LoadingScreen_loadingContent__ndn9l",
            logo: "LoadingScreen_logo__bQJOT",
            pulse: "LoadingScreen_pulse__cmdfw",
            rupeeSymbol: "LoadingScreen_rupeeSymbol__aIKXC",
            neonPulse: "LoadingScreen_neonPulse__Z_Pq0",
            title: "LoadingScreen_title__K43wq",
            loadingBarContainer: "LoadingScreen_loadingBarContainer__L07Tp",
            loadingBar: "LoadingScreen_loadingBar__25tDz",
            progress: "LoadingScreen_progress__YLmz4",
            shimmer: "LoadingScreen_shimmer__uMEsn",
            loadingPercentage: "LoadingScreen_loadingPercentage__kuA1S",
            loadingMessages: "LoadingScreen_loadingMessages__n1iRI",
            loadingText: "LoadingScreen_loadingText__4l2Xw",
            dots: "LoadingScreen_dots__q077U",
            audioButtonContainer: "LoadingScreen_audioButtonContainer__c_PfC",
            enterTerminalButton: "LoadingScreen_enterTerminalButton__RIiwH",
            buttonVisible: "LoadingScreen_buttonVisible__EbcA_"
        }
    },
    2393: function(e) {
        e.exports = {
            terminalContainer: "Terminal_terminalContainer__Xirjw",
            terminal: "Terminal_terminal__zGiUc",
            windowControls: "Terminal_windowControls__vH1FN",
            close: "Terminal_close__fJhlo",
            minimize: "Terminal_minimize__oiAXd",
            maximize: "Terminal_maximize__AWA_C",
            title: "Terminal_title__fuQL7",
            stats: "Terminal_stats__ArzHL",
            rightAlign: "Terminal_rightAlign__TNbfc",
            status: "Terminal_status__MyCp9",
            content: "Terminal_content__E7791",
            logoContainer: "Terminal_logoContainer__oCAFW",
            logo: "Terminal_logo__aDjPr",
            logoText: "Terminal_logoText__FNSFW",
            greeting: "Terminal_greeting__Dhgvv",
            testInvitationBox: "Terminal_testInvitationBox__XiTG4",
            testInvitation: "Terminal_testInvitation__BgoeO",
            terminalTitle: "Terminal_terminalTitle__smM83",
            gameArea: "Terminal_gameArea___V0AX",
            question: "Terminal_question__wyMaO",
            buttonContainer: "Terminal_buttonContainer__FRUi7",
            answerButton: "Terminal_answerButton__DX7yx",
            tryAgainButton: "Terminal_tryAgainButton__RWQnq",
            gameOver: "Terminal_gameOver__7H_qM",
            winner: "Terminal_winner__bM1uS",
            twitterLink: "Terminal_twitterLink__Xg5li",
            divider: "Terminal_divider__4k1dS",
            startButton: "Terminal_startButton__7zXa8",
            startScreen: "Terminal_startScreen__NgeWL",
            startContent: "Terminal_startContent__Xj2Sw"
        }
    },
    5939: function(e) {
        e.exports = {
            twitterButton: "TwitterButton_twitterButton__VXOcI"
        }
    }
}, function(e) {
    e.O(0, [407, 648, 971, 117, 744], function() {
        return e(e.s = 1538)
    }),
    _N_E = e.O()
}
]);
