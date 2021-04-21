# Media Source Extensions

根据 [MediaSource](https://developer.mozilla.org/en-US/docs/Web/API/MediaSource) 和 [Javascrit中使用MediaSource播放加密视频](https://blog.csdn.net/camike/article/details/82797768) 写的可用 demo。

源视频文件是 frag_bunny.mp4，通过 [mp4split](https://www.bento4.com/documentation/mp4split/) 工具将其剥离为视频和音频两个文件，并且各自切分为若干个小文件。

*mp4split 是 [Bento4](https://www.bento4.com/) 包含的工具之一，另一个常用的小工具是 [mp4info](https://www.bento4.com/documentation/mp4info/)*

```bash
> mp4split frag_bunny.mp4 --video --media-segment videos/video-segment-%llu.m4s --pattern-parameters N
> mp4split frag_bunny.mp4 --audio --media-segment audios/audio-segment-%llu.m4s --pattern-parameters N
```

然后通过 ajax 获取分块数据，包装给 SourceBuffer ，然后把视频和音频的 SourceBuffer 喂给 MediaSource，最后把 MediaSource 转换为 blob url 给 video 标签，就大功告成啦！

## mp4info

上面提到了 [mp4info](https://www.bento4.com/documentation/mp4info/) 这个工具，这里来收个尾。可以看到代码中，我们会用到 mime 类型。

对于创建一个 SourceBuffer 这个 mime type 是必须的，而且在某些平台上还必须提供具体的版本（chrome）。

那我可以知道我的 mp4 文件是用 avc1 编码的（用 [MediaInfo](https://mediaarea.net/en/MediaInfo)），但是 MediaInfo 里面并没有写 avc1 的具体版本号。

所以我们就需要用到 mp4info 这个工具啦，只需要

```bash
> mp4info your_mp4_file.mp4
```

就可以看到所有的 mp4 文件信息了。

什么？太多了？用 grep 呀

```bash
> mp4info your_mp4_file.mp4 | grep Codecs
Codecs String: mp4a.40.2
Codecs String: avc1.42E01E
```

就获得详细的编码器以及版本信息了。