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
    "revision": "b0caad7bde0fb8d145d6785f7f84ac69"
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
    "url": "assets/js/10.346557b7.js",
    "revision": "de817270c9161aebcef20ce13e956c2b"
  },
  {
    "url": "assets/js/11.f9301066.js",
    "revision": "2ef18437752ad15f9775a2393f96f910"
  },
  {
    "url": "assets/js/12.ddb5ad5a.js",
    "revision": "442fdf4d520310175bfd87fb19304e17"
  },
  {
    "url": "assets/js/13.02a85f4d.js",
    "revision": "f9acaa1a163a915a61d6f1bdaf98a855"
  },
  {
    "url": "assets/js/14.6b4fece4.js",
    "revision": "bfc41913fb1644319859398c2534c579"
  },
  {
    "url": "assets/js/15.62cd2f80.js",
    "revision": "a51de6dd9ead2d4eb1bdeff29ea528c4"
  },
  {
    "url": "assets/js/16.003fe9c4.js",
    "revision": "8844c08fafa68cf35404d98fa8acf2e4"
  },
  {
    "url": "assets/js/17.a61e6e5c.js",
    "revision": "7906e9e06427475ff7093b5e9574ab39"
  },
  {
    "url": "assets/js/18.4fe5a6f5.js",
    "revision": "2bbce7da51e717d844b36df60a513ce9"
  },
  {
    "url": "assets/js/19.b3287480.js",
    "revision": "28241efc6e0350b8acb42c066f827e75"
  },
  {
    "url": "assets/js/2.6626820a.js",
    "revision": "85e06fa1c0eb4e016d4c7e75a8753dac"
  },
  {
    "url": "assets/js/20.37177107.js",
    "revision": "b1711d1a2fac48880ec9dac95d52827a"
  },
  {
    "url": "assets/js/21.3c57844a.js",
    "revision": "b6c4b034fbfd4dd786672161483027f9"
  },
  {
    "url": "assets/js/22.ac4ace5d.js",
    "revision": "ff59fd845472f0fd9af9ed83831f0024"
  },
  {
    "url": "assets/js/23.38925d9f.js",
    "revision": "a04b3274a59a3a1b3caff0e7ce0d251f"
  },
  {
    "url": "assets/js/24.eb516790.js",
    "revision": "890a668aef356e5778b3e82b84438fa8"
  },
  {
    "url": "assets/js/25.ed7f265b.js",
    "revision": "3665ca1b993dedb4d360e131d5d1de6d"
  },
  {
    "url": "assets/js/3.9e923cde.js",
    "revision": "f2876b70cf7818587737896582fdc0a8"
  },
  {
    "url": "assets/js/4.f4f6a1a1.js",
    "revision": "6734f1db4ea3b23c283d1ece3f7be385"
  },
  {
    "url": "assets/js/5.3751062a.js",
    "revision": "fe7e457b0f2924eaa907b6636405cf16"
  },
  {
    "url": "assets/js/6.ac505818.js",
    "revision": "356f28fd4e9d65acbddb96f0048c94ad"
  },
  {
    "url": "assets/js/7.4e41fba5.js",
    "revision": "3c73c139df518a42be131178bde4c504"
  },
  {
    "url": "assets/js/8.1694dfe5.js",
    "revision": "0a7db8eca8e8f5a0c3226025f2ba2af3"
  },
  {
    "url": "assets/js/9.2c4af095.js",
    "revision": "2c6710c6e07972e0c6ff0afef1febde9"
  },
  {
    "url": "assets/js/app.6b4dc327.js",
    "revision": "f617311278097a7ec21d5c0ea120d68c"
  },
  {
    "url": "index.html",
    "revision": "e1e95b46781feef19db66db1cad5244c"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/chinese/index.html",
    "revision": "968eaf6af403bb344399643b9c443682"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/english/index.html",
    "revision": "398605b9a81cf5e91df522630f74a8ad"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/math/index.html",
    "revision": "7f0883057e8ae1ef2f146e6192076b79"
  },
  {
    "url": "initwithmarkdown/教育课程/1mianclass/math/数学backup.html",
    "revision": "28f2e72aaf35c103c9d352a7b09ea242"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/biology/index.html",
    "revision": "a009a7a56a9f63520047618bb58f51d9"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/chemistry/index.html",
    "revision": "bc50763a3f4f0523442cfbcc796e89a1"
  },
  {
    "url": "initwithmarkdown/教育课程/2science/physics/index.html",
    "revision": "ef7d5a28a3aaf56665cc0667f9263f94"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/geography/index.html",
    "revision": "cbfe1edafc2f36431abff96adb4d1c37"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/history/index.html",
    "revision": "cc3947890f299d0834d3a0a51e26c8c0"
  },
  {
    "url": "initwithmarkdown/教育课程/3arts/politics/index.html",
    "revision": "b63830f95a2f81eff65d4f3330f8dcdc"
  },
  {
    "url": "initwithmarkdown/计算机科学/index.html",
    "revision": "e950f920dbede356dbfbe88f6a223777"
  },
  {
    "url": "initwithmarkdown/计算机科学/操作系统.html",
    "revision": "304f729b662d071b9c0eed8880a16a0e"
  },
  {
    "url": "initwithmarkdown/计算机科学/数学基础.html",
    "revision": "d0ae638da77318be23307504ee0ba13b"
  },
  {
    "url": "initwithmarkdown/计算机科学/科学基础.html",
    "revision": "9666ee3675bda5e4da55976809862014"
  },
  {
    "url": "initwithmarkdown/计算机科学/算法和数据结构.html",
    "revision": "2c1ffd5c740ffcfa99f07651e3e8ef61"
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
