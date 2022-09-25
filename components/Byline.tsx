type BylineProps = {
  author: string
}

export default function Byline({ author }: BylineProps) {
  return (
    <>
      <div className="byline">{author}</div>
      
   
    
      <style jsx>{`
        .byline {
          color: green;
          font-weight: bolder;
        }
      `}</style>
    </>
  )
}
