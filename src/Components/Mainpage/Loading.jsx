import LoadingGif from '../../../src/Assets/gmailintro.gif'
import '../../../src/tailwind.css'
const Loading = () => {
    console.log(LoadingGif);
return (
    <div className="loading" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <img src={LoadingGif} alt="" />
    </div>
)
}
export default Loading