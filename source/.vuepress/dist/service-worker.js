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
    "revision": "11e4777de74176bd3a3a1ef0d98a3565"
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
    "url": "assets/js/10.d69f79a4.js",
    "revision": "66753b7723018bb1380f6c3ea3851546"
  },
  {
    "url": "assets/js/11.8377cc4e.js",
    "revision": "932a9d2d1b63b96718b1a738cf37af8e"
  },
  {
    "url": "assets/js/12.b26883be.js",
    "revision": "45bfc8d0bf2207b26e818912ae4ad36e"
  },
  {
    "url": "assets/js/13.f11ce7b4.js",
    "revision": "e65f7fb6248366491cee2893e13ef92b"
  },
  {
    "url": "assets/js/14.3af93817.js",
    "revision": "e61eaae641035a1d33c4cf1929b42d19"
  },
  {
    "url": "assets/js/15.86716c6a.js",
    "revision": "82d8dc45c4ae7d6d34c265c4028fa06a"
  },
  {
    "url": "assets/js/16.e4abdc20.js",
    "revision": "cae2a92d185f43a3a2ac0a24f6159520"
  },
  {
    "url": "assets/js/17.bbe34638.js",
    "revision": "5fedf2120d442e82d145cfdbc4133e42"
  },
  {
    "url": "assets/js/18.095c5f51.js",
    "revision": "96a90c6539dd3ff2d7de4303926265c4"
  },
  {
    "url": "assets/js/19.f7eed3d3.js",
    "revision": "9260a5053fbd387084d72487eb83d927"
  },
  {
    "url": "assets/js/2.d04ce6e6.js",
    "revision": "c520748d4b81c0b29c87985c36585ca6"
  },
  {
    "url": "assets/js/20.1bb0da64.js",
    "revision": "68b96070bdd308f3e7944f162156d647"
  },
  {
    "url": "assets/js/21.83692055.js",
    "revision": "702fedb961eb0ab0de1765caae04d61e"
  },
  {
    "url": "assets/js/22.c6f76fc9.js",
    "revision": "81ca0646d79b5cf4e000392f0a6e4e58"
  },
  {
    "url": "assets/js/23.1c7afb60.js",
    "revision": "4308fc63822af0979e1bed3c9afbce1b"
  },
  {
    "url": "assets/js/24.3677c262.js",
    "revision": "df8dba9f6b2e6027c56b9a9bd74d56b5"
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
    "url": "assets/js/7.faeeafe7.js",
    "revision": "2e683ddca2332cc4db957ec5e9dd5173"
  },
  {
    "url": "assets/js/8.2f6dce00.js",
    "revision": "eb56bb8b53003352e35595ec48ca0083"
  },
  {
    "url": "assets/js/9.f95bbb1f.js",
    "revision": "461ac8ea17f890697e07d3ba41dcc546"
  },
  {
    "url": "assets/js/app.50217e34.js",
    "revision": "bb343c2ada30c32356c05acaccf73ac2"
  },
  {
    "url": "index.html",
    "revision": "cae765403c5be8d2e6d5abbab1a9329e"
  },
  {
    "url": "initwithmarkdown/学习思路/index.html",
    "revision": "c50f8aee3ad4732617028025299ca817"
  },
  {
    "url": "initwithmarkdown/学习思路/tmp.html",
    "revision": "f0cd7b2923070fbc64487e0260596ac1"
  },
  {
    "url": "initwithmarkdown/学习思路/人类历史.html",
    "revision": "24ef88b514d5676f932fbeced35b862e"
  },
  {
    "url": "initwithmarkdown/学习思路/人类起源.html",
    "revision": "f7a3f4189cb20b1db672689043bed61b"
  },
  {
    "url": "initwithmarkdown/学习思路/经验知识.html",
    "revision": "cd43d81d8e5a48452900eb0cb0fa5a9b"
  },
  {
    "url": "initwithmarkdown/学习思路/逻辑思维.html",
    "revision": "c7ab1904909c11ae7206410a8a883454"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/chinese/index.html",
    "revision": "ec00818292aacfa10c9b3557f563bfaf"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/english/index.html",
    "revision": "321b833cd905c52bb5de3ecb4b7aa8a4"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/math/index.html",
    "revision": "38df078fc54b9978c11bacfe101d25b8"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/math/数学backup.html",
    "revision": "e8430cfb999f8b9aed9ba4b01eae7459"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/biology/index.html",
    "revision": "4eb3452987e4e4b06785740e1a0b13ae"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/chemistry/index.html",
    "revision": "93e6997c1a13d9c2b8754fa8fe82958b"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/physics/index.html",
    "revision": "8c5fc8aa5cbd6b05db5d6820e1a70185"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/geography/index.html",
    "revision": "1710e7fa04bb86388b72811e834ead79"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/history/index.html",
    "revision": "b575f0cde5e3cd2eb7e7a1872bafe146"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/politics/index.html",
    "revision": "8ed5197301eeea09e598f20ddb4112f0"
  },
  {
    "url": "logo/index.jpg",
    "revision": "07a481cf6281f8b181c353e44e97c565"
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
