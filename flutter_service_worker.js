'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f570719bcba8fb0fb016dac77bed4af6",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2145b9af3034d9705fd78e0154d14f7e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e0a2ee1f9add3a01a3fc21bd0743bc21",
".git/logs/refs/heads/master": "e0a2ee1f9add3a01a3fc21bd0743bc21",
".git/objects/02/49116f1f161b54b3f209bf7b08b9f35981c958": "d13a6302011068dd61876ad296063f5f",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1e/3e6478157a2af044ecb94884e56e2a4a7e4bbe": "8986d39bf72d0b335efb47829b4a7e87",
".git/objects/28/e18ee97222845618612f1b4d773728fb03eba9": "31bca0855b5774454206f1b46ca38bff",
".git/objects/33/d848c643a75dd08278417b281f91e13deed975": "b241e284e1a7547300dd2824f701175c",
".git/objects/44/479759539ca8d443a18a5abc0ef178b7f1d111": "5781377ed747d0bcb14bc8a66f67c6f7",
".git/objects/45/4b640c964f88f52031a406e2e13246bb2b5468": "269e1fabcc18036307c37ca4d3eaf2fb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4e/0c5105a1820330a395d44845738f8e7e0758f4": "ed830f41dc05cb0918e13cf000350898",
".git/objects/4e/cbe973c28eebf4c5f862bc0c8a5f850c2c386b": "1bb1b762c2396a9c9bb784f855ca6d8f",
".git/objects/52/571e1d560d1bc4df75139f8dbfd3439a09da93": "3860d072dc13b2a8f3b6f0b0e65d3e60",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/346a5b753f8edb02c7d986f0e2604d8cdd1827": "cd662218e2299712ddca2606ee120793",
".git/objects/57/10614699a42f46ed99e31041ace9035a50d977": "001ded27375f554c85412acad69a0f4b",
".git/objects/57/dd3a0663e317b07003a7b156300e83a26170a7": "a2b5fafef36083e81e1968e92365702e",
".git/objects/5a/236d06db97f8774cb530b1aa95d25a377f850b": "b0b5bdc429c20fbe4c6029396590a3cb",
".git/objects/5a/e62b597cf3a0951cceea5e127c9ba98581b665": "d329d75e00c0335dc9b60ddf42ba1546",
".git/objects/5a/f230ded06425bde29ab1ed5a2c8006f429e23d": "4f16b419f086cf7604cd31861c2b3512",
".git/objects/62/51b9afb11a9fbcad495ff5aee1f5270b990fe5": "d7f9dd14618b865c75edcb738a9ee213",
".git/objects/66/c317037e328b6b9fdc15f3f2645774ee27bd34": "122263d813399a62c788855955585a29",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/1b882c25d6bea9090434f24cc4de32d4b2d261": "0d12972f462631c5341d84ca38ad5c9d",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/76/3579103f011bb8feda20e027602835f734109f": "49e606bece75a00e7b431786d13a6342",
".git/objects/76/3893fd60d669813eee1e05ef2333fcc4f4421d": "22c981c24b0e039f4923434c39a6a468",
".git/objects/81/06f703163b1b621dee6d4df1bac9d03ee16ad2": "4cc72cddd4fd80eed6c996249abcaefe",
".git/objects/88/a30eb62b7b65bbf26e44bff941225cd715e443": "f8ca023b91c1ba04284d1c04794e930f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/343655d9f3677217bc2ba890d9aeb70f3b2e31": "fb6d03244a252b4d1b94a3283c4a19b4",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9f/60edfd72da374bdc545ddb7e2f4b97b75b2f87": "d0aeef566253f4622514004d5f9c2b22",
".git/objects/a1/cdb32ad37f230a5aed886722c3a9dfb46d03fc": "b48ba79f88ff14c78a64fae3d570fd71",
".git/objects/b6/47bc14e816c068cfc6b6cb40e023094200b6bf": "c92eeb68c95a8561479d16b9f9e519b8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c1/d73170ab6e9e2ccc2408f066f7f58e0cba748f": "eab7380c641db9e09aa681bcf04b46c8",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cc/28080cfc1f9c006332fc63c5de97fe27b61d20": "f94c387ae5db07a2cdd46d95a9839a91",
".git/objects/d0/63ec5bf248845574374222d169fc997b7c569b": "0419eec7586a4e651a4cd9e933fd4a37",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/83d5ad89680f5abb0e0470912b94bf083a4833": "ea84f573980ac37582fc7a627c51f8b6",
".git/objects/d5/dcf94f7413401a3b860b7a6cfca6a5e5aca562": "b4cc6c669831d88cc0802e117e95266e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/74eea433ff8ba44616d95aa9ba676902be974f": "d5b67590f1cf2360e88482ee87da80ad",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/0f7d88728a5bdce494cbccb516b97331e10fd3": "92c55ab37b50ced9f231b18afe21c26d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/6513b926a131f471ff76d628e7fdeaf72af0f0": "479ddb9d6b979b96d826b4543778db6b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/b74a5e0551d4e4aea28bd59eb34dec7857d7b5": "928cad49fb74f92693296422ccc3be4a",
".git/refs/heads/master": "fa02dbf25c3f9c4e5ab95e119b0cf170",
"assets/AssetManifest.bin": "d0a08866179a29a644fdd9dfe0b72481",
"assets/AssetManifest.bin.json": "c3948bcf47c0159433e38f8b757eecd3",
"assets/AssetManifest.json": "b760154b026dd7d1ea8ddb72d6be519e",
"assets/assets/bg2.png": "367c026c137d067829a4397052d97a71",
"assets/assets/bg3.png": "5ad68f138ceba1173c263c9b695843cf",
"assets/assets/bg4.png": "8e5f7b0801df836c108a47965bf4ee58",
"assets/assets/bg5.png": "034cab9c65a65094951f168d12a72506",
"assets/assets/bg6.png": "5b519ba5b79d7a7c62788ee1a8de5233",
"assets/assets/icons/canva-filled.svg": "86344926b04d6f2785ae98e8c58a3dd4",
"assets/assets/icons/canva-outline.svg": "5559179dc451a7e970a15e0121795357",
"assets/assets/icons/dashboard-filled.svg": "adffc2ad26fdc65357088670e551fa36",
"assets/assets/icons/dashboard-outline.svg": "c45080932d78fe0e82d26f889c49260e",
"assets/assets/icons/logo.svg": "1be4dc290d154493319c2bf1d3dbc05d",
"assets/assets/icons/settings-filled.svg": "17defbb7f983f028e54696883b89dbe3",
"assets/assets/icons/settings-outline.svg": "651ac07a66c64ed99165feeb4e572d3f",
"assets/assets/icons/wallet-filled.svg": "1257f22b5162cc18e75b80913949d740",
"assets/assets/icons/wallet-outline.svg": "822a9c1c049edbfd868776c02270098f",
"assets/assets/logo.png": "c4c3bdd447a52471bbdbb2288bf8b89e",
"assets/assets/nophoto.png": "a9cfe2f2b47ec09ed28075ba18b68643",
"assets/assets/regentSpaceBg.png": "1aec7aa8e4b787adbfa07893fdf224d1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8cc59478538b46926fa0f9a4ce37fb91",
"assets/NOTICES": "b338760a944dfe70eea677b5143cbed6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "dc9884dd2a3a87e2b1f6d86c93ebed96",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fd054c3abdfff3e1c865ac20c04fb78f",
"/": "fd054c3abdfff3e1c865ac20c04fb78f",
"main.dart.js": "c6bdbee171b035373cae5bbafd418e0e",
"manifest.json": "0d8b715ebaa9b880631019f707059dd8",
"version.json": "7e0a6a5a002aa8f205409826e6d22d16"};
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
