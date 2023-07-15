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
    "revision": "71a63b0df2e915b5c04be67eed934157"
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
    "url": "assets/js/10.e4c73f57.js",
    "revision": "459adcec866d4868d0fdd41df95a11a5"
  },
  {
    "url": "assets/js/11.abd984f9.js",
    "revision": "df1e53ea807f43d1e36971457b8f8958"
  },
  {
    "url": "assets/js/12.b0ef2c8c.js",
    "revision": "6460df5a91f9a1ac83a7f3c5622886ae"
  },
  {
    "url": "assets/js/13.388a3929.js",
    "revision": "c6cca44de717ae6ba31123db73ed9c15"
  },
  {
    "url": "assets/js/14.e9c6e08c.js",
    "revision": "940184008eadec8cb6734d7483b2e2b1"
  },
  {
    "url": "assets/js/15.ef4eeb68.js",
    "revision": "449a27d2142d4348a4eacf24f4b0f2ed"
  },
  {
    "url": "assets/js/16.c97a0f2b.js",
    "revision": "bc218fad77043495e7e30baf2b9d0251"
  },
  {
    "url": "assets/js/17.014472ec.js",
    "revision": "6f9cfce7692dac7175102048f9cbb72d"
  },
  {
    "url": "assets/js/18.afa1dc32.js",
    "revision": "3cf155035da51c0bb6832326820df28e"
  },
  {
    "url": "assets/js/19.c394cf94.js",
    "revision": "2a45946612b873e2bbf9a3a4db363db2"
  },
  {
    "url": "assets/js/2.1c23e5fa.js",
    "revision": "2fd5939991bd8036f34c3025a2bf40d4"
  },
  {
    "url": "assets/js/20.1b5f562f.js",
    "revision": "a95f252969fc5d895f8e45e6c6c30893"
  },
  {
    "url": "assets/js/21.955012d1.js",
    "revision": "6d8cdbce2e8976e114968470f574ed8b"
  },
  {
    "url": "assets/js/22.a7ffdd67.js",
    "revision": "24cb16fb57540aaf54b835663b1635ba"
  },
  {
    "url": "assets/js/23.fd4e9983.js",
    "revision": "4ee37258696769c7b52c94c7ffdc60e9"
  },
  {
    "url": "assets/js/24.2b6fa1dd.js",
    "revision": "4c862d5a132f7eddf9ab4bdf670d8ff4"
  },
  {
    "url": "assets/js/25.7dfa7a40.js",
    "revision": "1009129e0d64d8bb491151814b66a70b"
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
    "url": "assets/js/7.016d7d0f.js",
    "revision": "827449602e07b1860d2f26ce21409f04"
  },
  {
    "url": "assets/js/8.226cfc41.js",
    "revision": "694c8ba214428baac6d5d34333319869"
  },
  {
    "url": "assets/js/9.7ac3cf6a.js",
    "revision": "6af6adc978982bf4a07155b5ce73bf58"
  },
  {
    "url": "assets/js/app.1120ae24.js",
    "revision": "d941483d43f06ab0e26217d5df03aefa"
  },
  {
    "url": "index.html",
    "revision": "8ceac2ed15dd3f2ee391dc088630c6de"
  },
  {
    "url": "initwithmarkdown/学习思路/index.html",
    "revision": "340acbb7ac5da0c46981c0a04b0c5935"
  },
  {
    "url": "initwithmarkdown/学习思路/tmp.html",
    "revision": "4e45773ddeec0fef79cf194fc2c26097"
  },
  {
    "url": "initwithmarkdown/学习思路/人类历史.html",
    "revision": "f4dbe645556267d8924f01b8d6fd6ae4"
  },
  {
    "url": "initwithmarkdown/学习思路/人类起源.html",
    "revision": "6ebb3280de09433d97014edb9a6f5af0"
  },
  {
    "url": "initwithmarkdown/学习思路/经验知识.html",
    "revision": "cb86a0a077ca87f7d046cd584675d827"
  },
  {
    "url": "initwithmarkdown/学习思路/逻辑思维.html",
    "revision": "c862908a298122a00b38e8766334e8b4"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/chinese/index.html",
    "revision": "80741cd8b267f155febc58921d51feab"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/english/index.html",
    "revision": "897c537c0cd03cc4aeb9ee29194ee632"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/math/index.html",
    "revision": "f396fd94aa894f63e88176cc5e2fd4e2"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/math/数学backup.html",
    "revision": "324f3b9e7c907bfa45fee149ba350a45"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/biology/index.html",
    "revision": "006ba5e9c95203b7e8b8fe0f8019a9e7"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/chemistry/index.html",
    "revision": "c6ce2819631659e132584fc296dadde7"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/physics/index.html",
    "revision": "33a61e7036b0995a8247d54b4e094c14"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/geography/index.html",
    "revision": "b69862f3a7599dc4efd193868f4cd592"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/history/index.html",
    "revision": "094d8a6c00b90fa41f5c50bc5c8a9edb"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/politics/index.html",
    "revision": "f503e40fcf5f0f8068e20132d7f4a1cf"
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
