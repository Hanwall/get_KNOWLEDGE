/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "91945788e24609764a829df186accaab"
  },
  {
    "url": "assets/css/0.styles.89f15ef5.css",
    "revision": "d9dfe546742b81bc9b27b2ff7f173c56"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.899c9d0b.js",
    "revision": "334854abe44e7be1f83750da35eac078"
  },
  {
    "url": "assets/js/11.9380d12f.js",
    "revision": "932a9d2d1b63b96718b1a738cf37af8e"
  },
  {
    "url": "assets/js/12.1307a0c2.js",
    "revision": "297570a4d3ce711ec8b06458bbc9e9c6"
  },
  {
    "url": "assets/js/13.5df0c089.js",
    "revision": "d860050b9d6ab9d737a4556a296b4d98"
  },
  {
    "url": "assets/js/14.a11e575f.js",
    "revision": "77ab14dd35a2f96c5c971b7ce4646837"
  },
  {
    "url": "assets/js/15.6d084e85.js",
    "revision": "1e206c4ebecc6f01c68df30cbb7a8926"
  },
  {
    "url": "assets/js/16.63211205.js",
    "revision": "a036314f623d2b168887b78e9b91e0de"
  },
  {
    "url": "assets/js/17.f758e0ca.js",
    "revision": "b3114611930387000bea12a22a91523f"
  },
  {
    "url": "assets/js/18.abcffaa1.js",
    "revision": "96a90c6539dd3ff2d7de4303926265c4"
  },
  {
    "url": "assets/js/19.5a9400cf.js",
    "revision": "34774cd552175629ade30c74535e9bc7"
  },
  {
    "url": "assets/js/2.944d081a.js",
    "revision": "c2c019a26961703582a5572bb95fd651"
  },
  {
    "url": "assets/js/20.0582f339.js",
    "revision": "d9a2ab1cb93b06111d764b19e89d2615"
  },
  {
    "url": "assets/js/21.a68ea5a5.js",
    "revision": "4c57829d79ddcc77c4b42415468f4e4f"
  },
  {
    "url": "assets/js/22.8c9e1e87.js",
    "revision": "4747cb79d7feb90695fdd9be9ced232c"
  },
  {
    "url": "assets/js/23.d4537b15.js",
    "revision": "377c540c38892d3f852ecb5571bad9a8"
  },
  {
    "url": "assets/js/24.b94d9f0e.js",
    "revision": "05fdf49fe5aa8b5ce484d98d92fc5041"
  },
  {
    "url": "assets/js/25.1c94ba05.js",
    "revision": "e2edf426825d8b644677befa9f826112"
  },
  {
    "url": "assets/js/3.41273a07.js",
    "revision": "eae6c58f232e920fdb485df6df5cf0cd"
  },
  {
    "url": "assets/js/4.75c70398.js",
    "revision": "f32695055dd16408f52fbb323faf31d4"
  },
  {
    "url": "assets/js/5.d2b1a8a0.js",
    "revision": "f85f687f50e222274d90fe6d38801270"
  },
  {
    "url": "assets/js/6.bc9967f2.js",
    "revision": "0508979029bee9139f9146ca53168865"
  },
  {
    "url": "assets/js/7.9a919e10.js",
    "revision": "09da341daeb98baf849b5c0ce0d0ef4d"
  },
  {
    "url": "assets/js/8.6de4adc2.js",
    "revision": "f0173fda4c8930499a7c2bd56eb77633"
  },
  {
    "url": "assets/js/9.55ac5867.js",
    "revision": "54b766d3a99beb6f5b5918df33003dae"
  },
  {
    "url": "assets/js/app.9c387870.js",
    "revision": "0228e852ec1c780c851cba53e85db82d"
  },
  {
    "url": "index.html",
    "revision": "092218ffe259ada5bc6164d327f3e550"
  },
  {
    "url": "initwithmarkdown/学习思路/index.html",
    "revision": "584c4f289cdd6f8b241cd7d3f13d9903"
  },
  {
    "url": "initwithmarkdown/学习思路/tmp.html",
    "revision": "c7fd7baff2fa42b67204a2ddc2830f43"
  },
  {
    "url": "initwithmarkdown/学习思路/人类历史.html",
    "revision": "15b5c836f52239ad32dd706acf223b5c"
  },
  {
    "url": "initwithmarkdown/学习思路/人类起源.html",
    "revision": "3495653e622ebc8dd0044fa8b08d1525"
  },
  {
    "url": "initwithmarkdown/学习思路/经验知识.html",
    "revision": "ed56283c4676e6597463f9e44a345184"
  },
  {
    "url": "initwithmarkdown/学习思路/逻辑思维.html",
    "revision": "acaa3cf09bc87f1e8d050c48d5e65168"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/chinese/index.html",
    "revision": "48eea70b4662404fe2f68bc8a08ec34e"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/english/index.html",
    "revision": "bc5768cf0335b6a305732281cce10213"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/math/index.html",
    "revision": "306befaa44cca9c027a7844cfcc3f5d5"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/math/数学backup.html",
    "revision": "5fb1041007b48635ebc279ed5d021c83"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/biology/index.html",
    "revision": "ad3629dfa1ca8f1ac44f925e1925c4d6"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/chemistry/index.html",
    "revision": "09ae1608f03d90c9aeea412c4b4707fa"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/physics/index.html",
    "revision": "6dd35f4a2ea6285ea55f1c9b454ef0a4"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/geography/index.html",
    "revision": "856c60dc31a579f6aa000ceb63aab026"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/history/index.html",
    "revision": "8289125aeff850db09ae090491507438"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/politics/index.html",
    "revision": "712ea8130c4c99a64592de01a085ef97"
  },
  {
    "url": "logo/icon.svg",
    "revision": "3a5f80f925f3fc97db744f9876a23f81"
  },
  {
    "url": "logo/jasonzhang1.jpeg",
    "revision": "938940a7b66efaed1c011b699c7e1b34"
  },
  {
    "url": "logo/jasonzhang2.jpeg",
    "revision": "ff1e985986759096ba9fca4532c530cb"
  },
  {
    "url": "logo/loading.gif",
    "revision": "c502cd01c910b4f53d86603d6bd078ff"
  },
  {
    "url": "维基百科镜像答案.png",
    "revision": "4dd7438613a40ddb9b68999140baf24e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
