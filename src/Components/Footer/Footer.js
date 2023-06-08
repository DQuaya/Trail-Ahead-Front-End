import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-bttm'>
            <form>
                <h1><strong>JOIN OUR MAILING LIST</strong></h1>


                <div className='input-fld'>
                    <input required placeholder="Enter your email here"></input>
                    <button className='sub-bttn'>SUBSCRIBE</button>
                    </div>
            </form>
        </div>
      )
}

export default Footer