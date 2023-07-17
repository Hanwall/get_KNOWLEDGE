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
    "revision": "3b91a81703a319182eab310965b7a2e1"
  },
  {
    "url": "assets/css/0.styles.89f15ef5.css",
    "revision": "d9dfe546742b81bc9b27b2ff7f173c56"
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
    "url": "assets/js/10.15cce3d9.js",
    "revision": "acb3a8f509222f995beb5072dfd9b19b"
  },
  {
    "url": "assets/js/11.e699299b.js",
    "revision": "e5664211d2aba22ccdfd60486835bd97"
  },
  {
    "url": "assets/js/12.239ef461.js",
    "revision": "feec983f1638f4d8c0a71207ff58d991"
  },
  {
    "url": "assets/js/13.be7bcd7a.js",
    "revision": "aad6633e62bd05ab13e26c84a654c45b"
  },
  {
    "url": "assets/js/14.5175a914.js",
    "revision": "a9eae000b4a8a5d79cc601aa7fbbd89f"
  },
  {
    "url": "assets/js/15.a8718503.js",
    "revision": "607441187f8a101ff01e6e37b2d9e8cb"
  },
  {
    "url": "assets/js/16.6c58c9c9.js",
    "revision": "9e34413ab9ddc3a49d51c9fe15db6089"
  },
  {
    "url": "assets/js/17.61d9adbd.js",
    "revision": "dad7e63d766321dc1fe5e8ce5d91da9e"
  },
  {
    "url": "assets/js/18.1cfde02d.js",
    "revision": "3ba035285665e4521a6f9b463b61fcc3"
  },
  {
    "url": "assets/js/19.e3a07577.js",
    "revision": "3878f110bd75d9a3d126e35d1293153e"
  },
  {
    "url": "assets/js/2.1c23e5fa.js",
    "revision": "2fd5939991bd8036f34c3025a2bf40d4"
  },
  {
    "url": "assets/js/20.b8ebf46b.js",
    "revision": "c9da3d7dd00d1d703259ffe977e83f9b"
  },
  {
    "url": "assets/js/21.896eb370.js",
    "revision": "fefbf9ac4941dbd56d7e276c367e48b6"
  },
  {
    "url": "assets/js/22.ae3e2404.js",
    "revision": "c1581dfe3a4f0a181f07535189c7bd98"
  },
  {
    "url": "assets/js/23.e4d09370.js",
    "revision": "1b406734da6e93b03a920e38ee95e8a7"
  },
  {
    "url": "assets/js/24.295ea781.js",
    "revision": "4defe2f23b2607c60de7eeaeed48068f"
  },
  {
    "url": "assets/js/25.10a1e13a.js",
    "revision": "e34851c55e6c22f392870fbe44fcca43"
  },
  {
    "url": "assets/js/26.14682406.js",
    "revision": "a75d7627fead8d9dd7eb670d4faf3b49"
  },
  {
    "url": "assets/js/3.0d9a4fae.js",
    "revision": "9ef3421df920b52c0307885c7c708125"
  },
  {
    "url": "assets/js/4.98a973ac.js",
    "revision": "9d661b746392c5f55a49e5c7afa71a62"
  },
  {
    "url": "assets/js/5.8f30e81b.js",
    "revision": "ded34e39adc2cf511d22376b9a213116"
  },
  {
    "url": "assets/js/6.8520dfb3.js",
    "revision": "b4090ce7e855884bec7d647e50ebddf1"
  },
  {
    "url": "assets/js/7.4c7350a2.js",
    "revision": "b868e59d634ac528a2b80495571ad770"
  },
  {
    "url": "assets/js/8.226cfc41.js",
    "revision": "694c8ba214428baac6d5d34333319869"
  },
  {
    "url": "assets/js/9.58bead91.js",
    "revision": "6af6adc978982bf4a07155b5ce73bf58"
  },
  {
    "url": "assets/js/app.b6dde661.js",
    "revision": "dc206c1c4a2b88f42c7b2db2ecc05243"
  },
  {
    "url": "index.html",
    "revision": "a084015b44091433401b51ec5398d4b3"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/chinese/index.html",
    "revision": "adf9c583dfaa46fa823d7ca0d7240c4f"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/english/index.html",
    "revision": "70b3510b255ad43344419ee204a10dee"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/math/index.html",
    "revision": "06bb0944231dfcde2b60cdf6a6d47146"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/math/数学backup.html",
    "revision": "e2e52a274a936baf994424dc036be59b"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/biology/index.html",
    "revision": "b90871d87b5b26d4ef181e5344cfb289"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/chemistry/index.html",
    "revision": "8468d3a84d283cd4612ff6752f83ae37"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/physics/index.html",
    "revision": "b2894bf1b459fa8c9a894e3d9218915c"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/geography/index.html",
    "revision": "2a4697dcc9066c236a6cfda57c50b133"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/history/index.html",
    "revision": "d3c76f535fbdac7b1abbf32e646319d5"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/politics/index.html",
    "revision": "010103c6a677f993ae8747d465bc1df1"
  },
  {
    "url": "initwithmarkdown/计算机科学/index.html",
    "revision": "5f8c5002258f0ca3baf4830d4f7439a1"
  },
  {
    "url": "initwithmarkdown/计算机科学/tmp.html",
    "revision": "7211b3d16e34c679897e5947da697447"
  },
  {
    "url": "initwithmarkdown/计算机科学/人类历史.html",
    "revision": "2916e687d8f655e97cd6d7cdb96f49cd"
  },
  {
    "url": "initwithmarkdown/计算机科学/人类起源.html",
    "revision": "4e4c725f2755e42fe8920d082b9e47a4"
  },
  {
    "url": "initwithmarkdown/计算机科学/经验知识.html",
    "revision": "04651ff4edcb632ab3e2639d0c6bfda3"
  },
  {
    "url": "initwithmarkdown/计算机科学/逻辑思维.html",
    "revision": "44d565ceb1e67903a1b1fb1591df44f0"
  },
  {
    "url": "logo/index.jpg",
    "revision": "07a481cf6281f8b181c353e44e97c565"
  },
  {
    "url": "logo/loading.gif",
    "revision": "c502cd01c910b4f53d86603d6bd078ff"
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
