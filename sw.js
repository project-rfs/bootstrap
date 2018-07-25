/* global workbox:false */

self.importScripts('docs/4.1/assets/js/vendor/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "docs/4.1/about/brand/index.html",
    "revision": "ec6c309a2128b6b97429a4a9aa1abedc"
  },
  {
    "url": "docs/4.1/about/index.html",
    "revision": "bd34e7c12dc6e8b64d001bc1527ad108"
  },
  {
    "url": "docs/4.1/about/license/index.html",
    "revision": "6f169d62cde52f4c113d0d788b5c76c6"
  },
  {
    "url": "docs/4.1/about/overview/index.html",
    "revision": "40f4bc879963167907d0f39a541e0eb2"
  },
  {
    "url": "docs/4.1/about/translations/index.html",
    "revision": "b5bc2e9fd2f26b0216cbc50c5f993623"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-outline.svg",
    "revision": "93998c8ffa206f4b730ef50ad20692c5"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-punchout.svg",
    "revision": "59cc410ba9e916189b9ea54f03bb4574"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-social-logo.png",
    "revision": "1e9e93d863b7811934889f9aac89c7de"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-social.png",
    "revision": "56be615bbca4502de5d55d721dae917f"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-solid.svg",
    "revision": "ba23603c8668f4fe65dc2c7996053224"
  },
  {
    "url": "docs/4.1/assets/css/docs.min.css",
    "revision": "6e3cd62366e30b36d229cb7eb5c064ed"
  },
  {
    "url": "docs/4.1/assets/img/bootstrap-stack.png",
    "revision": "7384412324c769e447d3c4f86e9ff068"
  },
  {
    "url": "docs/4.1/assets/img/bootstrap-themes.png",
    "revision": "3976b58ff407451e8e8b598fdcde2cd2"
  },
  {
    "url": "docs/4.1/assets/img/favicons/android-chrome-192x192.png",
    "revision": "643718426d0a7d60036217ba988155be"
  },
  {
    "url": "docs/4.1/assets/img/favicons/android-chrome-512x512.png",
    "revision": "eb512e79165f504fd4da4d2758d5584b"
  },
  {
    "url": "docs/4.1/assets/img/favicons/apple-touch-icon.png",
    "revision": "042a7e9fdd293212aca19150aef71b0d"
  },
  {
    "url": "docs/4.1/assets/img/favicons/favicon-16x16.png",
    "revision": "50c62448d4014e5fb411887c05c2935b"
  },
  {
    "url": "docs/4.1/assets/img/favicons/favicon-32x32.png",
    "revision": "fed84e16b6ccfe88ee7ffaae5dfefd34"
  },
  {
    "url": "docs/4.1/assets/img/favicons/manifest.json",
    "revision": "8847f7b01fadc1e3c9d652b0dffc915e"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-144x144.png",
    "revision": "84892991321e7998ca4c80ae21175f78"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-150x150.png",
    "revision": "61821c45a353e259bb83f9b0d338f5e8"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-310x150.png",
    "revision": "913e1b81006831c72a7bca38e4125edb"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-310x310.png",
    "revision": "29d79a7e648876504496211f003c4076"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-70x70.png",
    "revision": "386d71707992eb91fc53df303e99c2e7"
  },
  {
    "url": "docs/4.1/assets/img/favicons/safari-pinned-tab.svg",
    "revision": "426e00c049a15eb18c37bc88ca6746d9"
  },
  {
    "url": "docs/4.1/assets/js/docs.min.js",
    "revision": "9109c979ae60b0c5584b59ca6945d630"
  },
  {
    "url": "docs/4.1/assets/js/src/application.js",
    "revision": "83edc01382cfd889f982162964ec374e"
  },
  {
    "url": "docs/4.1/assets/js/src/ie-emulation-modes-warning.js",
    "revision": "c6e7032adf9bd98ac39e83c83108977b"
  },
  {
    "url": "docs/4.1/assets/js/src/pwa.js",
    "revision": "cac6034355863d6205e66862f6a729f7"
  },
  {
    "url": "docs/4.1/assets/js/src/search.js",
    "revision": "5b8bb2081b9e10ee9a469dd5feca5996"
  },
  {
    "url": "docs/4.1/assets/js/vendor/anchor.min.js",
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "docs/4.1/assets/js/vendor/clipboard.min.js",
    "revision": "3f3688138a1b9fc4ef669ce9056b6674"
  },
  {
    "url": "docs/4.1/assets/js/vendor/holder.min.js",
    "revision": "6266d87979b32f717d298f7adf36984a"
  },
  {
    "url": "docs/4.1/assets/js/vendor/jquery-slim.min.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
  },
  {
    "url": "docs/4.1/assets/js/vendor/popper.min.js",
    "revision": "83fb8c4d9199dce0224da0206423106f"
  },
  {
    "url": "docs/4.1/assets/js/vendor/workbox-sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "docs/4.1/browser-bugs/index.html",
    "revision": "54c276776913afb9bfb899280808e5d3"
  },
  {
    "url": "docs/4.1/components/alerts/index.html",
    "revision": "1b86a2433bb6cb2b267b13f5c633a912"
  },
  {
    "url": "docs/4.1/components/badge/index.html",
    "revision": "9cddfef577096e9dd024513200f1c7d5"
  },
  {
    "url": "docs/4.1/components/breadcrumb/index.html",
    "revision": "42fe0c098fbbbc407f500a3c4e95d586"
  },
  {
    "url": "docs/4.1/components/button-group/index.html",
    "revision": "49ec76db51f6704b22f9b9795634078e"
  },
  {
    "url": "docs/4.1/components/buttons/index.html",
    "revision": "c9b2fbbb87a78e18a08616bdb897a221"
  },
  {
    "url": "docs/4.1/components/card/index.html",
    "revision": "42342986d424f6c3b7d8f04d6e82d05f"
  },
  {
    "url": "docs/4.1/components/carousel/index.html",
    "revision": "cf8cd86e31e6980a848de1bc91cc229f"
  },
  {
    "url": "docs/4.1/components/collapse/index.html",
    "revision": "a859d12ede20b2237cd4611424b18ad9"
  },
  {
    "url": "docs/4.1/components/dropdowns/index.html",
    "revision": "7c47bd132e872b9cb3ab5e33c97a34ed"
  },
  {
    "url": "docs/4.1/components/forms/index.html",
    "revision": "04ee54e939d9e68068fac6efc79d4d29"
  },
  {
    "url": "docs/4.1/components/index.html",
    "revision": "31c486009840e2064c83c09189e43159"
  },
  {
    "url": "docs/4.1/components/input-group/index.html",
    "revision": "d4314b0a8305617d3f1a4f0dbc43e6c1"
  },
  {
    "url": "docs/4.1/components/jumbotron/index.html",
    "revision": "2a305071f8ef7b1112552df8311e88a4"
  },
  {
    "url": "docs/4.1/components/list-group/index.html",
    "revision": "87cbeafb1f7eef697fba4f9bfd023b72"
  },
  {
    "url": "docs/4.1/components/modal/index.html",
    "revision": "b7b7564ae249dad4c7e5351a4bd298e6"
  },
  {
    "url": "docs/4.1/components/navbar/index.html",
    "revision": "a5626cf25f6dcae9ba09781b9a577990"
  },
  {
    "url": "docs/4.1/components/navs/index.html",
    "revision": "0c13ff367ee7394cb9d9a9febd61f644"
  },
  {
    "url": "docs/4.1/components/pagination/index.html",
    "revision": "d41b4f4ccf0eefae2dfe980408d969e2"
  },
  {
    "url": "docs/4.1/components/popovers/index.html",
    "revision": "5c5b50c536cd3c04df33247e09cb389b"
  },
  {
    "url": "docs/4.1/components/progress/index.html",
    "revision": "a7243b741ce037d60b1fcbdb41fa53f6"
  },
  {
    "url": "docs/4.1/components/scrollspy/index.html",
    "revision": "30fd3368c88540710eb4b21f4f3d4945"
  },
  {
    "url": "docs/4.1/components/tooltips/index.html",
    "revision": "1bd21fb48e214e0b246c85938459ff67"
  },
  {
    "url": "docs/4.1/content/code/index.html",
    "revision": "d317e622d9e99a98717b40d3973fab31"
  },
  {
    "url": "docs/4.1/content/figures/index.html",
    "revision": "52c4ae13ed22d8daca4ff9d9dfc02bf3"
  },
  {
    "url": "docs/4.1/content/images/index.html",
    "revision": "ae131b83e16ac91f6d280f6dcdf1d65c"
  },
  {
    "url": "docs/4.1/content/index.html",
    "revision": "e1cfba870a925d56d5d233ea5904e39a"
  },
  {
    "url": "docs/4.1/content/reboot/index.html",
    "revision": "a4becb97cbfd51d0f05e581e1478caa3"
  },
  {
    "url": "docs/4.1/content/tables/index.html",
    "revision": "fa8c5f04baf79304d4a6b00dd5fd6ab6"
  },
  {
    "url": "docs/4.1/content/typography/index.html",
    "revision": "2ee118b7c9ea7f61ad18061e9f02e5b7"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap-grid.css",
    "revision": "ff2874cf2b810904a86e75fb662dddf9"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap-grid.min.css",
    "revision": "71671e5000bc7347d6080c92b0bfeeb4"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap-reboot.css",
    "revision": "77572d21a0bb0288c6f6327e8aec28c1"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap-reboot.min.css",
    "revision": "c97b642fa8e08e8fd372d5031f7dd769"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap.css",
    "revision": "5bdc68730bddbdca76cc10c7f02063fe"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap.min.css",
    "revision": "05a6d83c6a1f4e4b2275043e9b380669"
  },
  {
    "url": "docs/4.1/dist/js/bootstrap.bundle.js",
    "revision": "50a98c751c19ae5ea4fc42b2ba2da89b"
  },
  {
    "url": "docs/4.1/dist/js/bootstrap.bundle.min.js",
    "revision": "ef58fee438cd2da2c3b33ff6f1cfeebf"
  },
  {
    "url": "docs/4.1/dist/js/bootstrap.js",
    "revision": "4bc939cd6b79a562e8d14bc7a4674520"
  },
  {
    "url": "docs/4.1/dist/js/bootstrap.min.js",
    "revision": "67176c242e1bdc20603c878dee836df3"
  },
  {
    "url": "docs/4.1/examples/album/album.css",
    "revision": "e884afc370b7f73395903344ed35cea2"
  },
  {
    "url": "docs/4.1/examples/album/index.html",
    "revision": "3cf256607b5e39d812d9abfa8ac6e334"
  },
  {
    "url": "docs/4.1/examples/blog/blog.css",
    "revision": "2ade27f168ff283b43d8f59958de0933"
  },
  {
    "url": "docs/4.1/examples/blog/index.html",
    "revision": "bd2d5e609ff9f87fc74f7f5107a4f569"
  },
  {
    "url": "docs/4.1/examples/carousel/carousel.css",
    "revision": "b66cce64afc73959e79561e633327805"
  },
  {
    "url": "docs/4.1/examples/carousel/index.html",
    "revision": "52f0215a5005cc7c21c5083dd7939a7e"
  },
  {
    "url": "docs/4.1/examples/checkout/form-validation.css",
    "revision": "8e5fb15c4155f38020798e5c2bfb38b7"
  },
  {
    "url": "docs/4.1/examples/checkout/index.html",
    "revision": "a3beb88caa4b44de31976e74ad5eaa83"
  },
  {
    "url": "docs/4.1/examples/cover/cover.css",
    "revision": "211daf4eee015cb38fb10893c4645bbb"
  },
  {
    "url": "docs/4.1/examples/cover/index.html",
    "revision": "048fae28475f3bdd6d7d1612e8ece5cc"
  },
  {
    "url": "docs/4.1/examples/dashboard/dashboard.css",
    "revision": "063bb01078db4c176e59c550ed4fe295"
  },
  {
    "url": "docs/4.1/examples/dashboard/index.html",
    "revision": "2875509e000a7223d1ff26c2df02213c"
  },
  {
    "url": "docs/4.1/examples/floating-labels/floating-labels.css",
    "revision": "fd08b76e0d1fc398e4bb4ca8d90d2e45"
  },
  {
    "url": "docs/4.1/examples/floating-labels/index.html",
    "revision": "0889b053e0315e02b24128c8ad71590f"
  },
  {
    "url": "docs/4.1/examples/grid/grid.css",
    "revision": "4cd2e5cc5e19dc692d50ed6f077154ef"
  },
  {
    "url": "docs/4.1/examples/grid/index.html",
    "revision": "7754ea51ef4513e1c099aca97857fd37"
  },
  {
    "url": "docs/4.1/examples/index.html",
    "revision": "4503e33a707fdd4a7a862d8d35cb47c9"
  },
  {
    "url": "docs/4.1/examples/jumbotron/index.html",
    "revision": "9bb1da29cef11b3993343808dbb488cd"
  },
  {
    "url": "docs/4.1/examples/jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/4.1/examples/navbar-bottom/index.html",
    "revision": "9d593c1276a24a936d31f9edfd7860df"
  },
  {
    "url": "docs/4.1/examples/navbar-fixed/index.html",
    "revision": "f7ead48d9f5f43f295f9635e5f18d6c2"
  },
  {
    "url": "docs/4.1/examples/navbar-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/4.1/examples/navbar-static/index.html",
    "revision": "77004f809351706b609d3cbbf1aec27f"
  },
  {
    "url": "docs/4.1/examples/navbar-static/navbar-top.css",
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "docs/4.1/examples/navbars/index.html",
    "revision": "c7a79fd01d21b29cbdf2c398d71c7f48"
  },
  {
    "url": "docs/4.1/examples/navbars/navbar.css",
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "docs/4.1/examples/offcanvas/index.html",
    "revision": "f33ab0ac2368877adbfec2d8d1ce8317"
  },
  {
    "url": "docs/4.1/examples/offcanvas/offcanvas.css",
    "revision": "9c899909a6992f453af84c259824b642"
  },
  {
    "url": "docs/4.1/examples/offcanvas/offcanvas.js",
    "revision": "5c0edf2d5a4d88ec65e801c0f58ef23a"
  },
  {
    "url": "docs/4.1/examples/pricing/index.html",
    "revision": "0e4ae047b5c504a3125b99c0975a85fb"
  },
  {
    "url": "docs/4.1/examples/pricing/pricing.css",
    "revision": "77eee742e2e84de1e886a444b66aa178"
  },
  {
    "url": "docs/4.1/examples/product/index.html",
    "revision": "1c2bda672d15143ded6e3b5e5be0b6ea"
  },
  {
    "url": "docs/4.1/examples/product/product.css",
    "revision": "e4efe420b0a96e18293c1afeb20ce6d3"
  },
  {
    "url": "docs/4.1/examples/screenshots/album.png",
    "revision": "685d5277fdf6f04aefbcbe01ba93e9ef"
  },
  {
    "url": "docs/4.1/examples/screenshots/blog.png",
    "revision": "d06dc15ae8285908ec7ba9f4b1f98a44"
  },
  {
    "url": "docs/4.1/examples/screenshots/carousel.png",
    "revision": "dc04e087b8ad4f000fa64e266812fc0f"
  },
  {
    "url": "docs/4.1/examples/screenshots/checkout.png",
    "revision": "030255900e0b73653cf6a2d074f17b31"
  },
  {
    "url": "docs/4.1/examples/screenshots/cover.png",
    "revision": "ece97a4eb488c46a86a67d61db25dda2"
  },
  {
    "url": "docs/4.1/examples/screenshots/dashboard.png",
    "revision": "2fc93187d09b5b8c342b962576eaf39e"
  },
  {
    "url": "docs/4.1/examples/screenshots/floating-labels.png",
    "revision": "fae0436f9d026a67778f3a37d29b3dfc"
  },
  {
    "url": "docs/4.1/examples/screenshots/grid.png",
    "revision": "cb63b8b5fd89749a2d87342876306dd8"
  },
  {
    "url": "docs/4.1/examples/screenshots/jumbotron.png",
    "revision": "0f579cb67e8c8535d8fffef7d17b7e45"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-bottom.png",
    "revision": "0cefd6caed82af75be57d758633d9094"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-fixed.png",
    "revision": "1d38f157f0bbbd90957044d30eaef242"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-static.png",
    "revision": "2ff01be7ee251fc5c7f51ccf9de5f48d"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbars.png",
    "revision": "d4fbce8e1e38d78a5134e6be05cdd4d7"
  },
  {
    "url": "docs/4.1/examples/screenshots/offcanvas.png",
    "revision": "c581d49a56f3e9d0d1753195c62e719a"
  },
  {
    "url": "docs/4.1/examples/screenshots/pricing.png",
    "revision": "e33e2f37741c6d15c99f3378e2e551ea"
  },
  {
    "url": "docs/4.1/examples/screenshots/product.png",
    "revision": "af74e4f7ddfc8cf2a44a9c601881329f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sign-in.png",
    "revision": "9e4bf345a8c21403868f70b777efb483"
  },
  {
    "url": "docs/4.1/examples/screenshots/starter-template.png",
    "revision": "1761d4e831e7c0659962e1abdb95421f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sticky-footer-navbar.png",
    "revision": "428112965cf6826db55bcc6db07d9e5f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sticky-footer.png",
    "revision": "59b69c34997abee3d477f836d44ce8a3"
  },
  {
    "url": "docs/4.1/examples/sign-in/index.html",
    "revision": "253d015ba1f15d1a6bc38913e14f5850"
  },
  {
    "url": "docs/4.1/examples/sign-in/signin.css",
    "revision": "a36a90d5eb8f3ba77519d2cae1979d7e"
  },
  {
    "url": "docs/4.1/examples/starter-template/index.html",
    "revision": "dbbfced32a95a6c50bdc755d460832ab"
  },
  {
    "url": "docs/4.1/examples/starter-template/starter-template.css",
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "docs/4.1/examples/sticky-footer-navbar/index.html",
    "revision": "846c7984f0bf4f487ef1a87070aff0db"
  },
  {
    "url": "docs/4.1/examples/sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "6fdbd6c044785ad21176f0a63e5ff5d2"
  },
  {
    "url": "docs/4.1/examples/sticky-footer/index.html",
    "revision": "795a82b74efc535d8407bc7650d9e57b"
  },
  {
    "url": "docs/4.1/examples/sticky-footer/sticky-footer.css",
    "revision": "08458f94e3c790fde385d34fb4c8612c"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/index.html",
    "revision": "84df4402f0742fb12c26e24adece94d5"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/tooltip-viewport.css",
    "revision": "59ee4352f399bfe798346b4be4a5f88f"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/tooltip-viewport.js",
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "docs/4.1/extend/approach/index.html",
    "revision": "b5cb331906317270a0bcc591e9171a7b"
  },
  {
    "url": "docs/4.1/extend/icons/index.html",
    "revision": "a2be4a5f28204474258d1103640ba0c9"
  },
  {
    "url": "docs/4.1/extend/index.html",
    "revision": "d0cc03402b9b79fd6585ee55484436ee"
  },
  {
    "url": "docs/4.1/getting-started/accessibility/index.html",
    "revision": "c511053c00e4123e6b06bf3190ad3178"
  },
  {
    "url": "docs/4.1/getting-started/best-practices/index.html",
    "revision": "d2ee7f03a36b02b51349989a946d6ac5"
  },
  {
    "url": "docs/4.1/getting-started/browsers-devices/index.html",
    "revision": "2a38f9e26a8230c43c257f44d330b34f"
  },
  {
    "url": "docs/4.1/getting-started/build-tools/index.html",
    "revision": "98266931d5941768c1118c508d33433e"
  },
  {
    "url": "docs/4.1/getting-started/contents/index.html",
    "revision": "07cdc0d038a572f48f19868e33dd708d"
  },
  {
    "url": "docs/4.1/getting-started/download/index.html",
    "revision": "8ab5372900e729e91fdefe0d5e9b1645"
  },
  {
    "url": "docs/4.1/getting-started/index.html",
    "revision": "b891f72b6bc357de623f2e433f491668"
  },
  {
    "url": "docs/4.1/getting-started/introduction/index.html",
    "revision": "6d978cc54e9129866e2fffcdbc577641"
  },
  {
    "url": "docs/4.1/getting-started/javascript/index.html",
    "revision": "9fe2c8f2a42413f0a4f064b74ebbcd8e"
  },
  {
    "url": "docs/4.1/getting-started/options/index.html",
    "revision": "2df929078e7b776a5b16491f5f388f32"
  },
  {
    "url": "docs/4.1/getting-started/theming/index.html",
    "revision": "9e4b3750381c5eb75c714343965c16aa"
  },
  {
    "url": "docs/4.1/getting-started/webpack/index.html",
    "revision": "6b949281f30fb521784891e0421b1d2f"
  },
  {
    "url": "docs/4.1/history/index.html",
    "revision": "bd34e7c12dc6e8b64d001bc1527ad108"
  },
  {
    "url": "docs/4.1/index.html",
    "revision": "b891f72b6bc357de623f2e433f491668"
  },
  {
    "url": "docs/4.1/layout/grid/index.html",
    "revision": "586a7b08ca909edb2cea8e78450e1ba5"
  },
  {
    "url": "docs/4.1/layout/index.html",
    "revision": "9cc1f4b5df7b3ca6c991f5e1f04db458"
  },
  {
    "url": "docs/4.1/layout/media-object/index.html",
    "revision": "d33292736539c482f241c3534a073550"
  },
  {
    "url": "docs/4.1/layout/overview/index.html",
    "revision": "b1da5f60b18c48854c50814d2742c15a"
  },
  {
    "url": "docs/4.1/layout/utilities-for-layout/index.html",
    "revision": "b2a4b9b694b86ca142ad10456ce12c61"
  },
  {
    "url": "docs/4.1/migration/index.html",
    "revision": "7fd24b9c948114c1726eb5169ffab036"
  },
  {
    "url": "docs/4.1/team/index.html",
    "revision": "bd34e7c12dc6e8b64d001bc1527ad108"
  },
  {
    "url": "docs/4.1/utilities/borders/index.html",
    "revision": "385262e97a209f73362a00a3d84bc1ad"
  },
  {
    "url": "docs/4.1/utilities/clearfix/index.html",
    "revision": "8ebb47555b5cbae3ed0958276f7a334e"
  },
  {
    "url": "docs/4.1/utilities/close-icon/index.html",
    "revision": "0154241e4d670e82836c82a7472fb55c"
  },
  {
    "url": "docs/4.1/utilities/colors/index.html",
    "revision": "aef8f2a350d68db1ba421de5388c374d"
  },
  {
    "url": "docs/4.1/utilities/display/index.html",
    "revision": "83dd80573d094ad14097bfe7ba993a14"
  },
  {
    "url": "docs/4.1/utilities/embed/index.html",
    "revision": "a1709fd19cf0653104181461f54b7bf8"
  },
  {
    "url": "docs/4.1/utilities/flex/index.html",
    "revision": "303ed3443b1f99b94eb95d5c299b1802"
  },
  {
    "url": "docs/4.1/utilities/float/index.html",
    "revision": "c46c33a00866d1a35b4ec7eb96b2579b"
  },
  {
    "url": "docs/4.1/utilities/image-replacement/index.html",
    "revision": "f050ed2ab89eb30e60039090b8a35996"
  },
  {
    "url": "docs/4.1/utilities/index.html",
    "revision": "dcb9aa02069ced089c4fcd4e4f30c222"
  },
  {
    "url": "docs/4.1/utilities/position/index.html",
    "revision": "359b36868e336d3aed839ac988dc20fd"
  },
  {
    "url": "docs/4.1/utilities/screenreaders/index.html",
    "revision": "b8e733cb1b0a84ec7eac3abfccbeac86"
  },
  {
    "url": "docs/4.1/utilities/shadows/index.html",
    "revision": "02e5824530d822d12b267824523ba249"
  },
  {
    "url": "docs/4.1/utilities/sizing/index.html",
    "revision": "73edf4f95d7252dbfc5cd59ac0c473d5"
  },
  {
    "url": "docs/4.1/utilities/spacing/index.html",
    "revision": "ce3e7696819e39c17273fbd570f7d085"
  },
  {
    "url": "docs/4.1/utilities/text/index.html",
    "revision": "f5b13cbac22a01674e4075eb777554e7"
  },
  {
    "url": "docs/4.1/utilities/vertical-align/index.html",
    "revision": "061a1a30cbd66c368fb9b276aafbe31c"
  },
  {
    "url": "docs/4.1/utilities/visibility/index.html",
    "revision": "3071c9f65c5605249288a055eeca3a87"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "b891f72b6bc357de623f2e433f491668"
  },
  {
    "url": "docs/index.html",
    "revision": "b891f72b6bc357de623f2e433f491668"
  },
  {
    "url": "examples/index.html",
    "revision": "72c4229720b31c3f02c6668ee495ae20"
  },
  {
    "url": "index.html",
    "revision": "727b265072ecce8782b9f62a4de74e96"
  },
  {
    "url": "redirects.json",
    "revision": "eba6ab9e8bbb8475321c72051567e702"
  }
])
