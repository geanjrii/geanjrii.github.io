'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "061068e2c9bf138d06622981ae841092",
"flutter.js": "35408b1be0f5de68cc5d1c5175d717ed",
"canvaskit/canvaskit.wasm": "0601f94e5ba7422d7d0f15082f291f59",
"canvaskit/skwasm.js": "95f1685cbe3a3e1d94cac24eb0148a02",
"canvaskit/chromium/canvaskit.wasm": "a3ac017bb86e93f8e7aa79afdb9a6a7a",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "c21f552d607bfd35d6c2c65e7594e17b",
"canvaskit/skwasm.wasm": "87c3f232cc3c98bc37a5857ce259dcb5",
"canvaskit/skwasm_heavy.js.symbols": "3b16e8e140eebd4a10c80852be7e9354",
"canvaskit/skwasm.js.symbols": "1a5b8c8bd31b6b53fd8a420bfc634397",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm_heavy.js": "53b1d7d620269ae543e0dc5311a07f49",
"canvaskit/skwasm_heavy.wasm": "7d6fb8111343b68829a36dfba156fc57",
"canvaskit/canvaskit.js.symbols": "d27e66928fc257409c5b285ca140647d",
"flutter_bootstrap.js": "0bc5902d08eed15bd588f9cf0a648497",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "724884feee8f5731e023f35885d07c92",
"manifest.json": "9a8e11a039265685bddf5bc643d094b0",
"main.dart.wasm": "8e89fa0564c533cf35f35f9b66f9dd8e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/AssetManifest.bin": "5b345c57f93ab74d5e0d0002dc12a2ba",
"assets/fonts/MaterialIcons-Regular.otf": "5b89f8b1840b553a68f541086fbbab46",
"assets/packages/dev_icons/fonts/devicon.ttf": "eb29517242b5a2d2845d59b46359848e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "d3691079986c5829d58d309a60460f0d",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "e151d7a6f42f17e9ea335c91d07b3739",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "767d2161ba8d170b0c902a608bbe5ebf",
"assets/FontManifest.json": "e8c49efe2f08c739f76efbfc24b15e8c",
"assets/NOTICES": "8564e292197d87f0e208aad092233436",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin.json": "0cd4d825d91536c8a6c4ca647861cbea",
"assets/assets/appainter_theme.json": "974e8f2f09af94c0aec0e66e0de3b837",
"assets/assets/icons/javascript.svg": "50b1f12e766978b8b947c986193a175b",
"assets/assets/icons/couchdb.svg": "4a77c15e9fcf71448877d3c3edee11c0",
"assets/assets/icons/cplusplus.svg": "662ae5fa986d4a981b1584d6c15feb1d",
"assets/assets/icons/gitlab.svg": "67248b2ee2d0491406b2daf9bc2080b9",
"assets/assets/icons/assemblyscript.svg": "ea06aef4d3cdfca6167200ee9ff339d4",
"assets/assets/icons/vim.svg": "ef2581741637dc5197c294ee3e7ffe1f",
"assets/assets/icons/firebase.svg": "6e071f37c085cca59f19eb6d737061d4",
"assets/assets/icons/swift.svg": "8a2accda2249fa334a94d9ecb93e8175",
"assets/assets/icons/git.svg": "877dcf2b9755734bc774073a5a2ecc3c",
"assets/assets/icons/sqlite.svg": "6f40dd7b4646472d16d0080d88e07caa",
"assets/assets/icons/jupyter.svg": "2195ed1c84d0d039fb29656c844419a6",
"assets/assets/icons/mysql.svg": "863dfa17a3cdb94115c3b1204b98b164",
"assets/assets/icons/markdown.svg": "fb9a0ab85ab300948441c90a07f42ea3",
"assets/assets/icons/mongodb.svg": "6212cfc762500f22443465de26bd690a",
"assets/assets/icons/html5.svg": "60355ba2b28d03b4e5309a326de1bfde",
"assets/assets/icons/dart.svg": "9bdebce5ff1d66b398d9ffccd878a5e3",
"assets/assets/icons/postgresql.svg": "ed9ed79d3ccb6257e38ce824f2523725",
"assets/assets/icons/latex.svg": "f03841f2982a507bb19889d038d60f7e",
"assets/assets/icons/ubuntu.svg": "941a95d3df5665d5fc9987430c5b8285",
"assets/assets/icons/c.svg": "f87eb6a2dbe0aebf108216b38c7c4acf",
"assets/assets/icons/figma.svg": "5fd52845a776200afd282c0488af6f2d",
"assets/assets/icons/linux.svg": "e950031222dd200ee9a0581adec0ce43",
"assets/assets/icons/bitbucket.svg": "da08976ae4ccb53d56c3438c48ad960d",
"assets/assets/icons/flutter.svg": "ea67ff4e8060634c0008c912a810338e",
"assets/assets/icons/lua.svg": "cf5e3b745050e1a380041859df16fbfc",
"assets/assets/icons/nodejs.svg": "f216a4a331e174408defcde7ff8327d1",
"assets/assets/icons/neovim.svg": "b00e2de92769fb5305be053d13a71d62",
"assets/assets/icons/css.svg": "2348e003fa97f1e2a6955aae79911a2c",
"assets/assets/icons/kotlin.svg": "d4ba1a83e6ec9130f561c4b709c2349b",
"assets/assets/icons/github.svg": "8dc66f6f6f62dcd1661b79ac93910a05",
"assets/assets/icons/python.svg": "76863e22804f3ff7ad5aa94ae007feee",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/dev_child.jpg": "277e71cd1b1f2a35bd95660155a55388",
"assets/assets/images/dev_img.png": "91afd28c9b6ec89792b0d8ea1a350c4b",
"assets/assets/images/ruler.svg": "4791ae452335f1ba68a2787f872f3e5f",
"assets/assets/images/android.svg": "0a04451ad3b5886234ef80268c803e46",
"assets/assets/images/slider.svg": "a4fc3ee8b34de4bfab375880f4297c49",
"index.html": "303b6d77e7e5e44b7aa6dec94464ae16",
"/": "303b6d77e7e5e44b7aa6dec94464ae16",
"main.dart.js": "f29e340c7ff6c8a095a745d19e858b14"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
