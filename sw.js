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
    "url": "android-search_icon-icons.com_50501.png",
    "revision": "e69003609e8094142c3cd7ce5361a679"
  },
  {
    "url": "ceu-azul1.jpg",
    "revision": "9a39e4c7d6c28b453da1cac05e4b3a5a"
  },
  {
    "url": "cloudy.png",
    "revision": "4dc8014edb976cc56a8c463f62522509"
  },
  {
    "url": "cssAPP.css",
    "revision": "2d2fd5bf815db06a88e15bac31d7e04f"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "bdafb4333b14e0e1e184560df1dc27ad"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "b9f19d3e8e3688d7916005f0fa00fc01"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "a9c55f1df9a3725461b8894c2e162acd"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "b75289cf5589ff542fc0a85342d7d97e"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "06e81f3bc4a2f0d2cd0b06be0ef8682e"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "e64b9ac52c0a80d5a4e410f896c7f9e4"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "7ca25f0a92285d3ef5f3b665920d9c8b"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "153748ae0bf17bf3c8ebaae4dc821a0e"
  },
  {
    "url": "index.html",
    "revision": "b7045f2488dab904ff4df3c76e1db5cc"
  },
  {
    "url": "manifest.json",
    "revision": "18828dd50c84fff370a2e7d88d1bd5e6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
