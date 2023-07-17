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
    "revision": "c6f160ba3b846763e5bfbec1a4ecf8af"
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
    "url": "assets/js/10.15cce3d9.js",
    "revision": "acb3a8f509222f995beb5072dfd9b19b"
  },
  {
    "url": "assets/js/11.185af32a.js",
    "revision": "580821dac87c8311f4eb664c6cc23579"
  },
  {
    "url": "assets/js/12.42a25047.js",
    "revision": "2b2f4ed357d676c9d20d2afe5269b0e3"
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
    "url": "assets/js/18.4dca8e7b.js",
    "revision": "3b08ae0eda2821678486eaa4e6d5eff0"
  },
  {
    "url": "assets/js/19.90939c23.js",
    "revision": "9586a18afac1e9b0fca7ec85aef72e90"
  },
  {
    "url": "assets/js/2.1c23e5fa.js",
    "revision": "2fd5939991bd8036f34c3025a2bf40d4"
  },
  {
    "url": "assets/js/20.4d3b3ab7.js",
    "revision": "1d0591d24988a13323d773fe19351127"
  },
  {
    "url": "assets/js/21.622ca0b8.js",
    "revision": "385cd3b395719c2340be54d147e29f5f"
  },
  {
    "url": "assets/js/22.d67fe49d.js",
    "revision": "1c407707d8bbe9615bc00b0f2d06b5cc"
  },
  {
    "url": "assets/js/23.75647f34.js",
    "revision": "a877ed15169bc0fb02e444bf2ec0b273"
  },
  {
    "url": "assets/js/24.c4a348ec.js",
    "revision": "a8074aaaf596a4a907de5f70db1214a2"
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
    "url": "assets/js/7.f5ce77e6.js",
    "revision": "3709f767c410de30b41e6491e7746b06"
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
    "url": "assets/js/app.b10ab12c.js",
    "revision": "520c5d89de3641f7c8d53e4685d984d3"
  },
  {
    "url": "index.html",
    "revision": "685e62a9720b720a6c07550bb24f1c37"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/chinese/index.html",
    "revision": "4f166ddc8d4af486bd9276c9a3736533"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/english/index.html",
    "revision": "73da1d4355c7af71adee021f3643bb4c"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/math/index.html",
    "revision": "a291040b12d7fe8c91aca8bbecea6379"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/math/数学backup.html",
    "revision": "f304d3605667affa20192229da51b70f"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/biology/index.html",
    "revision": "e3bbec99620ac3198cc5e30d8236e2cc"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/chemistry/index.html",
    "revision": "43c746d753011fd3ded8eaa8d25dbf64"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/physics/index.html",
    "revision": "f103b45df129f6a45ecdfdec2f2ab646"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/geography/index.html",
    "revision": "f3d24551c263d05c14d4e6535cd6a6fd"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/history/index.html",
    "revision": "dfb0b42ddcabe578a0fa775fe53baf7e"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/politics/index.html",
    "revision": "34f771daebbcd9ca3252d70a79808d2a"
  },
  {
    "url": "initwithmarkdown/计算机科学/index.html",
    "revision": "d3e8f975cde1b227e421a825b736822c"
  },
  {
    "url": "initwithmarkdown/计算机科学/tmp.html",
    "revision": "ccc7db764205bc1fc18a30ba98a4c181"
  },
  {
    "url": "initwithmarkdown/计算机科学/人类历史.html",
    "revision": "cb5ff476c963a70dff52f0a41cdfaef4"
  },
  {
    "url": "initwithmarkdown/计算机科学/人类起源.html",
    "revision": "71972f81b88578a4a805fde0edb594f5"
  },
  {
    "url": "initwithmarkdown/计算机科学/经验知识.html",
    "revision": "378406e08ccf96294cee8e36ae99553f"
  },
  {
    "url": "initwithmarkdown/计算机科学/逻辑思维.html",
    "revision": "e291b456f0bd201f74612ca30544e393"
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
