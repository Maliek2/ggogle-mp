type BylineProps = {
  author: string
}

export default function Byline({ author }: BylineProps) {
  return (
    <>
      <div className="byline">{author}</div>
      <div id="wrapper">
    </div>
   
    <script type="text/javascript" src="demo/dist/bundle.js"></script>
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <span style="display:none">
    <script src="//s4.cnzz.com/stat.php?id=1257060683&web_id=1257060683" language="JavaScript"></script>
    </span>
      <style jsx>{`
        .byline {
          color: blue;
          font-weight: bolder;
        }
      `}</style>
    </>
  )
}
