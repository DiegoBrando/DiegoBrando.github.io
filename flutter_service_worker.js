'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b616f80cf8c7a8e41fadac527ed1c983",
".git/config": "465b0ae7a1ddb2a05160d9d9ed63a519",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "87ad918693a90cfe5fc9b02f1ab6293b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0147b340d0358c150b5eeb712c335e9c",
".git/logs/refs/heads/main": "6623c3b93ef55ddfcf418f633231b8b4",
".git/logs/refs/remotes/origin/main": "d78ee095d3da5fd657f8ab46089cf6a6",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0a/6d2b4d83ecb77fb66ee79664b187809159d940": "f591028334cfc14fa28b2f74389ef12e",
".git/objects/12/d3872aceb1a64a5416ec8ebe567fbdfd650c4d": "bb366c85bb96a7ef28d7000ea1414a97",
".git/objects/1f/aec954b4efdf3de53287a28040e734318b706e": "9f1c35021bc619dbbad80ef380315354",
".git/objects/1f/c7bb1b1ef01205429d061a7af014cb82575a28": "3fa026b3c2703e1ba9bdc8bd32e44275",
".git/objects/20/3d2d99a37dcbebca043f11198a079a321725e5": "9c37c8f914c0b2e4fc7d0755d8bfb010",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2b/3326333b9877316f306bfdbbe9666a1c65389c": "a750af91aaed3882c984cd8e3921294f",
".git/objects/2c/cb7cf47594817db4567be1458fbd29486092fd": "5883d678acb9124d5c20e578d445cf49",
".git/objects/3d/eec818228df2b7b8594020e746ba54d0a5180f": "f5d3f303c1ce88ae616ab73608f0c86a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/dffe7bc9c3e3f77d9a8e39c6fe2cdb346e00c4": "d6167b14802b969882e919eb6b652c92",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/05e85aa0b8783a5e2d722934d28dbfdac6fa63": "2f0d1c66729142e22879ccd85e9e5117",
".git/objects/53/cb1dbc23d89b0a4a172c1cd1976897c9fcdcb0": "944fd2ff93f7a26326d5aef74fedef19",
".git/objects/57/953737a0407767fba87c05ac20fecb79ab26ce": "f4707fcd48a4b5f6586d6f8f296960af",
".git/objects/5e/b455fe18cf5633669f33cb641464f891b989ee": "27af680a3b4f84f9079e14bfee5cd825",
".git/objects/60/710c2049b9a8b96e3aacb317351fcfd07b6858": "ba4ad92149f944c90cba0d8b4e1cf83d",
".git/objects/67/b040b1de5848434a7495330f649d5806805d41": "748a20d160b4b95d7d259276d40943e5",
".git/objects/69/62b8716f844eb83fca13d76101082188cd53f2": "b08c11affc4e125a0cd2623649e4409c",
".git/objects/79/3a1e5ac179129fb3844c28a816d59ceba97cd2": "158481603e20c44e7345666e9b9abcd1",
".git/objects/79/3db6fa30087db54e9b4fe1bffd29bfd18ffc98": "56e4a31d1bb7b04a652c23bed6b801db",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/08dc02c0329fa43896c6353bf4b801534e1809": "2407b692faa1dbea4a367269a938f80d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/6a251dec447db05acb0ea91b29b664220a3c2d": "0d517133477a179ff2a4926ab7f90bf2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/0743143aea2524c1865006a0fa28b0a20ec260": "cf27e45a2e97d762dc24f8924bb3007f",
".git/objects/95/00f3a0d93d8d09874d8f3c39cb1eeb44fc50fe": "99f85a7abb5a0a32e55cdfd49fd60752",
".git/objects/97/0b5a37f9fbe346eccb91e48856b778d3ab4b05": "c1fc5ec2a546d95871be8270eea22a72",
".git/objects/97/b3257b1c244d0090586a16e9033d8b4cebf90d": "6c81d0654398a45bd041a68549968caa",
".git/objects/99/ceefc4ff1a3f0a9279e84e158d17afef6c089c": "8d1c50f8529b5b504db893b6a2870506",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/ba1f9a5422f400d32e3b8be22edf05594cddd3": "16df5f43ec058469287d7c85e16126a4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/6eeb888e0ae6b673da71abf27a69f986f9481d": "776be4b4f06f18e13c2cc75298dd66b2",
".git/objects/b6/691d74ff10da239f0274f49c17f83cf2febe98": "6d8922566413066666888c7b89a85181",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/02f86d144efd84f618b29fb3b24fb10052fbfb": "a6fc46d3f385d71a6f7af9ca22f67735",
".git/objects/ce/bfa5e8b1e2ddfb535f21bafd889dfdaaaf9996": "8880de8c2829a5cc94945b4e7c42f046",
".git/objects/d7/02b063e517be5dfa0f10e5b204fa6be0df0881": "1fd3e437ac888a62ec9df028defb23d2",
".git/objects/db/0b9c8cab468ea258bcda633c45210f71047a87": "1222512e9fbfae5702937ccabb22896f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ec/b1aba1fa7ee0fdd41eac45471e60b5e419b8ee": "1942e385f71da41daf7c79f5ee7d601c",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f7/e1443570e678a933939192706c5b75d9e8f7a4": "e9244dfe2ed504d4f339e1e09ad7766b",
".git/refs/heads/main": "c1e5bbd98ae17c8b7f6a17f668c3ce49",
".git/refs/remotes/origin/main": "c1e5bbd98ae17c8b7f6a17f668c3ce49",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "cbcf43f920a019cec24934126ead17b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8a14b6b2f861895b953069f741c9d49d",
"/": "8a14b6b2f861895b953069f741c9d49d",
"main.dart.js": "48393dc24189df693c24393a2a2c1e75",
"manifest.json": "5abe6dd1a91b4a635e32b964f8c9af04",
"version.json": "5ec7ce90400bb00747103e71b9f86526"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
