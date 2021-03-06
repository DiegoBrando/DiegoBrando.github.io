'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6d99a8f4c66af6757295ad5e4b6bffde",
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
".git/index": "7086a40022f4c65aff89aa70cd55834a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5ab2b2ac4597b9538d993513aa8d90ff",
".git/logs/refs/heads/main": "64310ce71d4f15a8dc673842bac7c1f9",
".git/logs/refs/remotes/origin/main": "cdd1e1808c16c84b93d3de6dc874023f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/154f41856d89c6c52a252e12f01cc5c3ee0c74": "d4ae50cf2659a0ea4cd76c64fa11a670",
".git/objects/07/fc76dd266bf474e197048dc2f2850663338c13": "86e727d01e04737cfa75a36b0f4bf374",
".git/objects/0a/6d2b4d83ecb77fb66ee79664b187809159d940": "f591028334cfc14fa28b2f74389ef12e",
".git/objects/0b/0f31fbde1d5bf6d1d570881545cdb0f783ca1b": "0ba35e92013dd637846ce2bd2b6e9bb6",
".git/objects/12/d3872aceb1a64a5416ec8ebe567fbdfd650c4d": "bb366c85bb96a7ef28d7000ea1414a97",
".git/objects/1d/72709df2611877a90b2655d802f58476dfe64a": "bbe93c8a24b613561df2aeafc6b60400",
".git/objects/1d/c41f35a126b021aa95ee7eb14e7b70204ddf0b": "31e3945a17e1abb53d739cde538c7a59",
".git/objects/1f/aec954b4efdf3de53287a28040e734318b706e": "9f1c35021bc619dbbad80ef380315354",
".git/objects/1f/c7bb1b1ef01205429d061a7af014cb82575a28": "3fa026b3c2703e1ba9bdc8bd32e44275",
".git/objects/20/3d2d99a37dcbebca043f11198a079a321725e5": "9c37c8f914c0b2e4fc7d0755d8bfb010",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2b/3326333b9877316f306bfdbbe9666a1c65389c": "a750af91aaed3882c984cd8e3921294f",
".git/objects/2c/cb7cf47594817db4567be1458fbd29486092fd": "5883d678acb9124d5c20e578d445cf49",
".git/objects/3d/eec818228df2b7b8594020e746ba54d0a5180f": "f5d3f303c1ce88ae616ab73608f0c86a",
".git/objects/41/2020e6a2a33cf309b6c6113b771d26dd5825c8": "6c01264a40d80b1f24423e7a5e65c53a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/dffe7bc9c3e3f77d9a8e39c6fe2cdb346e00c4": "d6167b14802b969882e919eb6b652c92",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/05e85aa0b8783a5e2d722934d28dbfdac6fa63": "2f0d1c66729142e22879ccd85e9e5117",
".git/objects/53/aa50d0eb21fafe8e964ac45a5a6ddf76380101": "9db954683218c081415aaa1a5065a47d",
".git/objects/53/cb1dbc23d89b0a4a172c1cd1976897c9fcdcb0": "944fd2ff93f7a26326d5aef74fedef19",
".git/objects/57/953737a0407767fba87c05ac20fecb79ab26ce": "f4707fcd48a4b5f6586d6f8f296960af",
".git/objects/5e/b455fe18cf5633669f33cb641464f891b989ee": "27af680a3b4f84f9079e14bfee5cd825",
".git/objects/60/710c2049b9a8b96e3aacb317351fcfd07b6858": "ba4ad92149f944c90cba0d8b4e1cf83d",
".git/objects/67/b040b1de5848434a7495330f649d5806805d41": "748a20d160b4b95d7d259276d40943e5",
".git/objects/69/62b8716f844eb83fca13d76101082188cd53f2": "b08c11affc4e125a0cd2623649e4409c",
".git/objects/6d/4020b724f148dd8fc7385686bbece93109bd18": "a58d2ba7cd285c41d97de60b30eafed0",
".git/objects/6e/3dfa9e42f677dbed4cf5b8a435871478ac023a": "e554cdb49109745dcfb924ea61199214",
".git/objects/79/3a1e5ac179129fb3844c28a816d59ceba97cd2": "158481603e20c44e7345666e9b9abcd1",
".git/objects/79/3db6fa30087db54e9b4fe1bffd29bfd18ffc98": "56e4a31d1bb7b04a652c23bed6b801db",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/08dc02c0329fa43896c6353bf4b801534e1809": "2407b692faa1dbea4a367269a938f80d",
".git/objects/7f/1f8bf3a274324a9d61363a49dd54475a11060f": "a8ffd11939dd5de9c2adefd8d2865396",
".git/objects/84/768020c803e3f043e4398677b03c9c61607e55": "26b0855e27f585482a8cfc5c692a68cf",
".git/objects/86/4c197c76aa91f613726bb2f7f36ccdf445c035": "752a2c3874e20b8fe50fb7b03edca435",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/6a251dec447db05acb0ea91b29b664220a3c2d": "0d517133477a179ff2a4926ab7f90bf2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/0743143aea2524c1865006a0fa28b0a20ec260": "cf27e45a2e97d762dc24f8924bb3007f",
".git/objects/95/00f3a0d93d8d09874d8f3c39cb1eeb44fc50fe": "99f85a7abb5a0a32e55cdfd49fd60752",
".git/objects/95/ca9cb78e8dcec94db5fa92f1384e19edcec857": "bd3dc0cb38e16f5b2d1edc57825a602c",
".git/objects/96/5cfea3e67fc9386adb59cbe04902380da30cc0": "98901699f5ee70873cc073f7315790c9",
".git/objects/97/0b5a37f9fbe346eccb91e48856b778d3ab4b05": "c1fc5ec2a546d95871be8270eea22a72",
".git/objects/97/b3257b1c244d0090586a16e9033d8b4cebf90d": "6c81d0654398a45bd041a68549968caa",
".git/objects/99/ceefc4ff1a3f0a9279e84e158d17afef6c089c": "8d1c50f8529b5b504db893b6a2870506",
".git/objects/9b/8ed3e208259133f977a348a933805b79b4273f": "0091eaf09e5cc9e0b6a8242ed7bf60ee",
".git/objects/9f/4dc8e66b2539413c61311b96a6c1c5610ddc13": "e53b15c57fc7886c3bc6388b0090c867",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/a2f57505976a68955f3eedd2740cf81ac7534a": "aca59b6db1f2507da9b3d8c61b6e3e8c",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/b9ecd61f6668299cdda0e560e25395ebae49de": "8a293e5d47774c756d09227f749852d5",
".git/objects/aa/ba1f9a5422f400d32e3b8be22edf05594cddd3": "16df5f43ec058469287d7c85e16126a4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/6eeb888e0ae6b673da71abf27a69f986f9481d": "776be4b4f06f18e13c2cc75298dd66b2",
".git/objects/b2/740798d09e9c3bae333b555c918ff0acadcc2c": "cddca0fa3cde32470ce561c84665b2f4",
".git/objects/b6/691d74ff10da239f0274f49c17f83cf2febe98": "6d8922566413066666888c7b89a85181",
".git/objects/b6/79f25738d08dd4dc51e37b87b699e05438e092": "0ac4a35af64a2940303824231e8b273a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/d42076556582bdecb5688da2f0049c2c8ae4d1": "7c3503684a50c61ea5931ecf86653b72",
".git/objects/be/02f86d144efd84f618b29fb3b24fb10052fbfb": "a6fc46d3f385d71a6f7af9ca22f67735",
".git/objects/ce/bfa5e8b1e2ddfb535f21bafd889dfdaaaf9996": "8880de8c2829a5cc94945b4e7c42f046",
".git/objects/d7/02b063e517be5dfa0f10e5b204fa6be0df0881": "1fd3e437ac888a62ec9df028defb23d2",
".git/objects/db/0b9c8cab468ea258bcda633c45210f71047a87": "1222512e9fbfae5702937ccabb22896f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/c1ac4391610a1f01347e7a6fac736588ee27c2": "66fd37cb4338a4ec9dec4b8a896e714c",
".git/objects/ec/b1aba1fa7ee0fdd41eac45471e60b5e419b8ee": "1942e385f71da41daf7c79f5ee7d601c",
".git/objects/ef/0cdc924cbfa28f39afa6cd0a8aab4f2f4b645a": "55c9fb3e6c08940eb15b5814ba0337ca",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f7/e1443570e678a933939192706c5b75d9e8f7a4": "e9244dfe2ed504d4f339e1e09ad7766b",
".git/objects/f8/73298030fda5a211ff3e5808910fd8bdc94c01": "e72573ee8d27716bcba69a5a82d0789a",
".git/objects/f9/5e6a371020cf159ca9f4e6c634c04e4aedf3de": "970623bba1c615326c1947f83b12aca9",
".git/refs/heads/main": "6dcd93cf8d6f36a76ca62973601e89fd",
".git/refs/remotes/origin/main": "6dcd93cf8d6f36a76ca62973601e89fd",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "cbcf43f920a019cec24934126ead17b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ff289a549336f9a7f332a41b61e72e07",
"/": "ff289a549336f9a7f332a41b61e72e07",
"main.dart.js": "398c55dde2c529d0c58ff24633b8f25a",
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
