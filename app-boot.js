document.addEventListener('DOMContentLoaded', async function () {
  var b64 = (window.__GEZ_GZ_PARTS || []).join('');
  var bin = atob(b64);
  var bytes = new Uint8Array(bin.length);
  for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  var ds = new DecompressionStream('gzip');
  var stream = new Blob([bytes]).stream().pipeThrough(ds);
  var ab = await new Response(stream).arrayBuffer();
  var code = new TextDecoder().decode(ab);
  var s = document.createElement('script');
  s.text = code;
  document.head.appendChild(s);
});
