import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { TbBrandLeetcode } from "react-icons/tb";




function Footer () {

    const styles = {
        footer: {
            backgroundColor: '#333',
            color: '#fff',
            padding: '20px 0',
            textAlign: 'center',
            position: 'relative',
            bottom: '0',
            width: '100%',
        },
        footerContent: {
            maxWidth: '1200px',
            margin: '0 auto',
        },
        socialLinks: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '10px',
        },
        iconLink: {
            color: '#fff',
            textDecoration: 'none',
        },
        icon: {
            transition: 'transform 0.3s ease',
        },
    };
    

    return (
        <footer style={styles.footer}>
        <div style={styles.footerContent}>
            <h2>&copy; {new Date().getFullYear()} Thomas Gonzalez</h2>
            <h2></h2>
            <div style={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/thomasgonzal/" target="_blank" rel="" style={styles.iconLink}>
                    <FaLinkedin size={24} style={styles.icon} />
                </a>
                <a href="https://github.com/Tgonzeiny" target="_blank" rel="" style={styles.iconLink}>
                    <FaGithub size={24} style={styles.icon} />
                </a>
                <a>
                </a>
                <a href='https://leetcode.com/u/tgonz/' target='_blank' rel="">
                <TbBrandLeetcode size={25} style={styles.icon} color='white'/>
                </a>
                <a>
                </a>
            </div>
        </div>
    </footer>
    )
}

export default Footer