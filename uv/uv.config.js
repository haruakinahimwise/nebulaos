self.__uv$config = {
    prefix: "/nebulaos/uv/",
    bare: "/bare/",
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/nebulaos/uv/uv.handler.js",
    bundle: "/nebulaos/uv/uv.bundle.js",
    config: "/nebulaos/uv/uv.config.js",
    sw: "/nebulaos/uv/uv.sw.js",
};
