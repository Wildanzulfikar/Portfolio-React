import Github from "/images/sosmed/github.png"
import Instagram from "/images/sosmed/instagram.png"
import Linkedin from "/images/sosmed/linkedin.png"

function ImageSosmed() {
    return (
        <div className="flex justify-around mt-4">
            <a href="https://github.com/Wildanzulfikar" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="github" />
            </a>
            <a href="https://instagram.com/wildanzul_" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/in/wildan-zulfikar-398531293/" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="github" />
            </a>
        </div>
    )
} 

export default ImageSosmed;