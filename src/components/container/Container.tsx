import "./Container.css"

const Container = (parameters:{children?:React.ReactNode}) => {
  return (
      <div className="container-root">{
          parameters.children
      }</div>
  )
}

export default Container