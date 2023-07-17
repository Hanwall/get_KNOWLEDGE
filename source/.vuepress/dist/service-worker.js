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
    "revision": "f4aeb1c017e1f19b80dde70342cd9613"
  },
  {
    "url": "assets/css/0.styles.9b3e2ba3.css",
    "revision": "6747c4bda0e355ae8a3b018236c0583a"
  },
  {
    "url": "assets/img/jasonzhang1.938940a7.jpeg",
    "revision": "938940a7b66efaed1c011b699c7e1b34"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e61b2b8a.js",
    "revision": "af1ecb5aa5f8fa0ca7a1ab6fccfe4f43"
  },
  {
    "url": "assets/js/11.dd47d39c.js",
    "revision": "678b38be9da55d81f2b2835ae286d967"
  },
  {
    "url": "assets/js/12.53b8ea40.js",
    "revision": "64f785e8c4e7466ba4d3d8e1528375b5"
  },
  {
    "url": "assets/js/13.de683046.js",
    "revision": "942cffece4452c448ebacf95ccdeef3d"
  },
  {
    "url": "assets/js/14.023f9a54.js",
    "revision": "4c53808f163eafce4111531d67bd3599"
  },
  {
    "url": "assets/js/15.646d7b83.js",
    "revision": "62b1715f5886a6552ade5da91209301c"
  },
  {
    "url": "assets/js/16.41818435.js",
    "revision": "0fdf37fa60a332252052c15b16e1d91f"
  },
  {
    "url": "assets/js/17.cfd18f7c.js",
    "revision": "c96f5e709c16e5dba94d0be5d463b085"
  },
  {
    "url": "assets/js/18.f62d2d36.js",
    "revision": "9db8c4faeaa1e490a771829fe9ed84c1"
  },
  {
    "url": "assets/js/19.a9e101b3.js",
    "revision": "a227f92e458e8d441dcab2799acba3d6"
  },
  {
    "url": "assets/js/2.d04ce6e6.js",
    "revision": "c520748d4b81c0b29c87985c36585ca6"
  },
  {
    "url": "assets/js/20.1746f66c.js",
    "revision": "7b9160650cb3041b240c5fbaf590ec25"
  },
  {
    "url": "assets/js/21.0470d72a.js",
    "revision": "5e9884bed44174390ebe57ce4c457cd8"
  },
  {
    "url": "assets/js/22.f0b972ab.js",
    "revision": "cbf5c0394fcded25ea092403669e8a8c"
  },
  {
    "url": "assets/js/23.573fe4fe.js",
    "revision": "2c96c074f16a59aa0eb85957b10022bf"
  },
  {
    "url": "assets/js/24.635f03de.js",
    "revision": "e04044d232ef412b0253614e8299fe7d"
  },
  {
    "url": "assets/js/25.150b17ef.js",
    "revision": "fb1854d88076cb97e435d00f1949e408"
  },
  {
    "url": "assets/js/3.dee93d89.js",
    "revision": "6e3a736a392c441e6ddda840f3fed73f"
  },
  {
    "url": "assets/js/4.d0b6527f.js",
    "revision": "659b92638fda55a8683575f846636c5a"
  },
  {
    "url": "assets/js/5.59d7b333.js",
    "revision": "84d4e32b0dcd61a32954b3c4a8331226"
  },
  {
    "url": "assets/js/6.9a5fdda4.js",
    "revision": "8fb0e4543f63d60965895bd3eee9c3c7"
  },
  {
    "url": "assets/js/7.df9332b3.js",
    "revision": "27d39b13869909990912a0622e829a48"
  },
  {
    "url": "assets/js/8.2f6dce00.js",
    "revision": "eb56bb8b53003352e35595ec48ca0083"
  },
  {
    "url": "assets/js/9.1e149998.js",
    "revision": "8bf48e78923622ef79552747c125addb"
  },
  {
    "url": "assets/js/app.156c6b01.js",
    "revision": "54f3534d590609fc502231b11663e8e8"
  },
  {
    "url": "index.html",
    "revision": "80fefb8ba87d714a582a04606900ab77"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/chinese/index.html",
    "revision": "d621b81d308da12cd03accf0624a314a"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/english/index.html",
    "revision": "6147906dc500051a66771e81f25c423b"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/math/index.html",
    "revision": "b6163cbc8ec1be6eb6218661120cd407"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/math/数学backup.html",
    "revision": "507a7a8dc063cf8ef7802fec6353bb7c"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/biology/index.html",
    "revision": "fd2b20e8ed229989f1ff5ea231426a10"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/chemistry/index.html",
    "revision": "520b3906ae59ef0ba198fd9d70fe2ede"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/physics/index.html",
    "revision": "050c10482b97f20b792cc1eec74d2213"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/geography/index.html",
    "revision": "fee000d97029b4c627ceae9ae2842d24"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/history/index.html",
    "revision": "73d115c5bda9b542f5e9ddeeec4ea1b3"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/politics/index.html",
    "revision": "daf14e2ab4a242b44fd23d9b93c69501"
  },
  {
    "url": "initwithmarkdown/计算机科学/index.html",
    "revision": "0684bb6114a9b2f75c4a315cb5b4fd08"
  },
  {
    "url": "initwithmarkdown/计算机科学/tmp.html",
    "revision": "2de9c0b33902b92e5b6d93f920a8a76b"
  },
  {
    "url": "initwithmarkdown/计算机科学/人类历史.html",
    "revision": "f265d0644d5da8e2b1954be93877d204"
  },
  {
    "url": "initwithmarkdown/计算机科学/人类起源.html",
    "revision": "0456243ae6439b86bfd93e189b52e5f3"
  },
  {
    "url": "initwithmarkdown/计算机科学/经验知识.html",
    "revision": "31142504d7dd7fd7cba2737d5e06f365"
  },
  {
    "url": "initwithmarkdown/计算机科学/逻辑思维.html",
    "revision": "7eb957c76467f724721d09b29df25a64"
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
