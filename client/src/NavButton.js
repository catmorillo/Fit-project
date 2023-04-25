import { useNavigate } from 'react-router-dom'

export default function NavButton({path = '..', text = "back"}) {
    const navigate = useNavigate()
    return (
        <button> OnClick={ () => navigate(path)}
           {text}
        </button> 
    )
}