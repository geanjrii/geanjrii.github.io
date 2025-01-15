'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js": "b020602fe53d8decdbafe62519206ca1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "d55153cfaaf6e572b5edbd552bf77a76",
".git/FETCH_HEAD": "e9166f24e7908d67f1398ea6af837d65",
".git/refs/remotes/origin/main": "acee569e5aac9e12504884f2a24f0131",
".git/refs/heads/main": "acee569e5aac9e12504884f2a24f0131",
".git/objects/ff/ffe0910957f393df99dbcc3fa70eaf8dc982b6": "b9b96fc41e2c83e4b5f147d23d5da83c",
".git/objects/ff/c713883491fb15870d8a8c6e5c1d242a112f1d": "80fab4bd1bfc67b19999ebcbc1c3490c",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/c6becea2ee840c66ef766a30ada7d3bfad3d33": "b84aab9ea389851c48745e0c041598cc",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/0e/ffcf4164cec9ed4fad569628ceff2aa9943d8f": "414d622090544699b2250a2796e50824",
".git/objects/1f/6cdb1ff15bff965579fd4f1688cf159c0e4149": "831d5083e3ca4f1a412ea0cf394a81a3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/0c/d8d9da28e3afdadd9fc9b962a00c98f4c80b80": "56a0a99ab24a97e5efa743bc9efb1fa2",
".git/objects/8e/552c3abf936b42c5ce243285bf82d0ee6e27a5": "808b10896b6438480874e73dabf0bb52",
".git/objects/8e/65711572910c5b8a2a375f1f4b29cd7a12fe23": "558e29b8f6955658c5bda928b9ab0361",
".git/objects/6c/373279a499aff1f62851ed1f7664b253c523fd": "a81f14157363b4ebacc138c46ff0e513",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/a2/408b55d9b820082b007bd992532d0806c21c72": "c768e76086c4c67b896575c4f1ad1209",
".git/objects/a2/7514f10bad916bff4169b178aaf52d216235eb": "fc2f42fea266e17d12e6a68c8c8208ee",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/e1/01f38e295e32fe2a53d48b37b7fe49422937f3": "a06b0e8c4f0e7a916ae5c3b40a5dc5f3",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4b/a92615b2f407674ec2644512870f3006d1bcf0": "8fc62ee8d3fc3c28af8da956b80dc287",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/e3/6ae00a613948552838610b92cea05cafb2979e": "4bd36fb7c7842e8a30b1b5703be9a605",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/8a/a30cf625903bce94ce3037276d2cbc7af28927": "5e36f8b5c9354fb98b7446bd40f91025",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/da/ef49e2c21db63529152dbe9380449faa16beb2": "b75d50e93b9ffa3fab3a50dddf71f0d8",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/32/d79de98fc1243e751fd5939936cd84d0bc0d8b": "c6af520a1e1ba60abdc133a35d6c4084",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/65/96e1783045c0d00761ced0be6ac034cf281e78": "dec6552b9c6bce2ac9715b7c30474e84",
".git/objects/b0/016b8e7f8de917cb3ca0d6ad69bebdb6029280": "6faf20f42b236582d823ed68ea54e6f7",
".git/objects/48/373701ad344c5c745998831e3fd71fedbdcaba": "3a0601862264a4142f6fe4c2ce4847a7",
".git/objects/db/58662200fd6f136bd0fdac3c7cacb7c95a709d": "b515eaefd36ea029dc06a71878ad2bbb",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/db353e4b42f901f971729029bedaa07f3f7c2c": "bf85a3154c680779753b8a54674b27ac",
".git/objects/95/b3c9568deaf22dcaf620a157b2af19dfd82ceb": "d59d37958877718adb37e451c11157d3",
".git/objects/95/f33fb16cb17b99cd4ee20fbad533c79bb8d7b0": "1b23def454f5abf05e75b50f1246f6a9",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/d6/aa36c2a60550adc3a9261c73791b2dbca15729": "5a08f41c4aee9fad4cc5b69454f9107c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/a5/2ee9dfe5ada3e0c11221999cec2365cb455f9c": "a5e8f27468aa5944bfdc345518b583f2",
".git/objects/89/372c0f9455749beb908495c1ff97addfadac95": "b80016011677e4f2bf67d33a98f83d62",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/34/7f14e61d9223153092dc6ee97528d0c4322620": "17baa5edd2286af91fd6e3db3f4c7e26",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/0f/c066ab604cd2d2da50242787437cd050bda454": "9188b7787ae4665e3d91a2dea7f31fbe",
".git/objects/97/16a7a662dccadbaed17a016dca0b3cb80f783a": "c62d2593174a7cb4099715d6cdd816fe",
".git/objects/97/42d7999ab640d494e47baaa31cf27ad00968e1": "17d015b1b0f4dc5ec6e10e2a4dcd6319",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/a7/1179b8dc3327cf8eba22bca4165c2210094227": "33e015cd8da75b2333c97f2ca5ad8c33",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/35/44f168b7bf94a25dd370e1c266d583db01e40a": "4b8c5739bf875a15089b4555cbbc7fde",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/ed/93f1f4345022661d4eccd8a0e4029e23c43111": "0b7fc8e84688d021e2f6478c94a92195",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/ae/ff15774ac3fcfee9ce6300080bd603e54dd409": "b54bcb5b32f6f6ff7d00c50b3bc0bbba",
".git/objects/ae/e6a80028ad22bbb107244f8c38461d3f9706c7": "4d113fecef6f3d507793976c51b91182",
".git/objects/96/7dbab3a7ca77dd1133bc0543b5190ab4a37698": "4b60f55fc993cc5ea80989990434793c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/e4/ee45cdb16a5314c176f117acd87d6116254229": "0e9c502d28d13900dffdd9f487d0c5f0",
".git/objects/2a/af355673ce7e5b25ecb3c2e20eebfa4a80cd95": "d5a3e994d80104262ebb34b2c209f908",
".git/objects/c4/0b6b37a0ba94497da33be264831c6c92e033e1": "4d36633909661884e8e6c9d0db73de79",
".git/objects/08/a181e36ec7d4f7d209a6818674d191b0b8ca9b": "336608e2f58da4e31a92685ab723800a",
".git/objects/12/5a0b5dc784716a6fce50df1f3987c3df7a21c4": "078d50b890fa92a2f93c329d479f8693",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c2/8783baa82796bc1e8b37f03a0d4e63867a9872": "c178082777a653e791c5b9e910a9b0b6",
".git/objects/37/0678b4fda0ad1db289027851307906b6f57660": "f872d91a0523cf5db84e9ecee5ed480f",
".git/objects/c5/83686217e817cda9362074b16dc40c94f16731": "ba4ab539211358de2b86a4e0d3644fab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/ORIG_HEAD": "acee569e5aac9e12504884f2a24f0131",
".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "6e3bab327ca2cdfcb4be3c438a9e9ca1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0225e5f455d26134a878da32ce2a56a4",
".git/logs/refs/remotes/origin/main": "7cd26eb8dcbf41f65b8a19e0c8402dc8",
".git/logs/refs/heads/main": "f989364939f2ed3eadb8e49db96b9296",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"manifest.json": "9a8e11a039265685bddf5bc643d094b0",
"index.html": "303b6d77e7e5e44b7aa6dec94464ae16",
"/": "303b6d77e7e5e44b7aa6dec94464ae16",
"assets/AssetManifest.bin.json": "71930e5d37ad031487c5253db9b6ce74",
"assets/AssetManifest.json": "c2458e78ba18cef7c669f5b2f351a2ee",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "1409cd0a97655e31e07a0582c61c8c07",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/AssetManifest.bin": "970a33ec4726d09e076b02390fb40081",
"assets/assets/project7.png": "be9cae5cf3e304d56ee738e49cf25431",
"assets/assets/project4.png": "1770fda79f31c0e931318ed4dfd65910",
"assets/assets/hackerrank.png": "f588b5970e45ab1f5baf7afb9cb1e49c",
"assets/assets/icon.png": "280061a25e491cd2ab4a6ffd889bc66c",
"assets/assets/project3.png": "c940e51b34947ee20153517adb7dd10c",
"assets/assets/banner.png": "5e061667d9591c613f1685daa284586d",
"assets/assets/github.png": "b1dd376647549c8aa32f18564466eb99",
"assets/assets/tcc.png": "9a1c878529ba5a4dc87983563d1f08e6",
"assets/assets/skills.png": "59d10cba7e5bae6122518e3e6f8f414e",
"assets/assets/project6.png": "0a1bacec84a58f29104f5192358eae28",
"assets/assets/project5.png": "2b80c3107d6c9dbd1c4ccedc92877815",
"assets/assets/facebook.png": "14955f77faa7dcc492daf87b97d17755",
"assets/assets/mypic.JPG": "1b51275f058158aabbf5fe423c3f5f55",
"assets/assets/project1.png": "526ba0a1ca70c5b5ca97ab039024b09c",
"assets/assets/linkedin.png": "a8c88457d36dda46bef819853f70f6df",
"assets/assets/project2.png": "6aafecd7b8219bae568989b9f83f2a96",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "206c49aebaf66c817a746af6ed26eb6a",
"version.json": "061068e2c9bf138d06622981ae841092"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
