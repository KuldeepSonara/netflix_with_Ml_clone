import { ArrowBackIosOutlined } from '@material-ui/icons'
import "./Play.scss"

const Play = () => {
  return (
    <div>
        
        <div className="video"> 
        <div >
 
        <iframe style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, overflow: 'hidden' }} frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x8hcwif?autoplay=1" width="100%" height="100%" allowfullscreen  title="Dailymotion Video Player" allow="autoplay"/>
        </div>
        </div>
        <div className='watch'>
        <div className="back">
            <ArrowBackIosOutlined/>
            Home
        </div>  
        </div>
    </div>
  )
}

export default Play