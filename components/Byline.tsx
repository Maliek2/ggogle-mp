type BylineProps = {
  author: string
}

export default function Byline({ author }: BylineProps) {
  return (
    <>
      <div className="byline">{author}</div>
      <style jsx>{`
        .byline {
          color: blue;
          font-weight: bolder;
        }
      `}</style>
    </>
  )
}
