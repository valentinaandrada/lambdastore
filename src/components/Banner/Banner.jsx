import './Banner.css'

function Banner({message}) {
  return (
    <div className='border-bottom border-top border-dark'>
        <p className='text-uppercase text-center mb-0 f-smaller py-1'>{message}<span className="txt-anim"></span></p> 
    </div>
  )
}

export default Banner